interface Especie {
  nome: string;
  status: string;
}

interface ProjetoConservacao {
  nomeProjeto: string;
  tipoProjeto: string;
  tipoParticipacao: string;
}

interface OceanData {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  especies: Especie[];
  projetosConservacao: ProjetoConservacao[];
}
