import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

/* ─── Layout ─── */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0 16px 60px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

/* ─── Filter toggles ─── */
const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  border-radius: 12px;
  font-weight: 500;
  margin: 16px 0 32px;
  overflow: hidden;
  @media (max-width: 600px) {
    font-size: 11px;
    flex-wrap: wrap;
    border-radius: 10px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.primary}20;
  }
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary}20;
    font-weight: 600;
  `}
  @media (max-width: 600px) {
    padding: 6px 10px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

/* ─── Carousel ─── */
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Track = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  padding: 8px 4px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 calc(50% - 12px);
  transition: opacity 0.35s ease;
  scroll-snap-align: start;

  @media (max-width: 860px) {
    flex: 0 0 100%;
  }
`;

/* ─── Empty state ─── */
const Empty = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  padding: 48px 0;
  text-align: center;
`;

/* ─── Category helpers ─── */
const CATEGORIES = [
  { key: "all", label: "ALL" },
  { key: "web app", label: "WEB APPS" },
  { key: "android app", label: "ANDROID" },
  { key: "machine learning", label: "ML" },
];

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const trackRef = useRef(null);

  const filtered =
    toggle === "all"
      ? projects
      : projects.filter((p) => p.category === toggle);

  const handleToggle = (key) => {
    setToggle(key);
  };

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [toggle]);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Things I've built & shipped</Desc>

        <ToggleButtonGroup>
          {CATEGORIES.map((cat, i) => (
            <React.Fragment key={cat.key}>
              {i > 0 && <Divider />}
              <ToggleButton
                active={toggle === cat.key}
                onClick={() => handleToggle(cat.key)}
              >
                {cat.label}
              </ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        {filtered.length === 0 ? (
          <Empty>No projects in this category yet.</Empty>
        ) : (
          <CarouselWrapper>
            <Track ref={trackRef} aria-label="Project cards slider">
              {filtered.map((project, i) => (
                <Slide key={project.id}>
                  <ProjectCard project={project} index={i} />
                </Slide>
              ))}
            </Track>
          </CarouselWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
