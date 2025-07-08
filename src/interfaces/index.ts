export interface Prato {
  id: number;
  imagem: string;
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  descricao_detalhada: string;
  valor: number;
}

export interface NovoPrato {
  imagem: string;
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  descricao_detalhada: string;
  valor: number;
}

export interface CardProps {
  prato: Prato;
  mostrar_descricao_detalhada?: boolean;
}

export interface IsEditing {
  isEditing?: boolean;
}
