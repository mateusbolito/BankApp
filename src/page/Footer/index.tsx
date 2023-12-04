import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import {
  ContainerContent,
  ContainerFooter,
  FooterWraper,
  Sociais,
  TitleFinal,
} from "./styles";

interface ProdutoProp {
  ProdutoName: string;
  ContaName: string;
  fatu: string;
  preco: string;
  title: string;
  help: string;
  contact: string;
}

const produto: ProdutoProp[] = [
  {
    ContaName: "Produto",
    ProdutoName: "Conta empresarial",
    fatu: "Faturaçao",
    preco: "Help Center",
    title: "Criaçao de empresa",
    help: "Help Center",
    contact: "contato",
  },
];
export function Footer() {
  return (
    <ContainerFooter>
      {produto.map((product) => (
        <ContainerContent>
          <FooterWraper>
            <div>
              <h3>{product.ContaName} </h3>
              <a>{product.ProdutoName} </a>
              <a>{product.fatu} </a>
              <a>{product.title} </a>
            </div>
            <div>
              <h3>{product.preco} </h3>
              <a>{product.help} </a>
              <a>Entrar em {product.contact} </a>
              <a>Documnetos Legais</a>
            </div>
            <div>
              <h3>Sobre</h3>
              <a>Preços</a>
              <a>Parcerias</a>
              <a>BankBrasil</a>
            </div>
            <div>
              <h3>BankBrasil</h3>
              <a>Qualidade de Atendimento</a>
              <a>Em todo Brasil</a>
              <a>Serviços unicos</a>
            </div>
          </FooterWraper>
          <TitleFinal>
            A BankBrasil tem uma parceria com a Swan que fornecerá todos os
            serviços de pagamento aos clientes da BankBrasil. A BankBrasil não
            tem acesso aos fundos dos clientes. Os fundos são mantidos em contas
            fornecidas pela Swan, mantidas no BNP Paribas. A Swan é uma EMI,
            sediada em França, supervisionada e regulamentada pela ACPR/Banque
            de France. A Swan está autorizada a realizar tais serviços em
            Portugal e registada no Banco de Portugal sob o número de registo
            7893.
          </TitleFinal>
          <Sociais>
            <FacebookLogo size={32} />
            <InstagramLogo size={32} />
            <LinkedinLogo size={32} />
            <TwitterLogo size={32} />
          </Sociais>
          <h3>Política de Privacidade Política de Cookies</h3>
        </ContainerContent>
      ))}
    </ContainerFooter>
  );
}
