'use client';

import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Grid,
  Column,
  Tile,
  ProgressBar,
} from '@carbon/react';
import {
  Code,
  DataBase,
  Group,
  CloudApp,
  Apps,
} from '@carbon/icons-react';
  Accordion,
  AccordionItem,
  Grid,
  Column,
  Tag,
} from '@carbon/react';

const skillsData = [
  {
    category: 'Programming Languages',
    description: 'Core languages for modern development',
    icon: Code,
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 70 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'SAP Modules',
    description: 'Enterprise resource planning expertise',
    icon: DataBase,
    skills: [
      { name: 'SAP HANA', level: 80 },
      { name: 'SAP Fiori', level: 70 },
      { name: 'SAP BW', level: 65 },
      { name: 'SAP ABAP', level: 75 },
    ],
  },
  {
    category: 'Soft Skills',
    description: 'Collaboration and leadership capabilities',
    icon: Group,
    skills: [
      { name: 'Leadership', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Agile Methodologies', level: 80 },
      { name: 'Problem Solving', level: 90 },

    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    category: 'SAP Modules',
    skills: ['SAP HANA', 'SAP Fiori', 'SAP BW', 'SAP ABAP', 'SAP PI/PO'],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Leadership',
      'Communication',
      'Agile Methodologies',
      'Problem Solving',
      'Mentoring',
    ],
  },
  {
    category: 'Cloud & Tools',
    description: 'Cloud platforms and DevOps toolchain',
    icon: CloudApp,
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Terraform', level: 65 },
      { name: 'Jenkins', level: 70 },
    ],
  },
  {
    category: 'Other Technologies',
    description: 'Additional frameworks and libraries',
    icon: Apps,
    skills: [
      { name: 'GraphQL', level: 70 },
      { name: 'Redux', level: 75 },
      { name: 'Jest', level: 80 },
      { name: 'Sass', level: 90 },
      { name: 'Git', level: 85 },
    ],
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  },
  {
    category: 'Other Technologies',
    skills: ['GraphQL', 'Redux', 'Jest', 'Sass', 'Git'],
  },
];

export default function SkillsPage() {
  return (
    <Grid className="skills-page">
      <Column lg={16} md={8} sm={4} className="skills-page__r1">
        <Breadcrumb noTrailingSlash aria-label="breadcrumb">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/skills">Skills &amp; Tools</BreadcrumbItem>
        </Breadcrumb>
        <h1 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          Skills &amp; Tools
        </h1>
      </Column>
      {skillsData.map(({ category, description, icon: Icon, skills }) => (
        <Column key={category} lg={5} md={4} sm={4}>
          <Tile className="skill-tile">
            <div className="skill-header">
              {Icon && (
                <Icon width={32} height={32} aria-hidden="true" />
              )}
              <h3 style={{ marginBottom: '0.25rem' }}>{category}</h3>
              <p className="skill-description">{description}</p>
            </div>
            <div className="skill-progress">
              {skills.map(({ name, level }) => (
                <ProgressBar
                  key={name}
                  label={name}
                  value={level}
                  max={100}
                  size="small"
                />
              ))}
            </div>
          </Tile>
        </Column>
      ))}
        <Accordion align="start">
          {skillsData.map(({ category, skills }) => (
            <AccordionItem key={category} title={category}>
              <div className="skills-tags">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </Column>
    </Grid>
  );
}
