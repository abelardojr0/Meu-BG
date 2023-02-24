import React from "react";
import {
  SectionSucesso,
  SucessoImagem,
  SucessoParagrafo,
  SucessoSubTitulo,
  SucessoTitulo,
} from "./StylesCadastroSucesso";
import ImagemSucesso from "../../../Imagens/Finalizado.png";
import Header from "../../../Components/Header/Header";

const CadastroSucesso = () => {
  return (
    <>
      <Header />
      <SectionSucesso>
        <SucessoTitulo>Sucesso!</SucessoTitulo>
        <SucessoSubTitulo>Você finalizou seu cadastro!</SucessoSubTitulo>
        <SucessoParagrafo>
          Caso deseje editar informações ou atualizá-las no futuro, é só acessar
          a página de perfil!
        </SucessoParagrafo>
        <SucessoImagem src={ImagemSucesso} alt="imagem concluído" />
      </SectionSucesso>
    </>
  );
};

export default CadastroSucesso;
