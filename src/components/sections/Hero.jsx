import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: none;
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 4px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 38px;
    margin-bottom: 4px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    margin-bottom: 2px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 960px) {
    justify-content: center;
    font-size: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 28px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 24px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 14px 0;

  background: ${({ theme }) => theme.primary};
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 16px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 480px;
  max-height: 480px;
  border: 2px solid ${({ theme }) => theme.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 640px) {
    max-width: 320px;
    max-height: 320px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Krish" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
