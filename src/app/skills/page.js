'use client';

import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
  Grid,
  Column,
  Tag,
} from '@carbon/react';

const skillsData = [
  {
    category: 'Programming Languages',
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
