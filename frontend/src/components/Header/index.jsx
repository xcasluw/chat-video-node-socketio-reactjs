import React, { useCallback } from "react";
import { MainHeader, HeaderContent, Profile } from "./styles";

import { Link } from "react-router-dom";
import { FiPower, FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";


import logoImg from "../../assets/logo.png";
import iconUser from "../../assets/icon-user.png";

import { useAuth } from "../../hooks/auth";

const Header = () => {

  const { signOut, user } = useAuth();
  const history = useHistory();
  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (

    <MainHeader>
      <HeaderContent>

        <a href onClick={handleGoBack} title="Voltar">
          <FiArrowLeft />
        </a>

        <Link to="/dashboard" title="Início">
          <img src={logoImg} alt="Logo" />
        </Link>

        <Profile>
          <img src={iconUser} alt="Logo" />
          <div>
            <span>Bem-vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={signOut} title="Sair">
          <FiPower />
        </button>
      </HeaderContent>
    </MainHeader>
  )

}

export default Header;