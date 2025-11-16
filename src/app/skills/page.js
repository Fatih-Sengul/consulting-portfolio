'use client';

import React from 'react';
import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Tile,
  Tag,
  Link,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '@carbon/react';
import {
  Application,
  Code,
  MachineLearning,
  CloudServices,
  ArrowRight,
  Launch,
} from '@carbon/icons-react';

import { skillDomains } from '../../data/skillDomains';
import { techStack } from '../../data/techStack';
import { skillEvidence } from '../../data/skillEvidence';
import './skills-page.scss';

// Icon mapping for skill domains
const iconMap = {
  Application: Application,
  Code: Code,
  MachineLearning: MachineLearning,
  CloudServices: CloudServices,
};

// Level tag color mapping
const getLevelColor = (level) => {
  switch (level) {
    case 'Expert':
      return 'blue';
    case 'Advanced':
      return 'teal';
    case 'Working':
      return 'cool-gray';
    default:
      return 'gray';
  }
};

export default function SkillsPage() {
  return (
    <Grid className="skills-page" fullWidth>
      {/* SECTION 1: HERO / INTRO */}
      <Column lg={16} md={8} sm={4} className="skills-page__header">
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/skills" isCurrentPage>
            Skills &amp; Tech Stack
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="skills-page__title-section">
          <h1 className="skills-page__title">Skills &amp; Tech Stack</h1>
          <p className="skills-page__subtitle">
            An overview of the technologies, domains, and platforms I work with
            across SAP, Java, AI, and mainframe ecosystems. This page highlights
            both my core capabilities and the evidence behind them.
          </p>
        </div>

        <div className="skills-page__tags">
          <Tag type="blue">SAP ABAP &amp; S/4HANA</Tag>
          <Tag type="cyan">Full-Stack Java</Tag>
          <Tag type="teal">AI &amp; Computer Vision</Tag>
          <Tag type="purple">Intel oneAPI</Tag>
          <Tag type="magenta">IBM Z Mainframe</Tag>
        </div>
      </Column>

      {/* SECTION 2: CORE DOMAINS (4 CAPABILITY TILES) */}
      <Column lg={16} md={8} sm={4} className="skills-page__section">
        <h2 className="skills-page__section-title">Core Domains</h2>
      </Column>

      {skillDomains.map((domain) => {
        const IconComponent = iconMap[domain.icon];
        return (
          <Column key={domain.id} lg={4} md={4} sm={4}>
            <Tile className="domain-tile">
              <div className="domain-tile__icon">
                {IconComponent && <IconComponent size={32} />}
              </div>
              <h3 className="domain-tile__title">{domain.title}</h3>
              <p className="domain-tile__description">{domain.description}</p>
              <ul className="domain-tile__bullets">
                {domain.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <div className="domain-tile__tags">
                {domain.tags.map((tag, idx) => (
                  <Tag key={idx} type="cool-gray" size="sm">
                    {tag}
                  </Tag>
                ))}
              </div>
              <Link
                href={domain.linkHref}
                className="domain-tile__link"
                renderIcon={ArrowRight}
              >
                {domain.linkLabel}
              </Link>
            </Tile>
          </Column>
        );
      })}

      {/* SECTION 3: TECH STACK MATRIX */}
      <Column lg={16} md={8} sm={4} className="skills-page__section">
        <h2 className="skills-page__section-title">Tech Stack Matrix</h2>
      </Column>

      {/* Programming Languages */}
      <Column lg={5} md={8} sm={4}>
        <div className="tech-stack-column">
          <h3 className="tech-stack-column__title">Programming Languages</h3>
          <div className="tech-stack-column__items">
            {techStack.languages.map((lang, idx) => (
              <div key={idx} className="tech-item">
                <div className="tech-item__header">
                  <span className="tech-item__name">{lang.name}</span>
                  <Tag type={getLevelColor(lang.level)} size="sm">
                    {lang.level}
                  </Tag>
                </div>
                <p className="tech-item__context">{lang.context}</p>
              </div>
            ))}
          </div>
        </div>
      </Column>

      {/* Frameworks & Libraries */}
      <Column lg={5} md={8} sm={4}>
        <div className="tech-stack-column">
          <h3 className="tech-stack-column__title">
            Frameworks &amp; Libraries
          </h3>
          <div className="tech-stack-column__items">
            {techStack.frameworks.map((framework, idx) => (
              <div key={idx} className="tech-item">
                <div className="tech-item__header">
                  <span className="tech-item__name">{framework.name}</span>
                  <Tag type={getLevelColor(framework.level)} size="sm">
                    {framework.level}
                  </Tag>
                </div>
                <p className="tech-item__context">{framework.context}</p>
              </div>
            ))}
          </div>
        </div>
      </Column>

      {/* Platforms & Tools */}
      <Column lg={5} md={8} sm={4}>
        <div className="tech-stack-column">
          <h3 className="tech-stack-column__title">Platforms &amp; Tools</h3>
          <div className="tech-stack-column__items">
            {techStack.platformsTools.map((platform, idx) => (
              <div key={idx} className="tech-item">
                <div className="tech-item__header">
                  <span className="tech-item__name">{platform.name}</span>
                  <Tag type={getLevelColor(platform.level)} size="sm">
                    {platform.level}
                  </Tag>
                </div>
                <p className="tech-item__context">{platform.context}</p>
              </div>
            ))}
          </div>
        </div>
      </Column>

      {/* SECTION 4: EVIDENCE-BASED SKILLS LIST */}
      <Column lg={16} md={8} sm={4} className="skills-page__section">
        <h2 className="skills-page__section-title">Evidence-Based Skills</h2>
        <p className="skills-page__section-subtitle">
          Each skill claim is backed by real-world experience, projects, or
          published research.
        </p>
      </Column>

      <Column lg={16} md={8} sm={4}>
        <StructuredListWrapper className="evidence-list">
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Skill</StructuredListCell>
              <StructuredListCell head>Proof &amp; Context</StructuredListCell>
              <StructuredListCell head>Link</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            {skillEvidence.map((item, idx) => (
              <StructuredListRow key={idx}>
                <StructuredListCell className="evidence-list__skill">
                  {item.skill}
                </StructuredListCell>
                <StructuredListCell className="evidence-list__proof">
                  {item.proof}
                </StructuredListCell>
                <StructuredListCell>
                  <Link
                    href={item.linkHref}
                    renderIcon={item.external ? Launch : ArrowRight}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {item.linkLabel}
                  </Link>
                </StructuredListCell>
              </StructuredListRow>
            ))}
          </StructuredListBody>
        </StructuredListWrapper>
      </Column>

      {/* SECTION 5: OPTIONAL CTA */}
      <Column lg={16} md={8} sm={4} className="skills-page__cta">
        <Tile className="cta-tile">
          <h2 className="cta-tile__heading">Want to work together?</h2>
          <p className="cta-tile__text">
            I'm available for consulting engagements in SAP development, Java
            backend architecture, and AI-driven projects. Let's collaborate on
            solving complex business challenges.
          </p>
          <div className="cta-tile__buttons">
            <Link href="/experience" renderIcon={ArrowRight}>
              View full experience
            </Link>
            <Link href="/publications" renderIcon={ArrowRight}>
              View publications
            </Link>
          </div>
        </Tile>
      </Column>
    </Grid>
  );
}
