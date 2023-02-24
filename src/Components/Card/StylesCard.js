import styled from "styled-components";

export const CardConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  background-color: #caaeb8;
  width: 400px;
  margin: 30px auto;
  padding-bottom: 10px;
`;
export const CardImagem = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 15px 15px 0px 0px;
  mix-blend-mode: multiply;
  padding: 0.6rem;
  &:hover {
    filter: contrast(150%);
  }
`;
export const CardTitulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
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
export const CardBotaoAdiconado = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 15px;
  margin-top: 30px;
  align-self: flex-end;
  img {
    max-width: 50px;
  }
`;

export const CardListaDetalhes = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CardItemDetalhes = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  gap: 5px;
  img {
    max-width: 40px;
  }
`;

export const CardInfosDivisoria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
