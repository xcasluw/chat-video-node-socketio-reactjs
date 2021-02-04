import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  display: flex;
  padding: 0 20px;
  flex-direction: column;

  .server-full {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  h2 {
    color: #fff;
  }
`;

export const BoxVideos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BoxActions = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .call-button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      width: 200px;

      @media (max-width: 1800px) {
        height: 50px;
      }

      @media (max-width: 1600px) {
        height: 50px;
      }

      @media (max-width: 1200px) {
        height: 50px;
      }    
      
      @media (max-width: 900px) {
        height: 48px;
      }

      @media (max-width: 600px) {
        height: 48px;
      }

      &:hover {
        background: ${shade(0.2, "#ff9000")};
      }
    }

    .accept-button {
      background: #06840e;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      width: 200px;

      @media (max-width: 1800px) {
        height: 50px;
      }

      @media (max-width: 1600px) {
        height: 50px;
      }

      @media (max-width: 1200px) {
        height: 50px;
      }    
      
      @media (max-width: 900px) {
        height: 48px;
      }

      @media (max-width: 600px) {
        height: 48px;
      }

      &:hover {
        background: ${shade(0.2, "#06840e")};
      }
    }
  }

  .div-accept {
    margin-top: 30px;
  }
`;

export const Video = styled.video`
  width: 500px;
  border-radius: 5px;
`;