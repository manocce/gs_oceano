export interface Especie {
  nome: string;
  status: string;
}

export interface ProjetoConservacao {
  nomeProjeto: string;
  tipoProjeto: string;
  tipoParticipacao: string;
}

export interface OceanData {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  especies: Especie[];
  projetosConservacao: ProjetoConservacao[];
}
