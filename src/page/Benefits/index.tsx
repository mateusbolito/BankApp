import {
  BenefitContainer,
  BenefitsItem,
  BenefitsPicture,
  ContainerItemWraper,
  ItemText,
  Title,
} from "./styles";

import cardbenefits from "../../assets/cardbenefits.png";
import benefit2 from "../../assets/benefit2.png";
import benefit3 from "../../assets/benefit3.png";
import benefit4 from "../../assets/benefit4.png";

export function Benefits() {
  return (
    <BenefitContainer>
      <BenefitsItem>
        <ContainerItemWraper>
          <BenefitsPicture>
            <img src={cardbenefits} alt="" />
          </BenefitsPicture>
          <Title>
            <h2>Conta Empresarial</h2>
          </Title>
          <ItemText>
            <p>
              Abre uma conta online em minutos. Recebe os cartões físico e
              virtuais. Transferências SEPA, Débito Direto, pagamentos em loja e
              online
            </p>
          </ItemText>
        </ContainerItemWraper>
      </BenefitsItem>
      <BenefitsItem>
        <ContainerItemWraper>
          <BenefitsPicture>
            <img src={benefit2} alt="" />
          </BenefitsPicture>
          <Title>
            <h2>Faturas Certificadas</h2>
          </Title>
          <ItemText>
            <p>
              Envia e segue faturas certificadas no teu telemóvel. Sem mais
              papelada ou softwares confusos.
            </p>
          </ItemText>
        </ContainerItemWraper>
      </BenefitsItem>
      <BenefitsItem>
        <ContainerItemWraper>
          <BenefitsPicture>
            <img src={benefit3} alt="beneft" />
          </BenefitsPicture>
          <Title>
            <h2>Conta Empresarial</h2>
          </Title>
          <ItemText>
            <p>
              Vê e organiza as tuas despesas em poucos cliques, e faz o seu
              acompanhamento. (Em breve)
            </p>
          </ItemText>
        </ContainerItemWraper>
      </BenefitsItem>
      <BenefitsItem>
        <ContainerItemWraper>
          <BenefitsPicture>
            <img src={benefit4} alt="" />
          </BenefitsPicture>
          <Title>
            <h2>Informação e Dicas</h2>
          </Title>
          <ItemText>
            <p>
              Artigos e informações para melhorar o teu negócio num painel
              simplificado e com conteúdos educacionais.
            </p>
          </ItemText>
        </ContainerItemWraper>
      </BenefitsItem>
    </BenefitContainer>
  );
}
