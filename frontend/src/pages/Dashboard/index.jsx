import React, { useEffect, useState, useRef } from 'react';
import { Container, Content, Label, BoxVideos, BoxActions, Video } from "./styles";
import io from "socket.io-client";
import Peer from "simple-peer";

import { useToast } from "../../hooks/toast";

const Dashboard = () => {

  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [serverFull, setServerFull] = useState(false);

  const { addToast } = useToast();

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {

    socket.current = io.connect("http://localhost:3001", { transports: ['websocket', 'polling', 'flashsocket'] });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    socket.current.on("yourID", (id) => {
      setYourID(id);
    });

    socket.current.on("allUsers", (users) => {
      setUsers(users);
    });

    socket.current.on("incomingCall", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);

      addToast({
        type: "success",
        title: "Trim Trim",
        description: "Um nova ligação recebida",
      });
    });

  }, [addToast]);

  function callPeer(id) {

    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
      config: {
        iceServers: [
          {
            urls: "stun:numb.viagenie.ca",
            username: "sultan1640@gmail.com",
            credential: "98376683"
          },
          {
            urls: "turn:numb.viagenie.ca",
            username: "sultan1640@gmail.com",
            credential: "98376683"
          }
        ]
      },
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    });

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    });


  }

  function acceptCall() {

    setCallAccepted(true);

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    });

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });;

    peer.signal(callerSignal);

    setReceivingCall(false);
  }

  function turnOff() {

    setCallAccepted(false);

    setReceivingCall(false);

    addToast({
      type: "error",
      title: "Desligando...",
      description: "Chamada desligada",
    });
  }

  return (
    <Container>
      <Content>
        {serverFull ? (
          <div className="server-full">
            <h1>Servidor cheio</h1>
          </div>
        ) : (
            <>
              <Label>
                <h2>Chat Video</h2>
              </Label>

              <BoxVideos>
                {stream && (
                  <Video playsInline ref={userVideo} autoPlay />
                )}
                {callAccepted && (
                  <Video playsInline ref={partnerVideo} autoPlay />
                )}
              </BoxVideos>
              <BoxActions>
                {Object.keys(users).map(key => {
                  if (key === yourID) {
                    return null;
                  }
                  return (
                    !receivingCall && !callAccepted && (
                      <div key={key}>
                        <button className="call-button" onClick={() => callPeer(key)}>Ligar para {key}</button>
                      </div>
                    )
                  );
                })}

                {receivingCall && (
                  <div className="div-accept" key={caller}>
                    <h4>{caller} está te ligando</h4>
                    <button className="accept-button" onClick={acceptCall}>Aceitar</button>
                  </div>
                )}

                {callAccepted && (
                  <div className="div-accept" key={caller}>
                    <button className="turnoff-button" onClick={() => turnOff()}>Desligar</button>
                  </div>
                )}
              </BoxActions>
            </>
          )}
      </Content>
    </Container>
  );
}

export default Dashboard;