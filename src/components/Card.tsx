import React from "react";
import { CardProps } from "../interfaces/index";
import api from "../http/api";
import { Link } from "react-router-dom";
import "../styles/Card.css";

export default function Card({
  prato,
  mostrar_descricao_detalhada = false,
}: CardProps) {
  const [toggleIsOpen, setToggleIsOpen] = React.useState(false);

  const handleToggle = () => {
    setToggleIsOpen(!toggleIsOpen);
  };

  const handleDelete = async (id: number) => {
    if (id) {
      await api.delete(`/${id}`);
    }
  };

  return (
    <div className="card-container">
      <button onClick={handleToggle}>...</button>
      {toggleIsOpen && (
        <div className="dropdown-menu">
          <Link to={"/form/novo-prato"}>
            <button>Cadastrar</button>
          </Link>
          <Link to={`/form/${prato.id}`}>
            <button>Atualizar</button>
          </Link>
          <button onClick={() => handleDelete(prato.id)}>Deletar</button>
        </div>
      )}
      <img src={prato.imagem} alt={prato.nome} />
      <p>
        <h3>{prato.nome}</h3>
      </p>
      <p>
        <strong>Cozinha: </strong>
        {prato.cozinha}
      </p>
      {mostrar_descricao_detalhada && prato.descricao_detalhada ? (
        <p>
          <strong>Descrição Detalha: </strong>
          {prato.descricao_detalhada}
        </p>
      ) : (
        <p>
          <strong>Descrição Resumida: </strong>
          {prato.descricao_resumida}
        </p>
      )}
      <p>
        <strong>Valor: </strong>
        R${prato.valor}
      </p>

      <Link to={`/detalhes/${prato.id}`}>
        <button className="link-saiba-mais">Saiba mais</button>
      </Link>
    </div>
  );
}
