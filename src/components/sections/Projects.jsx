import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Track = styled.div`
  display: flex;
  gap: 24px;
  overflow: hidden;
  width: 100%;
  padding: 8px 4px;
`;

const Slide = styled.div`
  flex: 0 0 calc(50% - 12px);
  transition: opacity 0.35s ease;

  @media (max-width: 860px) {
    flex: 0 0 100%;
  }
`;

const ArrowBtn = styled.button`
  flex-shrink: 0;
  background: #161b27;
  border: 1.5px solid #2d3748;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
  z-index: 2;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}20;
    color: ${({ theme }) => theme.primary};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  svg {
    font-size: 22px;
  }
`;

/* ─── Dots ─── */
const Dots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  justify-content: center;
`;

const Dot = styled.div`
  width: ${({ active }) => (active ? "22px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background: ${({ active, theme }) =>
    active ? theme.primary : theme.primary + "40"};
  transition: width 0.3s ease, background 0.3s ease;
  cursor: pointer;
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

const CARDS_PER_PAGE = 2; // shown at a time on desktop

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [page, setPage] = useState(0);

  const filtered =
    toggle === "all"
      ? projects
      : projects.filter((p) => p.category === toggle);

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const visible = filtered.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const handleToggle = (key) => {
    setToggle(key);
    setPage(0);
  };

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
          <>
            <CarouselWrapper>
              <ArrowBtn
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                aria-label="Previous"
              >
                <ChevronLeft />
              </ArrowBtn>

              <Track>
                {visible.map((project, i) => {
                  const globalIdx = page * CARDS_PER_PAGE + i;
                  return (
                    <Slide key={project.id}>
                      <ProjectCard project={project} index={globalIdx} />
                    </Slide>
                  );
                })}
              </Track>

              <ArrowBtn
                onClick={() =>
                  setPage((p) => Math.min(p + 1, totalPages - 1))
                }
                disabled={page === totalPages - 1}
                aria-label="Next"
              >
                <ChevronRight />
              </ArrowBtn>
            </CarouselWrapper>

            {totalPages > 1 && (
              <Dots>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Dot
                    key={i}
                    active={i === page}
                    onClick={() => setPage(i)}
                  />
                ))}
              </Dots>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
