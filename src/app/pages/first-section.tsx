'use client';
import { Container } from "@/components/containers";
import { PersonalImage } from "@/components/first-section/images/personal-image";
import { MainLayout } from "@/components/first-section/main-layout";
import { Text } from "@/components/first-section/typography/text";
import {useTranslations} from 'next-intl';

export default function FirstSection() {
  const t = useTranslations('FirstSection');
  return (
    <MainLayout>
      <Container direction="column" height="100%" gap="1.5vh">
        <Text size="lg">{t('First')}</Text>
        <Text size="xl"><span translate="no">{t('Second')}</span></Text>
        <Text size="md">{t('Third')}</Text>
      </Container>
      <Container height="100%"/>
      <PersonalImage/>
    </MainLayout>
  );
}
