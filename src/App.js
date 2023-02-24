import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Cadastro from "./Components/Cadastro/Cadastro";
// import CadastroSucesso from "./Components/Cadastro/CadastroSucesso/CadastroSucesso";
import MeusJogos from "./Pages/MeusJogos/MeusJogos";
import Search from "./Pages/Search/Search";
import Cadastro from "./Pages/Cadastro/Cadastro";
import CadastroSucesso from "./Pages/Cadastro/CadastroSucesso/CadastroSucesso";
import MeuPerfil from "./Pages/MeuPerfil/MeuPerfil";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meusJogos" element={<MeusJogos />} />
          <Route path="/meuPerfil" element={<MeuPerfil />} />
          <Route path="search" element={<Search />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/finalizado" element={<CadastroSucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
