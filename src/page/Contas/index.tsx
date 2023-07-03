import { CheckCircle } from "phosphor-react";
import { ContasContainer, ContasContent, Conteudo } from "./styles";

export function Contas() {
  return (
    <ContasContainer>
      <ContasContent>
        <div>
          <h2>Abre a tua conta empresarial.Fácil No teu Telefone.</h2>
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
    </ContasContainer>
  );
}
