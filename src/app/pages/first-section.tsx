import { Container } from "@/components/containers";
import { PersonalImage } from "@/components/first-section/images/personal-image";
import { MainLayout } from "@/components/first-section/main-layout";
import { Text } from "@/components/first-section/typography/text";

export default function FirstSection() {
  return (
    <MainLayout>
      <Container direction="column">
        <Text size="lg">Hi, I am</Text>
        <Text size="xl">VICTOR HUGO</Text>
        <Text size="md">Full Stack developer / UI & UX Designer</Text>
      </Container>
      <PersonalImage/>
    </MainLayout>
  );
}
