import React from "react";
import { Prato } from "../interfaces";
import api from "../http/api";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import "../styles/DetalhesPrato.css";

export default function DetalhesPrato() {
  const { id } = useParams<{ id: string }>();
  const [prato, setPrato] = React.useState<Prato>();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/${id}`);
        const { data } = response;

        setPrato(data);
      } catch (error) {
        console.error("Erro ao buscar prato: ", error);
      }
    }
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!prato) {
    return <div>Prato não encontrado</div>;
  }

  return (
    <>
      <div className="detalhes-prato-container">
        <div className="detalhes-prato">
          <Card prato={prato} mostrar_descricao_detalhada={true} />
          <Link to={"/"}>
            <button className="botao-voltar">Voltar</button>
          </Link>
        </div>
      </div>
    </>
  );
}
