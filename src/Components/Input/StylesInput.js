import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  position: relative;
`;
export const LabelInput = styled.label`
  color: #999;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  padding: 0 12px;
  pointer-events: none;
  position: absolute;

  transform: translate(0, 20px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  &.ativo {
    transform: translate(0, 5px) scale(0.75);
    color: #00aad9;
  }
`;

export const InputComponent = styled.input`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  background-color: transparent;
  width: 100%;
  height: 56px;
  padding: 0.5rem 0.8rem;
  outline: 0;
  border: 1px solid #dde1d2;
  border-radius: 10px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 20px;
`;
