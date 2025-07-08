import React, { ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import api from "../http/api";
import { Prato, IsEditing, NovoPrato } from "../interfaces";
import "../styles/FormularioPrato.css";

const initialStatePrato: NovoPrato = {
  imagem: "",
  nome: "",
  cozinha: "",
  descricao_resumida: "",
  descricao_detalhada: "",
  valor: 0,
};

export default function FormularioPrato({ isEditing = false }: IsEditing) {
  const { id } = useParams<{ id: string }>();
  const [prato, setPrato] = React.useState<NovoPrato | Prato>(
    initialStatePrato
  );

  React.useEffect(() => {
    if (isEditing && id) {
      const fetchData = async () => {
        try {
          const response = await api.get<Prato>(`/${id}`);
          const { data } = response;

          setPrato(data);
        } catch (error) {
          console.error("Erro ao buscar pratos: ", error);
        }
      };
      fetchData();
    } else if (!isEditing) {
      setPrato(initialStatePrato);
    }
  }, [isEditing, id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrato((prevPrato) => ({
      ...prevPrato,
      [name]: name === "valor" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (isEditing && id) {
        await api.put(`/${id}`, prato);
      } else if (!isEditing) {
        await api.post("/", prato);
        setPrato(initialStatePrato);
      }
    } catch (error) {
      console.error("Erro ao salvar prato", error);
    }
  };

  return (
    <div className="formulario-prato-container">
      <div className="formulario-prato">
        <h2>{isEditing ? "Editar Prato" : "Cadastrar Prato"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="imagem">Imagem: </label>
            <input
              type="text"
              id="imagem"
              name="imagem"
              value={prato.imagem}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={prato.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cozinha">Cozinha: </label>
            <input
              type="text"
              id="cozinha"
              name="cozinha"
              value={prato.cozinha}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="descricao-resumida">Descrição Resumida: </label>
            <input
              type="text"
              id="descricao-resumida"
              name="descricao-resumida"
              value={prato.descricao_resumida}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="descricao-detalhada">Descrição Detalhada: </label>
            <input
              type="text"
              id="descricao-detalhada"
              name="descricao-detalhada"
              value={prato.descricao_detalhada}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="valor">Valor: </label>
            <input
              type="number"
              id="valor"
              name="valor"
              value={prato.valor}
              onChange={handleChange}
            />
          </div>
          <button>{isEditing ? "Atualizar Prato" : "Cadastrar Prato"}</button>
        </form>
      </div>
    </div>
  );
}
