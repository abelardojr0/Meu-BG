import React from "react";
import Input from "../Input/Input";
import {
  LoginBotaoEntrar,
  LoginBotaoFechar,
  LoginFormulario,
  LoginLembrarDivisao,
  LoginLembrarInput,
  LoginLembrarLabel,
  LoginModal,
  LoginModalContainer,
  LoginTitulo,
} from "./StylesLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginStatus }) => {
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  function fecharModal(e) {
    if (
      e.target.getAttribute("id") === "modal" ||
      e.target.getAttribute("id") === "fechar"
    ) {
      setLoginStatus(false);
    }
  }

  function verificarLogin(e) {
    e.preventDefault();
    axios
      .get("http://localhost:5000/buscarUsuarios")
      .then((response) => {
        response.data.forEach((usuario) => {
          if (email === usuario[2] && senha === usuario[3]) {
            localStorage.setItem("id", usuario[0]);
            localStorage.setItem("user", usuario[1]);
            axios
              .get("http://localhost:5000/buscarColecao/" + usuario[0])
              .then((response) => {
                localStorage.setItem("jogos", JSON.stringify(response.data));
              });
            setLoginStatus(false);
          } else {
            setError(true);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  }

  return (
    <LoginModalContainer id="modal" onClick={fecharModal}>
      <LoginModal>
        <LoginBotaoFechar id="fechar" onClick={fecharModal}>
          X
        </LoginBotaoFechar>

        <LoginFormulario>
          <LoginTitulo>Entrar</LoginTitulo>
          <Input
            htmlFor={"userEmail"}
            texto={"Usuário/E-mail *"}
            tipo={"text"}
            nome={"userEmail"}
            id={"userEmail"}
            tamanho={"grande"}
            required={true}
            setDados={setEmail}
          />
          <Input
            htmlFor={"senhaLogin"}
            texto={"Senha"}
            tipo={"password"}
            nome={"senhaLogin"}
            id={"senhaLogin"}
            tamanho={"grande"}
            required
            setDados={setSenha}
          />
          {error && <p>Email ou senha incorretos</p>}
          <LoginLembrarDivisao>
            <LoginLembrarInput
              type={"checkbox"}
              name={"lembrar"}
              id={"lembrar"}
            />
            <LoginLembrarLabel htmlFor={"lembrar"}>Lembre-me</LoginLembrarLabel>
          </LoginLembrarDivisao>

          <LoginBotaoEntrar onClick={verificarLogin}>Entrar</LoginBotaoEntrar>
        </LoginFormulario>
      </LoginModal>
    </LoginModalContainer>
  );
};

export default Login;
