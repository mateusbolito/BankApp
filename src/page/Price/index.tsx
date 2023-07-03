import { ContainerPrice, ContainerUl, TitleContainer } from "./styles";

export function Price() {
  return (
    <ContainerPrice>
      <h2>Faz a gestão do teu negócio de forma eficaz</h2>
      <p>
        Sem comissões camufladas. Sem stress. Criado com foco na facilidade e
        transparência.
      </p>

      <ContainerUl>
        <li>
          <TitleContainer>
            <h3>BankBrasil Starter</h3>
            <span>Gratis</span>
            <p>Uma transação com cartão por mês, transações adicionais</p>
            <a href="">Escolher Plano</a>
          </TitleContainer>
          <TitleContainer>
            <h3>BankBrasil Changed</h3>
            <span>8$ / mês</span>
            <p>
              Actualiza o teu plano sempre que quiseres. Experimenta grátis.
            </p>
            <a href="">Escolher Plano</a>
          </TitleContainer>
          <TitleContainer>
            <h3>BankBrasil Premium</h3>
            <span>20$ / mês</span>
            <p>
              Actualiza o teu plano sempre que quiseres. Experimenta grátis.
            </p>
            <a href="">Escolher Plano</a>
          </TitleContainer>
        </li>
      </ContainerUl>
    </ContainerPrice>
  );
}
