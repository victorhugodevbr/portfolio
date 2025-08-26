import { Container } from "@/components/containers";
import { FaqDropList } from "@/components/fourth-section/containers/top-container/right-container/drop-list";
import { LeftTopContainer } from "@/components/fourth-section/containers/top-container/left-container/left-top-container";
import { RightTopContainer } from "@/components/fourth-section/containers/top-container/right-container/right-top-container";
import { MainLayout } from "@/components/fourth-section/main-layout";
import { BlackButtonText, BottomBigText, BottomSmallText, LeftBigText, LeftInfoText, TitleText } from "@/components/fourth-section/typography/text";
import { LeftBottomContainer } from "@/components/fourth-section/containers/bottom-container/left-container/left-bottom-container";
import { RightBottomContainer } from "@/components/fourth-section/containers/bottom-container/right-container/right-bottom-container";
import { PersonalImage } from "@/components/fourth-section/containers/bottom-container/left-container/small-photo";
import { TryMeImage } from "@/components/fourth-section/assets/images/try-me-image";
import { TopContainer } from "@/components/fourth-section/containers/top-container/top-container";
import { BlackButton } from "@/components/fourth-section/containers/bottom-container/left-container/black-button";
import { LinkedinIcon } from "@/components/fourth-section/assets/icons/linkedin";
import { ResumeIcon } from "@/components/fourth-section/assets/icons/resume";

export default function FourthSection() {
  return (
    <MainLayout>
      <TopContainer>
        <LeftTopContainer>
          <TitleText>Faq</TitleText>
          <Container direction="column" alignment="start" gap='8px'>
            <LeftBigText>
              Perguntas Frequentes
            </LeftBigText>
            <LeftInfoText size="lg">
              Qualquer outra dúvida podem entrar em contato comigo pelo e-mail:
            </LeftInfoText>
            <LeftInfoText size="md">
              <span translate="no">victorhugovicentedev@hotmail.com</span>
            </LeftInfoText>
          </Container>
        </LeftTopContainer>
        <RightTopContainer>
          <FaqDropList 
            title="Você é designer ou desenvolvedor?" 
            answer="Sou um desenvolvedor com especialização em full-stack, mas meu maior diferencial é meu background em design UI/UX. Isso me dá uma visão mais técnica para o desenvolvimento front-end, pois consigo entender a lógica por trás da experiência do usuário. Assim, tomo decisões mais eficientes sobre a arquitetura dos componentes e a performance, garantindo que o resultado final seja fiel ao design." 
          />
          <FaqDropList 
            title="Como você gerencia um projeto desde a concepção (design UI/UX) até a entrega final (desenvolvimento e deploy)?" 
            answer="Eu gerencio o projeto de ponta a ponta, unindo a visão de design à execução técnica. Começo com o levantamento de requisitos e a criação do design (UI/UX), depois defino a arquitetura e desenvolvo o banco de dados, back-end e o front-end. Por fim, faço o deploy e garanto a manutenção, entregando uma solução coesa e completa." 
          />
          <FaqDropList 
            title="Como você lida com mudanças de escopo ou feedbacks inesperados do cliente durante o projeto?" 
            answer="Eu lido com mudanças de forma proativa. Analiso o impacto no projeto, discuto as opções com o desenvolvedor parceiro (quando tem), levo até o cliente e, em seguida, formalizo a decisão para garantir que as expectativas estejam sempre alinhadas." 
          />
          <FaqDropList 
            title="O que você considera um projeto bem-sucedido e como você mede o sucesso?" 
            answer={
              <span>
                Para mim, um projeto bem-sucedido é aquele que <b>resolve o problema do usuário</b>, atinge os objetivos de negócio e tem alta qualidade técnica. Meço o sucesso através do impacto gerado e de métricas como a satisfação do usuário, resultados de negócio (KPIs) e a performance da aplicação.
              </span>
            }
          />
        </RightTopContainer>
      </TopContainer>
      <Container direction="row" alignment="center" justify="spaceBetween" width="100%">
        <LeftBottomContainer>
          <Container direction="column" alignment="center" gap="24px">
            <Container direction="row" alignment="center" gap="16px">
              <PersonalImage />
              <BottomBigText>
                Vamos construir juntos
              </BottomBigText>
            </Container>
            <Container direction="row" alignment="center" gap="12px">
              <BlackButton link="https://www.linkedin.com/in/victor-hugo-vicente-dos-santos-05a259221">
                <BlackButtonText>
                  Meu Linkedin
                </BlackButtonText>
                <LinkedinIcon />
              </BlackButton>
              <BlackButton link="https://github.com/victorhugodevbr">
                <BlackButtonText>
                  Meu Github
                </BlackButtonText>
                <ResumeIcon />
              </BlackButton>
            </Container>
          </Container>
        </LeftBottomContainer>
        <RightBottomContainer>
          <TryMeImage/>
          <BottomBigText>
            Lets go! Livre de riscos.
          </BottomBigText>
          <BottomSmallText>
            Vamos construir algo incrível juntos.
          </BottomSmallText>
        </RightBottomContainer>
      </Container>
    </MainLayout>
  );
}
