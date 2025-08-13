import { Container } from "@/components/containers";
import { LeftContainer } from "@/components/second-section/containers/left-container/left-container";
import { DescriptionBlock, DescriptionBlockContent } from "@/components/second-section/containers/right-container/description-block";
import { RightContainer } from "@/components/second-section/containers/right-container/right-container";
import { FirstDescriptionBackground } from "@/components/second-section/images/first-description-background";
import { PlasmaImage } from "@/components/second-section/images/plasma-image";
import { SecondDescriptionBackground } from "@/components/second-section/images/second-description-background";
import { ThirdDescriptionBackground } from "@/components/second-section/images/third-description-background";
import { MainLayout } from "@/components/second-section/main-layout";
import { CardContentText, CardTitleText, TitleText } from "@/components/second-section/typography/text";

export default function SecondSection() {
  return (
    <MainLayout>
      <LeftContainer>
        <PlasmaImage/>
      </LeftContainer>
      <RightContainer>
        <TitleText>I specialize in</TitleText>
        <Container direction="column">
          <DescriptionBlock>
            <FirstDescriptionBackground/>
            <DescriptionBlockContent>
              <CardTitleText>Frontend Developer</CardTitleText>
              <CardContentText>
                Desenvolvo interfaces modernas com Flutter, React e Next.js, priorizando acessibilidade, responsividade e design system para garantir consistência e usabilidade em escala.
              </CardContentText>
            </DescriptionBlockContent>
          </DescriptionBlock>
          <DescriptionBlock>
            <SecondDescriptionBackground/>
            <DescriptionBlockContent>
              <CardTitleText>Backend & Database</CardTitleText>
              <CardContentText>
                Estruturo aplicações com arquitetura escalável, seguindo princípios de Clean Code, utilizando Prisma ORM e testes automatizados para garantir integrações confiáveis e manutenção eficiente.
              </CardContentText>
            </DescriptionBlockContent>
          </DescriptionBlock>
          <DescriptionBlock>
            <ThirdDescriptionBackground/>
            <DescriptionBlockContent>
              <CardTitleText>UI/UX Designer</CardTitleText>
              <CardContentText>
                Desenho experiências centradas no usuário com prototipação ágil, aplicação das heurísticas de Nielsen, design system consistente e foco em responsividade mobile-first.
              </CardContentText>
            </DescriptionBlockContent>
          </DescriptionBlock>
        </Container>
      </RightContainer>
    </MainLayout>
  );
}
