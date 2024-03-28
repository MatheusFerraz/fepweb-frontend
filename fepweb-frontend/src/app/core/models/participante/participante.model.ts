export interface Participante {
  id: number;
  codigoExterno: number;
  nome: string;
  email: string;
  cpf: string;
  isCpfAplicavel: number;
  idSexo: number;
  idEstadoCivil: number;
  numeroDocumentoIdentificacao: string;
  observacao: string;
  numeroTelefone: string;
  numeroTelefoneCelular: string;
  isValidadeFichaAplicavel: number;
  dataValidadeFichaCadastral: string;
  dataNascimento: string;
  isHabilitaEnvioTokenSms: number;
  isAtivo: number;
  isPessoaPoliticamenteExposta: number;
  isAssinaEletronicamente: number;
}
