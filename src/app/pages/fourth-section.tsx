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
              Frequently Asked Questions
            </LeftBigText>
            <LeftInfoText size="lg">
              If  you have any other questions, you can contact me by email
            </LeftInfoText>
            <LeftInfoText size="md">
              victorhugovicentedev@hotmail.com
            </LeftInfoText>
          </Container>
        </LeftTopContainer>
        <RightTopContainer>
          <FaqDropList 
            title="Do you do web design or web development?" 
            answer="Community files are design files creators have shared with the Community. Create templates for wireframe, UI kits, asset libraries, and design systems. Or share educational resources, interactive tutorials, and tools to use across the design process." 
          />
          <FaqDropList 
            title="Do you do web design or web development?" 
            answer="Community files are design files creators have shared with the Community. Create templates for wireframe, UI kits, asset libraries, and design systems. Or share educational resources, interactive tutorials, and tools to use across the design process." 
          />
          <FaqDropList 
            title="Do you do web design or web development?" 
            answer="Community files are design files creators have shared with the Community. Create templates for wireframe, UI kits, asset libraries, and design systems. Or share educational resources, interactive tutorials, and tools to use across the design process." 
          />
          <FaqDropList 
            title="Do you do web design or web development?" 
            answer="Community files are design files creators have shared with the Community. Create templates for wireframe, UI kits, asset libraries, and design systems. Or share educational resources, interactive tutorials, and tools to use across the design process." 
          />
        </RightTopContainer>
      </TopContainer>
      <Container direction="row" alignment="center" justify="spaceBetween" width="100%">
        <LeftBottomContainer>
          <Container direction="column" alignment="start" gap="24px">
            <Container direction="row" alignment="center" gap="16px">
              <PersonalImage />
              <BottomBigText>
                Let's build it together.
              </BottomBigText>
            </Container>
            <Container direction="row" alignment="center" gap="12px">
              <BlackButton>
                <BlackButtonText>
                  My Linkedin
                </BlackButtonText>
                <LinkedinIcon />
              </BlackButton>
              <BlackButton>
                <BlackButtonText>
                  Download my resume
                </BlackButtonText>
                <ResumeIcon />
              </BlackButton>
            </Container>
          </Container>
        </LeftBottomContainer>
        <RightBottomContainer>
          <TryMeImage/>
          <BottomBigText>
            Try me out, risk free!
          </BottomBigText>
          <BottomSmallText>
            Let's build something great together
          </BottomSmallText>
        </RightBottomContainer>
      </Container>
    </MainLayout>
  );
}
