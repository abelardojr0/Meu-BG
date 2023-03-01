import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MeusJogos from "./Pages/MeusJogos/MeusJogos";
import Search from "./Pages/Search/Search";
import Cadastro from "./Pages/Cadastro/Cadastro";
import CadastroSucesso from "./Pages/Cadastro/CadastroSucesso/CadastroSucesso";
import MinhaConta from "./Pages/MinhaConta/MinhaConta";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meusJogos" element={<MeusJogos />} />
          <Route path="/minhaConta" element={<MinhaConta />} />
          <Route path="search" element={<Search />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/finalizado" element={<CadastroSucesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
