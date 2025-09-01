'use client';
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
import { useTranslations } from "next-intl";
import { BottomContainer } from "@/components/fourth-section/containers/top-container/bottom-container";
import { RightBottomPhoneContainer } from "@/components/fourth-section/containers/bottom-container/right-container/right-bottom-phone-container";
import { BlackButtonContainer } from "@/components/fourth-section/containers/bottom-container/left-container/black-button-container";

export default function FourthSection() {
  const t = useTranslations('FourthSection');
  return (
    <MainLayout>
      <TopContainer>
        <LeftTopContainer>
          <TitleText>{t('Title')}</TitleText>
          <Container direction="column" alignment="start" gap='8px'>
            <LeftBigText>
              {t('Subtitle')}
            </LeftBigText>
            <LeftInfoText size="lg">
              {t('Description')}
            </LeftInfoText>
            <LeftInfoText size="md">
              <span translate="no">{t('E-mail')}</span>
            </LeftInfoText>
          </Container>
        </LeftTopContainer>
        <RightTopContainer>
          <FaqDropList 
            title={t('FirstQuestion')} 
            answer={t('FirstAnswer')} 
          />
          <FaqDropList 
            title={t('SecondQuestion')}
            answer={t('SecondAnswer')} 
          />
          <FaqDropList 
            title={t('ThirdQuestion')}
            answer={t('ThirdAnswer')} 
          />
          <FaqDropList 
            title={t('FourthQuestion')} 
            answer={t('FourthAnswer')}
          />
        </RightTopContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <Container direction="column" alignment="center" gap="24px">
            <Container direction="row" alignment="center" gap="16px">
              <PersonalImage />
              <BottomBigText>
                {t('PhotoSection')}
              </BottomBigText>
            </Container>
            <BlackButtonContainer>
              <BlackButton link="https://www.linkedin.com/in/victor-hugo-vicente-dos-santos-05a259221">
                <BlackButtonText>
                  {t('FirstBlackButton')}
                </BlackButtonText>
                <LinkedinIcon />
              </BlackButton>
              <BlackButton link="https://github.com/victorhugodevbr">
                <BlackButtonText>
                  {t('SecondBlackButton')}
                </BlackButtonText>
                <ResumeIcon />
              </BlackButton>
            </BlackButtonContainer>
          </Container>
        </LeftBottomContainer>
        <RightBottomContainer>
          <TryMeImage/>
          <BottomBigText>
            {t('BlockSectionTitle')}
          </BottomBigText>
          <BottomSmallText>
            {t('BlockSectionSubtitle')}
          </BottomSmallText>
        </RightBottomContainer>
      </BottomContainer>
    </MainLayout>
  );
}
