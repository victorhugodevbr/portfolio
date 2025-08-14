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
      <TitleText>Projects</TitleText>
      <ProjectBlock>
        <FirstProjectBackground/>
        <ProjectBlockContent>
          <ProjectBlockContentLeft>
            <Container direction="column" alignment="start">
              <RubBankText color="secondaryRubBank">RUB</RubBankText>
              <RubBankText>BANK</RubBankText>
            </Container>
            <ProjectContentText>
              Projeto de um banco digital completo, o RUB BANK foi criado em um bootcamp intensivo. Desenvolvi a solução de ponta a ponta: da API segura no backend ao aplicativo mobile com interface moderna, incluindo também a landing page de apresentação.
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
              <MaranataText type="primary">MARANATA</MaranataText>
              <MaranataText type="secondary">CHURCH</MaranataText>
            </Container>
            <ProjectContentText>
              Este é um projeto desenvolvido de ponta a ponta para a Maranata Church, criando uma plataforma digital para centralizar a comunicação e a organização da comunidade. Como único designer e desenvolvedor, fui responsável por todo o ciclo do produto, desde o levantamento de requisitos com o cliente até a implementação e entrega da solução completa.
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
              <BrasilcardText>BrasilCard</BrasilcardText>
            </Container>
            <ProjectContentText>
              Participei como desenvolvedor frontend no projeto do aplicativo BrasilCard, uma plataforma completa para gerenciamento de cartões. Integrado a uma equipe de desenvolvimento, meu foco foi colaborar na construção da interface e da experiência do usuário.
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
