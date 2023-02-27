import styled from "styled-components";

export const MinhaColecaoContainer = styled.section`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
`;
export const MinhaColecaoCard = styled.div`
  width: 100%;
  height: 100px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border: 2px solid #0c1f24;
  border-radius: 15px;
  background-color: #e2e2e2;

  img {
    max-width: 60px;
    mix-blend-mode: multiply;
  }
`;
export const MinhaColecaoCardTitulo = styled.h1`
  font-size: 2rem;
`;

export const MinhaColecaoBotao = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #0c1f24;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
