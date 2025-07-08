import React from "react";
import api from "../http/api";
import Card from "../components/Card";
import { Prato } from "../interfaces";
import "../styles/ListarPratos.css";

export default function ListarPratos() {
  const [pratos, setPratos] = React.useState<Prato[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/");
        const { data } = response;

        setPratos(data);
      } catch (error) {
        console.error("Erro ao buscar pratos: ", error);
      }
    }
    fetchData();
  }, [pratos]);

  return (
    <>
      <div className="listar-pratos-container">
        {Array.isArray(pratos)
          ? pratos.map((prato) => (
              <div key={prato.id}>
                <Card prato={prato} mostrar_descricao_detalhada={false} />
              </div>
            ))
          : "Pratos não encontrados"}
      </div>
    </>
  );
}
