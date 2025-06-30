'use client';

import React, { useState } from 'react';
import PublicationTable from './PublicationTable';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Pagination,
  Column,
  Grid,
  Link,
} from '@carbon/react';

const headers = [
  { key: 'title', header: 'Title' },
  { key: 'year', header: 'Year' },
  { key: 'venue', header: 'Conference/Journal' },
  { key: 'summary', header: 'Summary' },
  { key: 'link', header: 'Link' },
];

const mockData = [
  {
    id: '1',
    title: 'Deep Learning Approaches',
    year: '2019',
    venue: 'NeurIPS',
    summary: 'Explores new architectures for neural networks.',
    link: 'https://example.com/paper1.pdf',
  },
  {
    id: '2',
    title: 'Quantum Computing Basics',
    year: '2020',
    venue: 'ICML',
    summary: 'An introduction to algorithms for quantum computers.',
    link: 'https://example.com/paper2.pdf',
  },
  {
    id: '3',
    title: 'AI Ethics Framework',
    year: '2021',
    venue: 'AAAI',
    summary: 'Discusses ethical considerations in AI research.',
    link: 'https://example.com/paper3.pdf',
  },
  {
    id: '4',
    title: 'Robotics in Healthcare',
    year: '2022',
    venue: 'ICRA',
    summary: 'Using robots for patient assistance and surgery.',
    link: 'https://example.com/paper4.pdf',
  },
  {
    id: '5',
    title: 'Data Privacy Techniques',
    year: '2020',
    venue: 'USENIX Security',
    summary: 'Techniques to preserve privacy in large datasets.',
    link: 'https://example.com/paper5.pdf',
  },
  {
    id: '6',
    title: 'Natural Language Processing Advances',
    year: '2018',
    venue: 'ACL',
    summary: 'State-of-the-art NLP methods and applications.',
    link: 'https://example.com/paper6.pdf',
  },
];

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    link: (
      <Link href={row.link} target="_blank" rel="noreferrer">
        Open
      </Link>
    ),
  }));

const downloadPdf = () => {
  // Replace with real implementation
  console.log('Download PDF');
};

function PublicationPage() {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);

  const rows = getRowItems(mockData);

  return (
    <Grid className="publication-page">
      <Column lg={16} md={8} sm={4} className="publication-page__r1">
        <Breadcrumb noTrailingSlash aria-label="breadcrumb">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/publications">Publications</BreadcrumbItem>
        </Breadcrumb>
        <h1 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          Publications
        </h1>
        <Button onClick={downloadPdf} style={{ marginBottom: '1rem' }}>
          Download PDF
        </Button>
        <PublicationTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={rows.length}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </Column>
    </Grid>
  );
}

export default PublicationPage;
