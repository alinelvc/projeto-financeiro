export interface FullReleaseControl {
  quantidadeLancamentos: number;
  quantidadeRemessas: number;
  valorLancamentos: number;
}

export interface BankDomicileData {
  codigoBanco: number;
  numeroAgencia: number;
  numeroContaCorrente: string;
}

export interface PostingCustomerCheckingAccount {
  numeroRemessaBanco: any;
  nomeSituacaoRemessa: string;
  dadosDomicilioBancario: BankDomicileData;
  nomeTipoOperacao: string;
  dadosAnaliticoLancamentoFinanceiroCliente: any[];
}

export interface PostingControlList {
  lancamentoContaCorrenteCliente: PostingCustomerCheckingAccount;
  dataEfetivaLancamento: string;
  dataLancamentoContaCorrenteCliente: string;
  numeroEvento: number;
  descricaoGrupoPagamento: string;
  codigoIdentificadorUnico: string;
  nomeBanco: string;
  quantidadeLancamentoRemessa: number;
  numeroRaizCNPJ: string;
  numeroSufixoCNPJ: string;
  valorLancamentoRemessa: number;
  dateLancamentoContaCorrenteCliente: any;
  dateEfetivaLancamento: any;
}

export interface Financial {
  totalControleLancamento: FullReleaseControl;
  listaControleLancamento: PostingControlList[];
  indice: string;
  tamanhoPagina: number;
  totalElements: number;
}
