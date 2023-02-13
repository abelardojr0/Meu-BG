import styled from "styled-components";

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
export const HeaderLista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const HeaderLi = styled.li`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
