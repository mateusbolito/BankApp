import {
  AccoladesContainer,
  BusinesItem,
  ContainerFlex,
  FeaturesWraper,
  PictureContainer,
  TitleContainerContent,
} from "./styles";
import bancodeportugal from "../../assets/bancodeportugal.svg";
import yahoofinance from "../../assets/yahoofinance.png";
import jornaleconomico from "../../assets/jornaleconomico.png";
import fintechfutures from "../../assets/fintechfutures.png";
import appfoto from "../../assets/appfoto.png";
import card from "../../assets/card.png";
import icon1 from "../../assets/icon1.png";
import heart from "../../assets/heart.png";
import seguro from "../../assets/seguro.png";
import apoio from "../../assets/apoio.png";
interface Props {
  ProdutoName: string;
  ContaName: string;
}
const busines: Props[] = [
  {
    ContaName: "Uma conta empresarial pensada para o Brasil",
    ProdutoName: "Conta empresarial",
  },
];
export function Accolades() {
  return (
    <AccoladesContainer>
      <div>
        <img src={bancodeportugal} alt="" />
        <img src={yahoofinance} alt="" />
        <img src={jornaleconomico} alt="" />
        <img src={fintechfutures} alt="" />
      </div>

      <PictureContainer>
        <div>
          <img src={appfoto} alt="" />
          <img className="card" src={card} alt="" />
        </div>
      </PictureContainer>
      <TitleContainerContent>
        {busines.map((busine) => (
          <div>
            <h1>{busine.ContaName}</h1>
          </div>
        ))}
      </TitleContainerContent>

      <FeaturesWraper>
        <ContainerFlex>
          <BusinesItem>
            <img src={icon1} alt="" />
            <h3>Rapido</h3>
            <p>Abre uma conta em minutos. No teu telemóvel. 100% online.</p>
          </BusinesItem>
        </ContainerFlex>
        <ContainerFlex>
          <BusinesItem>
            <img src={heart} alt="" />
            <h3>Sem Truques</h3>
            <p>
              Low cost. Sem comissões camufladas. Podes cancelar a qualquer
              momento.
            </p>
          </BusinesItem>
        </ContainerFlex>
        <ContainerFlex>
          <BusinesItem>
            <img src={seguro} alt="" />
            <h3>Seguro</h3>
            <p>
              Os nossos parceiros bancários são regulados pelo Banco Central
              Europeu.
            </p>
          </BusinesItem>
        </ContainerFlex>
        <ContainerFlex>
          <BusinesItem>
            <img src={apoio} alt="" />
            <h3>Apoio</h3>
            <p>
              Fala com uma equipa de apoio altamente especializada e rápida a
              responder
            </p>
          </BusinesItem>
        </ContainerFlex>
      </FeaturesWraper>
    </AccoladesContainer>
  );
}
