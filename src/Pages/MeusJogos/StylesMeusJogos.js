import styled from "styled-components";

export const MeusJogosContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  max-width: 960px;
`;
export const MeusJogosCarregando = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 960px;
  height: 100vh;
`;
