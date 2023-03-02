import styled from "styled-components";

export const HomeMostruarioContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  max-width: 960px;
`;
export const HomeMostrarMais = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1rem;
  background-color: grey;
  margin: 0 auto;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
export const HomeCarregando = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 960px;
  height: 100vh;
`;

export const HomeCarregandoMais = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  text-align: center;
  margin-top: 20px;
`;
