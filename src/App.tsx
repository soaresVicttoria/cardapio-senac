import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import DetalhesPrato from "./views/DetalhesPrato";
import FormularioPrato from "./views/FormularioPrato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<DetalhesPrato />} />
        <Route path="/form/novo-prato" element={<FormularioPrato />} />
        <Route path="/form/:id" element={<FormularioPrato isEditing />} />
      </Routes>
    </Router>
  );
}

export default App;
