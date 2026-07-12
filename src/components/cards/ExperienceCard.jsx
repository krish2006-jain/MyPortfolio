import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Tilt from "react-parallax-tilt";
import EarthCanvas from "../canvas/Earth";

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 4px 0;
`;

const Top = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const Image = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 10px;
  object-fit: cover;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Role = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const DateText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary}99;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}cc;
  line-height: 1.65;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillBadge = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary}15;
  padding: 4px 11px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary}25;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary}25;
    border-color: ${({ theme }) => theme.primary}55;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        background: "transparent",
        padding: 0,
        boxShadow: "none",
        border: "none",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #2D3748",
      }}
      iconStyle={{
        background: "#161B27",
        border: "2px solid #2D3748",
      }}
      date={experience?.date}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable={false}
        transitionSpeed={400}
      >
        <div
          style={{
            background: "#161B27",
            border: "1px solid #2D3748",
            borderRadius: "14px",
            padding: "22px 26px",
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
            e.currentTarget.style.boxShadow =
              "0 4px 24px rgba(59,130,246,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2D3748";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <CardInner>
            <Top>
              <Image src={experience?.img} alt={experience?.company} />
              <Body>
                <Role>{experience?.role}</Role>
                <Company>{experience?.company}</Company>
                <DateText>{experience?.date}</DateText>
              </Body>
            </Top>
            {experience?.desc && (
              <Description>{experience.desc}</Description>
            )}
            {experience?.skills && (
              <SkillsRow>
                {experience.skills.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </SkillsRow>
            )}
          </CardInner>
        </div>
      </Tilt>
    </VerticalTimelineElement>
    


    
  );
};

export default ExperienceCard;
