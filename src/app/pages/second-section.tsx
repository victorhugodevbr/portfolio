'use client';
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
import { useTranslations } from "next-intl";

export default function SecondSection() {
  const t = useTranslations('SecondSection');
  return (
    <MainLayout>
      <LeftContainer>
        <PlasmaImage/>
      </LeftContainer>
      <RightContainer>
        <TitleText>{t('Title')}</TitleText>
        <Container direction="column">
          <DescriptionBlock>
            <FirstDescriptionBackground/>
            <DescriptionBlockContent>
              <CardTitleText>{t('FirstCardTitle')}</CardTitleText>
              <CardContentText>
                {t('FirstCardContent')}
              </CardContentText>
            </DescriptionBlockContent>
          </DescriptionBlock>
          <DescriptionBlock>
            <SecondDescriptionBackground/>
            <DescriptionBlockContent>
              <CardTitleText>{t('SecondCardTitle')}</CardTitleText>
              <CardContentText>
                {t('SecondCardContent')}
              </CardContentText>
            </DescriptionBlockContent>
          </DescriptionBlock>
          <DescriptionBlock>
            <ThirdDescriptionBackground/>
            <DescriptionBlockContent>
              <CardTitleText>{t('ThirdCardTitle')}</CardTitleText>
              <CardContentText>
                {t('ThirdCardContent')}
              </CardContentText>
            </DescriptionBlockContent>
          </DescriptionBlock>
        </Container>
      </RightContainer>
    </MainLayout>
  );
}
