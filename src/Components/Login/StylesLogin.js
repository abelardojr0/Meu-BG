import styled from "styled-components";

export const LoginModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  justify-content: center;
  align-items: flex-start;
`;

export const LoginModal = styled.div`
  width: 300px;
  padding: 40px;
  position: relative;
  height: 35vh;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  margin: 20px auto;
`;

export const LoginBotaoFechar = styled.button`
  font-size: 1.5rem;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 2px;
  right: 2px;
  color: #f9f9f9;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const LoginFormulario = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const LoginTitulo = styled.h1`
  font-size: 2rem;
  color: #0c1f24;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const LoginBotaoEntrar = styled.button`
  background-color: #0c1f24;
  outline: none;
  padding: 0.8rem 1.6rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const LoginLembrarDivisao = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const LoginLembrarInput = styled.input`
  max-width: 20px;
`;

export const LoginLembrarLabel = styled.label`
  font-size: 1rem;
  color: #f9f9f9;
  font-style: italic;
`;

export const LoginMsgErro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 92%;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #e3aa45;
`;

export const LoginImagemIcon = styled.img`
  max-width: 30px;
`;
