import styled from "styled-components";

export const ContainerFormulario = styled.form`
  max-width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
`;

export const TituloFormulario = styled.h2`
  margin-top: 20px;
  color: #0c1f24;
  font-size: 2rem;
  font-weight: bold;
`;

export const SubtituloFormulario = styled.h3`
  font-weight: bold;
  color: #dde1d2;
  font-size: 1.3rem;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Botao = styled.button`
  color: #fff;
  background-color: #0c1f24;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1.5rem;
  border: none;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const FormularioJaTenhoConta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const FormularioJaTenhoContaTitulo = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const CadastroMsgDeErro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97.7%;
  background-color: #e3aa45;
  padding: 1rem;
  margin: 0 auto;
`;
