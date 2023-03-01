import React from "react";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import axios from "axios";
import {
  MinhaContaBotao,
  MinhaContaBotaoDeletar,
  MinhaContaContainer,
} from "./StylesMinhaConta";
import { useNavigate } from "react-router-dom";

const MinhaConta = () => {
  const [nome, setNome] = React.useState();
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const id_usuario = localStorage.getItem("id");
  const navigate = useNavigate();

  function atualizarBanco(e) {
    localStorage.setItem("user", nome);
    e.preventDefault();
    axios
      .post("http://localhost:5000/atualizarUsuario", {
        nome,
        email,
        senha,
        id_usuario,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Header />
      <MinhaContaContainer>
        <Input
          htmlFor={"NovoNome"}
          texto={"Novo Nome"}
          tipo={"text"}
          nome={"NovoNome"}
          id={"NovoNome"}
          tamanho={"grande"}
          required={true}
          setDados={setNome}
        />
        <Input
          htmlFor={"novoEmail"}
          texto={"Novo Email"}
          tipo={"text"}
          nome={"novoEmail"}
          id={"novoEmail"}
          tamanho={"grande"}
          required={true}
          setDados={setEmail}
        />
        <Input
          htmlFor={"novaSenha"}
          texto={"Nova Senha"}
          tipo={"password"}
          nome={"novaSenha"}
          id={"novaSenha"}
          tamanho={"grande"}
          required={true}
          setDados={setSenha}
        />
        <MinhaContaBotao onClick={atualizarBanco}>Atualizar</MinhaContaBotao>
      </MinhaContaContainer>
    </>
  );
};

export default MinhaConta;
