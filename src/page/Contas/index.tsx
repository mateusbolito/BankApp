import { CheckCircle } from "phosphor-react";
import { ContasContainer, ContasContent, Conteudo } from "./styles";
interface Props {
  ProdutoName: string;
  ContaName: string;
}
const busines: Props[] = [
  {
    ContaName: "Abre a tua conta empresarial.Fácil No teu Telefone.",
    ProdutoName: "Conta empresarial",
  },
];
export function Contas() {
  return (
    <ContasContainer>
      {busines.map((busine) => (
        <ContasContent>
          <div>
            <h2>{busine.ContaName} </h2>
          </div>
          <Conteudo>
            <h1>Descarrega a aplicação</h1>
            <CheckCircle size={32} />
            <h1>Cria uma conta em minuto ‍</h1>
            <CheckCircle size={32} />
            <h1>Verificação concluída em algumas horas</h1>
            <CheckCircle size={32} />
          </Conteudo>
        </ContasContent>
      ))}
    </ContasContainer>
  );
}
