import {
  AppLogos,
  ColumFlex,
  ColumWraper,
  ContainerHeader,
  ContainerMain,
  HeaderDiv,
  HeaderWrap,
  MainContent,
  MenuHeader,
  MenuPt,
  Paragrafo,
} from "./styles";
import removebg from "../../assets/removebg.png";
import logo from "../../assets/logo.png";
import { Benefits } from "../Benefits";
import { Accolades } from "../Accolades";
import { BusinesApp } from "../BusinesApp";
import { Contas } from "../Contas";
import { Protegida } from "../Protegida";
import { Price } from "../Price";
import { Footer } from "../Footer";

export function Header() {
  return (
    <ContainerHeader>
      <HeaderDiv>
        <HeaderWrap>
          <a href="">
            <img src={removebg} alt="logo" />
          </a>
          <MenuHeader>
            <a href="">Home</a>
            <a href="">Serviços</a>
            <a href="">Preços</a>
            <button>Abrir Conta</button>

            <MenuPt>
              <a href="">EN</a>
              <a className="None">PT</a>
            </MenuPt>
          </MenuHeader>
        </HeaderWrap>
        <ContainerMain>
          <MainContent>
            <ColumWraper>
              <ColumFlex>
                <h1>
                  Bem-vindo a primeira super-app para negócios{" "}
                  <span>No Brasil</span>
                </h1>

                <Paragrafo>
                  Abre uma conta empresarial com cartões físicos e digitais no
                  teu smartphone. Envia e recebe faturas certificadas. Faz
                  pagamentos de forma simples. ~ Tudo numa app fácil de Usar.
                </Paragrafo>
              </ColumFlex>
            </ColumWraper>
            <AppLogos>
              <img src={logo} alt="" />
            </AppLogos>
          </MainContent>
        </ContainerMain>
      </HeaderDiv>
      <Benefits />
      <Accolades />
      <BusinesApp />
      <Contas />
      <Protegida />
      <Price />
      <Footer />
    </ContainerHeader>
  );
}
