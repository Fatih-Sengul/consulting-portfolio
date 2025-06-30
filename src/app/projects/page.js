'use client';

import React from 'react';
import { Grid, Column, Tile, Tag, Button } from '@carbon/react';
import Sap from '@carbon/pictograms-react/lib/sap';
import IbmZ from '@carbon/pictograms-react/lib/ibm--z';
import Migration from '@carbon/pictograms-react/lib/migration';
import Analytics from '@carbon/pictograms-react/lib/analytics';
import Devops from '@carbon/pictograms-react/lib/devops';
import { Chip } from '@carbon/icons-react';

const projects = [
  {
    id: 1,
    title: 'SAP Integration Platform',
    description: 'Connecting enterprise data streams using SAP technologies.',
    technologies: ['SAP', 'Node.js', 'React'],
    icon: Sap,
  },
  {
    id: 2,
    title: 'Mainframe Modernization',
    description: 'Migrating IBM Z workloads to cloud-native services.',
    technologies: ['IBM Z', 'Kubernetes', 'Docker'],
    icon: IbmZ,
  },
  {
    id: 3,
    title: 'oneAPI HPC Toolkit',
    description: 'Accelerating HPC applications with Intel oneAPI.',
    technologies: ['Intel oneAPI', 'C++', 'MPI'],
    icon: Chip,
  },
  {
    id: 4,
    title: 'Cloud Migration Service',
    description: 'Seamless migration of on-prem apps to the cloud.',
    technologies: ['AWS', 'Terraform', 'CI/CD'],
    icon: Migration,
  },
  {
    id: 5,
    title: 'Data Analytics Platform',
    description: 'Building a real-time analytics dashboard.',
    technologies: ['Python', 'Spark', 'Dash'],
    icon: Analytics,
  },
  {
    id: 6,
    title: 'DevOps Automation',
    description: 'Automating deployment pipelines for microservices.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes'],
    icon: Devops,
  },
];

export default function ProjectsPage() {
  return (
    <Grid className="projects-page">
      <Column lg={16} md={8} sm={4} className="projects-page__r1">
        <h1 style={{ marginBottom: '1rem' }}>Projects</h1>
        <Grid>
          {projects.map(
            ({ id, title, description, technologies, icon: Icon }) => (
              <Column key={id} lg={5} md={8} sm={4}>
                <Tile className="project-tile">
                  <div>
                    <div className="project-icon">
                      <Icon width={48} height={48} aria-hidden="true" />
                    </div>
                    <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
                    <p>{description}</p>
                    <div className="project-tags">
                      {technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                  <Button href="#" kind="secondary">
                    View project
                  </Button>
                </Tile>
              </Column>
            )
          )}
        </Grid>
      </Column>
    </Grid>
  );
}
