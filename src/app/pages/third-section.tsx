import { Container } from "@/components/containers";
import { ProjectBlock, ProjectBlockContent, ProjectBlockContentLeft, ProjectBlockContentRight } from "@/components/third-section/containers/project";
import { FirstProjectBackground } from "@/components/third-section/images/first-project-background";
import { FirstProjectPhone } from "@/components/third-section/images/first-project-phone-image";
import { SecondProjectBackground } from "@/components/third-section/images/second-project-background";
import { SecondProjectPhone } from "@/components/third-section/images/second-project-phone-image";
import { ThirdProjectBackground } from "@/components/third-section/images/third-project-background";
import { ThirdProjectPhone } from "@/components/third-section/images/third-project-phone-image";
import { MainLayout } from "@/components/third-section/main-layout";
import { BrasilcardText, MaranataText, ProjectContentText, RubBankText, TitleText } from "@/components/third-section/typography/text";

export default function ThirdSection() {
  return (
    <MainLayout>
      <TitleText>Projetos</TitleText>
      <ProjectBlock>
        <FirstProjectBackground/>
        <ProjectBlockContent>
          <ProjectBlockContentLeft>
            <Container direction="column" alignment="start">
              <RubBankText color="secondaryRubBank"><span translate="no">RUB</span></RubBankText>
              <RubBankText><span translate="no">BANK</span></RubBankText>
            </Container>
            <ProjectContentText>
              Projeto de um banco digital completo, o <span translate="no">RUB BANK</span> foi criado em um bootcamp intensivo. Desenvolvi a solução de ponta a ponta: da API segura no backend ao aplicativo mobile com interface moderna, incluindo também a landing page de apresentação.
            </ProjectContentText>
          </ProjectBlockContentLeft>
          <ProjectBlockContentRight>
            <FirstProjectPhone/>
          </ProjectBlockContentRight>
        </ProjectBlockContent>
      </ProjectBlock>

      <ProjectBlock>
        <SecondProjectBackground/>
        <ProjectBlockContent>
          <ProjectBlockContentLeft>
            <Container direction="column" alignment="start">
              <MaranataText type="primary"><span translate="no">MARANATA</span></MaranataText>
              <MaranataText type="secondary"><span translate="no">CHURCH</span></MaranataText>
            </Container>
            <ProjectContentText>
              Este é um projeto desenvolvido de ponta a ponta para a <span translate="no">Maranata Church</span>, criando uma plataforma digital para centralizar a comunicação e a organização da comunidade. Como único designer e desenvolvedor, fui responsável por todo o ciclo do produto, desde o levantamento de requisitos com o cliente até a implementação e entrega da solução completa.
            </ProjectContentText>
          </ProjectBlockContentLeft>
          <ProjectBlockContentRight>
            <SecondProjectPhone/>
          </ProjectBlockContentRight>
        </ProjectBlockContent>
      </ProjectBlock>

      <ProjectBlock>
        <ThirdProjectBackground/>
        <ProjectBlockContent>
          <ProjectBlockContentLeft>
            <Container direction="column" alignment="start">
              <BrasilcardText><span translate="no">BrasilCard</span></BrasilcardText>
            </Container>
            <ProjectContentText>
              Participei como desenvolvedor frontend no projeto do aplicativo <span translate="no">BrasilCard,</span> uma plataforma completa para gerenciamento de cartões. Integrado a uma equipe de desenvolvimento, meu foco foi colaborar na construção da interface e da experiência do usuário.
            </ProjectContentText>
          </ProjectBlockContentLeft>
          <ProjectBlockContentRight>
            <ThirdProjectPhone />
          </ProjectBlockContentRight>
        </ProjectBlockContent>
      </ProjectBlock>
    </MainLayout>
  );
}
