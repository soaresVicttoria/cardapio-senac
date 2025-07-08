import React from "react";
import ListarPratos from "./ListarPratos";
import banner from "../assets/terra_das_aguas.jpg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={banner} alt="Banner do Restaurante" />
      </div>
      <h1>Restaurente Senac Terras das Águas</h1>
      <div className="conteiner-pratos">
        <ListarPratos />
      </div>
    </div>
  );
}
