'use client';

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
import { useTranslations } from "next-intl";

export default function ThirdSection() {
  const t = useTranslations('ThirdSection');
  return (
    <MainLayout>
      <TitleText>{t('Title')}</TitleText>
      <ProjectBlock>
        <FirstProjectBackground/>
        <ProjectBlockContent>
          <ProjectBlockContentLeft>
            <Container direction="column" alignment="start">
              <RubBankText color="secondaryRubBank"><span translate="no">{t('Rub')}</span></RubBankText>
              <RubBankText><span translate="no">{t('Bank')}</span></RubBankText>
            </Container>
            <ProjectContentText>
              {t('RubBankContent')}
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
              <MaranataText type="primary"><span translate="no">{t('Maranata')}</span></MaranataText>
              <MaranataText type="secondary"><span translate="no">{t('Church')}</span></MaranataText>
            </Container>
            <ProjectContentText>
              {t('MaranataChurchContent')}
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
              <BrasilcardText><span translate="no">{t('BrasilCard')}</span></BrasilcardText>
            </Container>
            <ProjectContentText>
              {t('BrasilCardContent')}
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
