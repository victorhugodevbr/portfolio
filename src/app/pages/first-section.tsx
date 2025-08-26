import { Container } from "@/components/containers";
import { PersonalImage } from "@/components/first-section/images/personal-image";
import { MainLayout } from "@/components/first-section/main-layout";
import { Text } from "@/components/first-section/typography/text";

export default function FirstSection() {
  return (
    <MainLayout>
      <Container direction="column">
        <Text size="lg">Olá, eu sou</Text>
        <Text size="xl"><span translate="no">VICTOR HUGO</span></Text>
        <Text size="md">Desenvolvedor <span translate="no">Full Stack</span> / <span translate="no">UI & UX</span> Designer</Text>
      </Container>
      <PersonalImage/>
    </MainLayout>
  );
}
