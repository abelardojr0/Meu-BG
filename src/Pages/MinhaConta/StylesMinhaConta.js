import styled from "styled-components";

export const MinhaContaContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const MinhaContaBotao = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1.5rem;
  background-color: #0c1f24;
  border: none;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover {
    transform: scale(1.05);
  }
`;
