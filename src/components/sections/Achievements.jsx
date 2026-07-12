import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { EmojiEventsRounded, StarRounded, TranslateRounded } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 50px;
  padding: 0 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const SectionBox = styled.div`
  width: 100%;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;

const SectionTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.primary + 50};
  padding-bottom: 10px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AchievementCard = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: ${({ theme }) => theme.primary + 50};
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.primary + 15};
  border-radius: 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const CardDesc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: ${({ theme }) => theme.primary + 50};
  }
`;

const LanguageName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const LanguageProficiency = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 4px 12px;
  border-radius: 20px;
`;

const Achievements = () => {
  return (
    <Container id="Achievements">
      <Wrapper>
        <Title>Achievements & Languages</Title>
        <Desc>
          Recognitions of academic excellence, coding achievements, and linguistic proficiency.
        </Desc>

        <GridContainer>
          <Tilt>
            <SectionBox>
              <SectionTitle>
                <EmojiEventsRounded fontSize="large" /> Achievements
              </SectionTitle>
              <CardList>
                <AchievementCard>
                  <IconWrapper>
                    <EmojiEventsRounded />
                  </IconWrapper>
                  <CardContent>
                    <CardTitle>2nd Place – TECHXTER 15.0 National Research Paper Presentation</CardTitle>
                    <CardDesc>
                      Presented research on advancing healthcare AI from Narrow AI toward AGI using Neuro-Symbolic architectures for predictive diagnostics and improved clinical decision support.
                    </CardDesc>
                  </CardContent>
                </AchievementCard>
                <AchievementCard>
                  <IconWrapper>
                    <StarRounded />
                  </IconWrapper>
                  <CardContent>
                    <CardTitle>5-Star on HackerRank (Python)</CardTitle>
                    <CardDesc>
                      Achieved a 5-star rating in Python problem solving, demonstrating deep familiarity with core language logic and data structure concepts.
                    </CardDesc>
                  </CardContent>
                </AchievementCard>
              </CardList>
            </SectionBox>
          </Tilt>

          <Tilt>
            <SectionBox>
              <SectionTitle>
                <TranslateRounded fontSize="large" /> Languages
              </SectionTitle>
              <LanguageList>
                <LanguageItem>
                  <LanguageName>English</LanguageName>
                  <LanguageProficiency>Fluent</LanguageProficiency>
                </LanguageItem>
                <LanguageItem>
                  <LanguageName>Hindi</LanguageName>
                  <LanguageProficiency>Fluent</LanguageProficiency>
                </LanguageItem>
              </LanguageList>
            </SectionBox>
          </Tilt>
        </GridContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
