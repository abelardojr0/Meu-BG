import { Link } from "react-router-dom";
import styled from "styled-components";
import lupa from "../../Imagens/lupa2.png";
export const HeaderComponent = styled.header`
  width: 100%;
  height: 100px;
  background-color: #333633;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderLogo = styled.img`
  max-width: 200px;
`;
export const HeaderLista = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
export const HeaderLi = styled(Link)`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
`;
export const HeaderBotaoEntrar = styled.button`
  background-color: #e3aa45;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
export const HeaderBotaoCadastrar = styled.button`
  background-color: #0c1f24;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
export const HeaderUsuarioLogado = styled.div`
  background-color: #0c1f24;
  padding: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const HeaderMenuAberto = styled.div`
  z-index: 3;
  background-color: #e2e2e2;
  width: 142px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-weight: bold;
  padding: 1rem;
  gap: 10px;
  position: absolute;
  top: 35px;
  right: 130px;
`;

export const HeaderItensMenuAberto = styled(Link)`
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderPesquisarContainer = styled.form`
  margin-left: 50px;
`;

export const HeaderPesquisarContainerBarra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: relative;
`;
export const HeaderPesquisarInput = styled.input`
  font-size: 1rem;
  padding: 0.6rem;
  border-radius: 15px;
  outline: none;
  border: 2px solid #f9f9f9;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  display: none;
  width: 300px;
  &.ativo {
    display: block;
    animation: show-rigth 0.5s forwards ease-in-out;
  }
  @keyframes show-rigth {
    from {
      opacity: 0;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const HeaderPesquisarBotao = styled.button`
  background-image: url(${lupa});
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
