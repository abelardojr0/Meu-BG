import React from "react";
import {
  HeaderBotaoCadastrar,
  HeaderBotaoEntrar,
  HeaderComponent,
  HeaderLi,
  HeaderLista,
  HeaderLogin,
  HeaderLogo,
} from "./StyleHeader";
import logo from "../../Imagens/logo.png";
const Header = () => {
  return (
    <HeaderComponent>
      <HeaderLogo src={logo} alt="logo" />
      <HeaderLista>
        <HeaderLi>Home</HeaderLi>
        <HeaderLi>Meus Jogos</HeaderLi>
        <HeaderLi>Minha lista de Desejo</HeaderLi>
      </HeaderLista>
      <HeaderLogin>
        <HeaderBotaoEntrar>Entrar</HeaderBotaoEntrar>
        <HeaderBotaoCadastrar>Cadastrar</HeaderBotaoCadastrar>
      </HeaderLogin>
    </HeaderComponent>
  );
};

export default Header;
