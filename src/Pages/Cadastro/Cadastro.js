import React from "react";
import {
  Botao,
  ContainerFormulario,
  FormularioJaTenhoConta,
  FormularioJaTenhoContaTitulo,
  SubtituloFormulario,
  TituloFormulario,
} from "./StylesCadastro";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";

const Cadastro = () => {
  const [nome, setNome] = React.useState();
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [msgEmailError, setMsgEmailError] = React.useState(false);
  const navigate = useNavigate();

  function finalizar(e) {
    e.preventDefault();

    axios
      .get("http://localhost:5000/buscarUsuarios")
      .then((response) => {
        response.data.forEach((usuario) => {
          if (email === usuario[2]) {
            setMsgEmailError(true);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });

    if (!msgEmailError) {
      const infos = {
        nome,
        email,
        senha,
      };
      axios
        .post("http://localhost:5000/cadastrar", infos)
        .then((response) => {
          console.log(response);
          setNome("");
          setEmail("");
          setSenha("");
        })
        .catch((error) => {
          console.log("Deu erro: " + error);
        });
      navigate("/finalizado");
    }
  }

  return (
    <>
      <Header />
      <ContainerFormulario onSubmit={finalizar}>
        <TituloFormulario>Dados do cadastro</TituloFormulario>
        <SubtituloFormulario>Dados Pessoais</SubtituloFormulario>
        <Input
          htmlFor={"usuario"}
          texto={"Usuário *"}
          tipo={"text"}
          nome={"usuario"}
          id={"usuario"}
          tamanho={"grande"}
          required={true}
          setDados={setNome}
        />
        <Input
          htmlFor={"email"}
          texto={"Email *"}
          tipo={"email"}
          nome={"email"}
          id={"email"}
          tamanho={"grande"}
          required
          setDados={setEmail}
        />
        {msgEmailError && <p>Email já existe!</p>}
        <Input
          htmlFor={"senha"}
          texto={"Senha *"}
          tipo={"password"}
          nome={"senha"}
          id={"senha"}
          tamanho={"grande"}
          required
          setDados={setSenha}
        />
        <Input
          htmlFor={"confirmarSenha"}
          texto={"Confirmar senha *"}
          tipo={"password"}
          nome={"confirmarSenha"}
          id={"confirmarSenha"}
          tamanho={"grande"}
          required
          setDados={setSenha}
        />
        <Botao type="submit">Cadastrar</Botao>

        <FormularioJaTenhoConta>
          <FormularioJaTenhoContaTitulo>
            Já possui uma conta?
          </FormularioJaTenhoContaTitulo>
          <Botao>Entrar</Botao>
        </FormularioJaTenhoConta>
      </ContainerFormulario>
    </>
  );
};

export default Cadastro;
