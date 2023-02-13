import styled from "styled-components";

export const CardConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  background-color: #caaeb8;
  width: 300px;
  margin: 30px auto;
  padding-bottom: 20px;
`;
export const CardImagem = styled.img`
  max-width: 300px;
  border-radius: 15px 15px 0px 0px;
`;
export const CardTitulo = styled.h1`
  font-size: 1.5rem;
`;
export const CardBotao = styled.button`
  background-color: #544a4e;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  &:hover {
    transform: scale(1.05);
  }
`;
