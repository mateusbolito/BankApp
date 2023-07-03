import {
  ContainerContentP,
  ContainerExtra,
  ContainerProtegida,
  ProtectItems,
  ProtectWraper,
  TitleProtect,
} from "./styles";
import icon from "../../assets/icon.png";
import iconC from "../../assets/iconC.png";
import seguro from "../../assets/seguro.png";

export function Protegida() {
  return (
    <ContainerProtegida>
      <ContainerContentP>
        <div>
          <h2>Protegida Segura Uma conta na qual pode confiar.</h2>
          <ProtectWraper>
            <div>
              <ProtectItems>
                <img src={icon} alt="icon" />
                <h3>Seguro</h3>
                <TitleProtect>
                  Os teus fundos são detidos por instituições bancárias de
                  referência, estando assim fora do nosso alcance.
                </TitleProtect>
              </ProtectItems>
            </div>
            <div>
              <ProtectItems>
                <img src={iconC} alt="icon" />
                <h3>Proteção de dados</h3>
                <TitleProtect>
                  Assumimos o compromisso de manter os teus dados pessoais em
                  segurança, e somos transparentes na forma como os recolhemos,
                  processamos e conservamos.
                </TitleProtect>
              </ProtectItems>
            </div>
            <div>
              <ProtectItems>
                <img src={seguro} alt="icon" />
                <h3>Transações extra-seguras</h3>
                <TitleProtect>
                  Usamos a dupla autenticação para proteger a tua conta e
                  transações. Isto significa que tu - e somente tu - podes
                  aceder ao teu dinheiro.
                </TitleProtect>
              </ProtectItems>
            </div>
          </ProtectWraper>
        </div>
        <h1>Feito por empreendedores para empreendedores.</h1>
        <ContainerExtra>
          <h2>"BankBrasil é a soluçao para um sistema burocratico"</h2>
          <h2>"O sistema que vai revolucionar o brasil"</h2>
        </ContainerExtra>
      </ContainerContentP>
    </ContainerProtegida>
  );
}
