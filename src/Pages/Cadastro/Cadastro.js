import React from "react";
import {
  Botao,
  CadastroMsgDeErro,
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
        const result = response.data.filter((usuario) => email === usuario[2]);

        if (result.length === 0) {
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
              navigate("/finalizado");
            })
            .catch((error) => {
              console.log("Deu erro: " + error);
            });
        } else {
          setMsgEmailError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      {msgEmailError && <CadastroMsgDeErro>Email já existe!</CadastroMsgDeErro>}
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
