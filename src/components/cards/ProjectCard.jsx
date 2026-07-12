import React from "react";
import styled from "styled-components";
import {
  GitHub,
  OpenInNew,
  LayersOutlined,
  CodeOutlined,
  AutoAwesomeOutlined,
  DesktopWindowsOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";

/* ── 5 alternating accent themes ── */
const ACCENTS = [
  {
    bg: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
    glow: "rgba(29,78,216,0.22)",
    border: "rgba(59,130,246,0.35)",
    Icon: LayersOutlined,
    tagColor: "#93c5fd",
    tagBg: "rgba(29,78,216,0.12)",
    tagBorder: "rgba(59,130,246,0.22)",
  },
  {
    bg: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
    glow: "rgba(124,58,237,0.22)",
    border: "rgba(139,92,246,0.35)",
    Icon: CodeOutlined,
    tagColor: "#c4b5fd",
    tagBg: "rgba(124,58,237,0.12)",
    tagBorder: "rgba(139,92,246,0.22)",
  },
  {
    bg: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    glow: "rgba(5,150,105,0.22)",
    border: "rgba(16,185,129,0.35)",
    Icon: AutoAwesomeOutlined,
    tagColor: "#6ee7b7",
    tagBg: "rgba(5,150,105,0.12)",
    tagBorder: "rgba(16,185,129,0.22)",
  },
  {
    bg: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
    glow: "rgba(234,88,12,0.22)",
    border: "rgba(249,115,22,0.35)",
    Icon: DesktopWindowsOutlined,
    tagColor: "#fdba74",
    tagBg: "rgba(234,88,12,0.12)",
    tagBorder: "rgba(249,115,22,0.22)",
  },
  {
    bg: "linear-gradient(135deg, #db2777 0%, #ec4899 100%)",
    glow: "rgba(219,39,119,0.22)",
    border: "rgba(236,72,153,0.35)",
    Icon: EmojiEventsOutlined,
    tagColor: "#fbcfe8",
    tagBg: "rgba(219,39,119,0.12)",
    tagBorder: "rgba(236,72,153,0.22)",
  },
];

/* ── Styled components ── */
const Card = styled.div`
  background: #161b27;
  border: 1px solid #2d3748;
  border-radius: 16px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  height: 380px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease,
    transform 0.25s ease;
  cursor: default;

  &:hover {
    border-color: ${({ accentBorder }) => accentBorder};
    box-shadow: 0 10px 36px ${({ accentGlow }) => accentGlow};
    transform: translateY(-4px);
  }
`;

const Top = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const IconBadge = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 24px;
    color: #fff;
  }
`;

const HeaderBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DateText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary}99;
`;

const Description = styled.div`
  font-size: 13.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}cc;
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ accentColor }) => accentColor};
  background: ${({ accentBg }) => accentBg};
  padding: 4px 11px;
  border-radius: 20px;
  border: 1px solid ${({ accentBorder }) => accentBorder};
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.15);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 2px;
`;

const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid #2d3748;
  background: rgba(255, 255, 255, 0.03);
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: #4b5563;
    color: #fff;
  }

  svg {
    font-size: 15px;
  }
`;

/* ── Component ── */
const ProjectCard = ({ project, index = 0 }) => {
  const accent = ACCENTS[index % ACCENTS.length];
  const { Icon } = accent;

  return (
    <Card accentBorder={accent.border} accentGlow={accent.glow}>
      {/* ── header row: icon badge + title/date ── */}
      <Top>
        <IconBadge bg={accent.bg}>
          <Icon />
        </IconBadge>
        <HeaderBody>
          <Title>{project.title}</Title>
          {project.date && <DateText>{project.date}</DateText>}
        </HeaderBody>
      </Top>

      {project.description && (
        <Description>{project.description}</Description>
      )}

      {project.tags?.length > 0 && (
        <TagsRow>
          {project.tags.map((tag, i) => (
            <Tag
              key={i}
              accentColor={accent.tagColor}
              accentBg={accent.tagBg}
              accentBorder={accent.tagBorder}
            >
              {tag}
            </Tag>
          ))}
        </TagsRow>
      )}

      {(project.github || project.webapp) && (
        <Actions>
          {project.github && (
            <ActionBtn href={project.github} target="_blank" rel="noreferrer">
              <GitHub /> Code
            </ActionBtn>
          )}
          {project.webapp && (
            <ActionBtn href={project.webapp} target="_blank" rel="noreferrer">
              <OpenInNew /> Live
            </ActionBtn>
          )}
        </Actions>
      )}
    </Card>
  );
};

export default ProjectCard;
