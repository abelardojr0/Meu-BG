import React from "react";
import {
  HeaderBotaoCadastrar,
  HeaderBotaoEntrar,
  HeaderComponent,
  HeaderItensMenuAberto,
  HeaderLi,
  HeaderLista,
  HeaderLogin,
  HeaderLogo,
  HeaderMenuAberto,
  HeaderPesquisarBotao,
  HeaderPesquisarContainer,
  HeaderPesquisarContainerBarra,
  HeaderPesquisarInput,
  HeaderUsuarioLogado,
  HeaderUsuarioSeta,
} from "./StylesHeader";
import logo from "../../Imagens/logo.png";
import Login from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import seta_baixo from "../../Imagens/seta_baixo.png";
import seta_cima from "../../Imagens/seta_cima.png";

const Header = () => {
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [search, setSearch] = React.useState();
  const [seta, setSeta] = React.useState(seta_baixo);
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
      setSeta(seta_cima);
      setMenuAberto(true);
    } else {
      setSeta(seta_baixo);
      setMenuAberto(false);
    }
  }
  function deslogar() {
    localStorage.clear();
    navigate("/");
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
      <HeaderLogo src={logo} alt="logo" />
      <HeaderLista>
        <HeaderLi to="/">Home</HeaderLi>
        <HeaderLi to="/meusJogos">Meus Jogos</HeaderLi>
      </HeaderLista>
      <HeaderLogin>
        {logado ? (
          <>
            <HeaderUsuarioLogado>
              {logado}
              <HeaderUsuarioSeta onClick={abrirMenu} src={seta} alt="seta" />
            </HeaderUsuarioLogado>
            {menuAberto && (
              <>
                <HeaderMenuAberto>
                  <HeaderItensMenuAberto to="/minhaColecao">
                    Minha Coleção
                  </HeaderItensMenuAberto>
                  <HeaderItensMenuAberto>Configurações</HeaderItensMenuAberto>
                  <HeaderItensMenuAberto onClick={deslogar}>
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
      <HeaderPesquisarContainer onSubmit={pesquisar}>
        <HeaderPesquisarContainerBarra>
          <HeaderPesquisarInput
            autoFocus
            className={ativa}
            onBlur={esconderPesquisa}
            type={"text"}
            name={"pesquisar"}
            id={"pesquisar"}
            placeholder={"Buscar por filmes e séries..."}
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <HeaderPesquisarBotao onClick={mostrarPesquisa} type="submit" />
        </HeaderPesquisarContainerBarra>
      </HeaderPesquisarContainer>
    </HeaderComponent>
  );
};

export default Header;
