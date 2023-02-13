import React from "react";
import { CardBotao, CardConteiner, CardImagem, CardTitulo } from "./StyleCard";
import jogo from "../../Imagens/arcadia.jpg";
const Card = () => {
  return (
    <CardConteiner>
      <CardImagem src={jogo} alt="jogo" />
      <CardTitulo>Arcádia Quest</CardTitulo>
      <CardBotao>Adicionar</CardBotao>
    </CardConteiner>
  );
};

export default Card;
