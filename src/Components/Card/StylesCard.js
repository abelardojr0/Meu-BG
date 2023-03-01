import styled from "styled-components";

export const CardConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  background-color: #e2e2e2;
  width: 220px;
  height: 400px;
  margin: 30px auto;
  padding-bottom: 10px;
`;

export const CardImagem = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px 15px 0px 0px;
  mix-blend-mode: multiply;
  padding: 0.6rem;
  &:hover {
    filter: contrast(150%);
  }
`;

export const CardTitulo = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;
export const CardBotao = styled.button`
  background-color: #0c1f24;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  &:hover {
    transform: scale(1.05);
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
  width: 70px;
  gap: 5px;
  font-size: 0.8rem;
  img {
    max-width: 20px;
  }
`;

export const CardInfosDivisoria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const CardCarregando = styled.div`
  display: flex;
  border-radius: 15px;
  background-color: #e2e2e2;
  width: 220px;
  height: 400px;
  margin: 30px auto;
  padding-bottom: 10px;
`;
