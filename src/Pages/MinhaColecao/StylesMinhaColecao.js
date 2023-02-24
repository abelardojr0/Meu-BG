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
  border: 2px solid black;
  img {
    max-width: 60px;
    mix-blend-mode: multiply;
  }
`;
export const MinhaColecaoCardTitulo = styled.h1`
  font-size: 1.5rem;
`;
