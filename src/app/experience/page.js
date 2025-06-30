'use client';

import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
  Grid,
  Column,
} from '@carbon/react';

const experiences = [
  {
    company: 'Menderes Tekstil',
    role: 'SAP ABAP Consultant',
    duration: 'Jan 2019 - Dec 2020',
    description:
      'Developed custom SAP modules, optimized manufacturing processes, and integrated ABAP enhancements.',
  },
  {
    company: 'ABC Consulting',
    role: 'Senior Developer',
    duration: 'Jan 2021 - Jun 2022',
    description:
      'Led a team of developers delivering enterprise web applications using React and Node.js.',
  },
  {
    company: 'XYZ Solutions',
    role: 'Technical Lead',
    duration: 'Jul 2022 - Present',
    description:
      'Architecting cloud-native solutions and mentoring consultants in agile best practices.',
  },
  {
    company: 'Freelance',
    role: 'Full Stack Engineer',
    duration: '2017 - 2018',
    description:
      'Implemented end-to-end solutions for small businesses, focusing on e‑commerce and automation.',
  },
];

export default function ExperiencePage() {
  return (
    <Grid className="experience-page">
      <Column lg={16} md={8} sm={4} className="experience-page__r1">
        <Breadcrumb noTrailingSlash aria-label="breadcrumb">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/experience">Experience</BreadcrumbItem>
        </Breadcrumb>
        <h1 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          Professional Experience
        </h1>
        <Accordion align="start">
          {experiences.map(({ company, role, duration, description }) => (
            <AccordionItem
              key={`${company}-${role}`}
              title={`${company} – ${role} (${duration})`}
            >
              <p>{description}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Column>
    </Grid>
  );
}
