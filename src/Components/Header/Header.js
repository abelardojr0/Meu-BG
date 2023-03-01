import React from "react";
import {
  HeaderBotaoCadastrar,
  HeaderBotaoEntrar,
  HeaderComponent,
  HeaderDivisoria,
  HeaderItensMenuAberto,
  HeaderLi,
  HeaderLista,
  HeaderLogin,
  HeaderLogo,
  HeaderMenuAberto,
  HeaderMenuAbertoCabeçalho,
  HeaderPesquisarBotao,
  HeaderPesquisarContainer,
  HeaderPesquisarContainerBarra,
  HeaderPesquisarInput,
  HeaderUsuarioLogado,
} from "./StylesHeader";
import logo from "../../Imagens/logo.png";
import Login from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import sair from "../../Imagens/sair.png";
import conta from "../../Imagens/conta.png";
import jogos from "../../Imagens/jogos.png";

const Header = () => {
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [search, setSearch] = React.useState();
  const [ativa, setAtiva] = React.useState("");
  const [menuAberto, setMenuAberto] = React.useState(false);
  const logado = localStorage.getItem("user");
  const navigate = useNavigate();

  function abrirModalLogin() {
    if (loginStatus === true) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }
  function abrirMenu() {
    if (!menuAberto) {
      setMenuAberto(true);
    } else {
      setMenuAberto(false);
    }
  }
  function editarConta() {
    navigate("/minhaConta");
  }
  function deslogar() {
    localStorage.clear();
  }
  function pesquisar(e) {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  }
  function mostrarPesquisa() {
    setAtiva("ativo");
  }
  function esconderPesquisa(e) {
    if (e.target.value.length > 0) {
      return;
    } else {
      setAtiva("");
    }
  }
  return (
    <HeaderComponent>
      <HeaderDivisoria>
        <HeaderLogo src={logo} alt="logo" />
        <HeaderLista>
          <HeaderLi to="/">Home</HeaderLi>
          <HeaderLi to="/meusJogos">Meus Jogos</HeaderLi>
        </HeaderLista>
      </HeaderDivisoria>
      <HeaderLogin>
        <HeaderPesquisarContainer onSubmit={pesquisar}>
          <HeaderPesquisarContainerBarra>
            <HeaderPesquisarInput
              autoFocus
              className={ativa}
              onBlur={esconderPesquisa}
              type={"text"}
              name={"pesquisar"}
              id={"pesquisar"}
              placeholder={"Buscar por jogos..."}
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <HeaderPesquisarBotao onClick={mostrarPesquisa} type="submit" />
          </HeaderPesquisarContainerBarra>
        </HeaderPesquisarContainer>

        {logado ? (
          <>
            <HeaderUsuarioLogado onClick={abrirMenu}>
              {logado[0].toLocaleUpperCase()}
            </HeaderUsuarioLogado>
            {menuAberto && (
              <>
                <HeaderMenuAberto>
                  <HeaderMenuAbertoCabeçalho>
                    <HeaderUsuarioLogado onClick={editarConta}>
                      {logado[0].toLocaleUpperCase()}
                    </HeaderUsuarioLogado>
                    <HeaderItensMenuAberto to="/minhaConta">
                      {logado}
                    </HeaderItensMenuAberto>
                  </HeaderMenuAbertoCabeçalho>
                  <HeaderItensMenuAberto to="/meusJogos">
                    <img src={jogos} alt="jogos" />
                    Meus Jogos
                  </HeaderItensMenuAberto>
                  <HeaderItensMenuAberto to="/minhaConta">
                    <img src={conta} alt="conta" />
                    Minha Conta
                  </HeaderItensMenuAberto>
                  <HeaderItensMenuAberto onClick={deslogar}>
                    <img src={sair} alt="sair" />
                    Sair
                  </HeaderItensMenuAberto>
                </HeaderMenuAberto>
              </>
            )}
          </>
        ) : (
          <>
            <HeaderBotaoEntrar onClick={abrirModalLogin}>
              Entrar
            </HeaderBotaoEntrar>
            <Link to="/cadastro">
              <HeaderBotaoCadastrar>Cadastrar</HeaderBotaoCadastrar>
            </Link>
          </>
        )}
      </HeaderLogin>

      {loginStatus && (
        <>
          <Login setLoginStatus={setLoginStatus} />
        </>
      )}
    </HeaderComponent>
  );
};

export default Header;
