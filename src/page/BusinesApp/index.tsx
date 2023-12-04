import {
  Advantages,
  BusinesImgage,
  ContainerApp,
  ContainerContent,
} from "./styles";
import hero from "../../assets/hero.png";
interface Props {
  ProdutoName: string;
  ContaName: string;
}

const busines: Props[] = [
  {
    ContaName: "Produto",
    ProdutoName: "Conta empresarial",
  },
];
export function BusinesApp() {
  return (
    <ContainerApp>
      {busines.map((busine) => (
        <ContainerContent>
          <div>
            <BusinesImgage>
              <img src={hero} alt="" />
            </BusinesImgage>
            <Advantages>
              <h2>{busine.ContaName} </h2>
              <ul>
                <li>Transferências SEPA</li>
                <li>Gere e acompanha débitos diretos</li>
                <li>Pagamentos em loja e online</li>
                <li>Notificações por email e SMS</li>
                <li>Categoriza transações e despesas</li>
                <li>Adiciona comentários às transações e despesas</li>
              </ul>
            </Advantages>
          </div>
        </ContainerContent>
      ))}
    </ContainerApp>
  );
}
