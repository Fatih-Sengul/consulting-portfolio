'use client';

import React, { useState, useMemo } from 'react';
import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tile,
  Search,
  Dropdown,
  Tag,
  Link,
  Pagination,
  Tooltip,
} from '@carbon/react';
import {
  Download,
  Launch,
  DocumentPdf,
  Citation,
  Activity,
  Analytics,
  Book,
} from '@carbon/icons-react';
import publicationsData from '../../data/publications.json';
import './publications.scss';

const PublicationsPage = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedConference, setSelectedConference] = useState('all');
  const [activeKeywords, setActiveKeywords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  // Calculate metrics from data
  const metrics = useMemo(() => {
    const totalPublications = publicationsData.length;
    const totalCitations = publicationsData.reduce((sum, pub) => sum + pub.citations, 0);

    // Calculate H-Index
    const sortedCitations = publicationsData
      .map(pub => pub.citations)
      .sort((a, b) => b - a);
    let hIndex = 0;
    for (let i = 0; i < sortedCitations.length; i++) {
      if (sortedCitations[i] >= i + 1) {
        hIndex = i + 1;
      } else {
        break;
      }
    }

    // Most cited paper
    const mostCitedPaper = publicationsData.reduce((max, pub) =>
      pub.citations > max.citations ? pub : max
    , publicationsData[0]);

    return {
      totalPublications,
      totalCitations,
      hIndex,
      mostCitedPaper: mostCitedPaper.title,
      mostCitedCount: mostCitedPaper.citations
    };
  }, []);

  // Extract unique years and conferences for filters
  const years = useMemo(() => {
    const uniqueYears = [...new Set(publicationsData.map(pub => pub.year))].sort((a, b) => b - a);
    return uniqueYears;
  }, []);

  const conferences = useMemo(() => {
    const uniqueConferences = [...new Set(
      publicationsData
        .map(pub => pub.conference || pub.journal)
        .filter(Boolean)
    )].sort();
    return uniqueConferences;
  }, []);

  // Extract all unique keywords for tag display
  const allKeywords = useMemo(() => {
    const keywordSet = new Set();
    publicationsData.forEach(pub => {
      pub.keywords.forEach(keyword => keywordSet.add(keyword));
    });
    return Array.from(keywordSet).slice(0, 15); // Show top 15 keywords
  }, []);

  // Filter publications based on search and filters
  const filteredPublications = useMemo(() => {
    return publicationsData.filter(pub => {
      // Search filter
      const matchesSearch = searchTerm === '' ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (pub.conference && pub.conference.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (pub.journal && pub.journal.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.year.toString().includes(searchTerm);

      // Year filter
      const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;

      // Conference filter
      const matchesConference = selectedConference === 'all' ||
        pub.conference === selectedConference ||
        pub.journal === selectedConference;

      // Keyword filter
      const matchesKeywords = activeKeywords.length === 0 ||
        activeKeywords.every(kw => pub.keywords.includes(kw));

      return matchesSearch && matchesYear && matchesConference && matchesKeywords;
    });
  }, [searchTerm, selectedYear, selectedConference, activeKeywords]);

  // Pagination
  const paginatedPublications = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredPublications.slice(startIndex, startIndex + pageSize);
  }, [filteredPublications, currentPage, pageSize]);

  // Handlers
  const handleKeywordToggle = (keyword) => {
    setActiveKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleDownloadPDF = () => {
    // Placeholder for PDF download
    console.log('Downloading publication list...');
    alert('PDF download functionality would be implemented here');
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Grid className="publications-page" fullWidth>
      {/* Page Header */}
      <Column lg={16} md={8} sm={4} className="publications-page__header">
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/publications" isCurrentPage>
            Publications
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="publications-page__title-row">
          <h1 className="publications-page__title">Publications</h1>
          <Button
            kind="primary"
            renderIcon={Download}
            onClick={handleDownloadPDF}
          >
            Download Full List (PDF)
          </Button>
        </div>
      </Column>

      {/* Section A: Academic Metrics Overview */}
      <Column lg={16} md={8} sm={4} className="publications-page__metrics">
        <Grid narrow>
          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile">
              <div className="metric-tile__icon">
                <Book size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.totalPublications}</div>
                <div className="metric-tile__label">Total Publications</div>
              </div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile">
              <div className="metric-tile__icon">
                <Citation size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.totalCitations}</div>
                <div className="metric-tile__label">Total Citations</div>
              </div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile">
              <div className="metric-tile__icon">
                <Analytics size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.hIndex}</div>
                <div className="metric-tile__label">H-Index</div>
              </div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile metric-tile--highlight">
              <div className="metric-tile__icon">
                <Activity size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.mostCitedCount}</div>
                <div className="metric-tile__label">
                  <Tooltip
                    align="bottom"
                    label={metrics.mostCitedPaper}
                  >
                    <span className="metric-tile__label-truncate">
                      Most Cited Paper
                    </span>
                  </Tooltip>
                </div>
              </div>
            </Tile>
          </Column>
        </Grid>
      </Column>

      {/* Section B: Search and Filters Bar */}
      <Column lg={16} md={8} sm={4} className="publications-page__filters">
        <Tile className="filter-bar">
          <Grid narrow>
            <Column lg={6} md={4} sm={4}>
              <Search
                size="lg"
                placeholder="Search publications..."
                labelText="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                onClear={() => {
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
              />
            </Column>

            <Column lg={3} md={2} sm={2}>
              <Dropdown
                id="year-filter"
                titleText="Filter by Year"
                label="All Years"
                items={[
                  { id: 'all', text: 'All Years' },
                  ...years.map(year => ({ id: year.toString(), text: year.toString() }))
                ]}
                itemToString={(item) => item ? item.text : ''}
                onChange={({ selectedItem }) => {
                  setSelectedYear(selectedItem.id);
                  setCurrentPage(1);
                }}
              />
            </Column>

            <Column lg={7} md={2} sm={2}>
              <Dropdown
                id="conference-filter"
                titleText="Filter by Venue"
                label="All Venues"
                items={[
                  { id: 'all', text: 'All Venues' },
                  ...conferences.map(conf => ({ id: conf, text: conf }))
                ]}
                itemToString={(item) => item ? item.text : ''}
                onChange={({ selectedItem }) => {
                  setSelectedConference(selectedItem.id);
                  setCurrentPage(1);
                }}
              />
            </Column>
          </Grid>

          <div className="filter-bar__keywords">
            <div className="filter-bar__keywords-label">Popular Keywords:</div>
            <div className="filter-bar__keywords-list">
              {allKeywords.map(keyword => (
                <Tag
                  key={keyword}
                  type={activeKeywords.includes(keyword) ? 'blue' : 'cool-gray'}
                  filter={activeKeywords.includes(keyword)}
                  onClick={() => handleKeywordToggle(keyword)}
                  className="filter-keyword-tag"
                >
                  {keyword}
                </Tag>
              ))}
            </div>
          </div>
        </Tile>
      </Column>

      {/* Section C: Publication Cards Grid */}
      <Column lg={16} md={8} sm={4} className="publications-page__results">
        <div className="publications-page__results-header">
          <h2 className="publications-page__results-title">
            {filteredPublications.length} Publication{filteredPublications.length !== 1 ? 's' : ''} Found
          </h2>
        </div>

        <Grid narrow className="publications-grid">
          {paginatedPublications.map((publication) => (
            <Column lg={5} md={4} sm={4} key={publication.id}>
              <Tile className="publication-card">
                {/* Header Badges */}
                <div className="publication-card__badges">
                  <Tag type="blue" size="sm">{publication.year}</Tag>
                  <Tag type="green" size="sm">{publication.type}</Tag>
                  {publication.impact && (
                    <Tag
                      type={publication.impact === 'High' ? 'red' : 'cool-gray'}
                      size="sm"
                    >
                      {publication.impact} Impact
                    </Tag>
                  )}
                </div>

                {/* Title */}
                <h3 className="publication-card__title">
                  <Link
                    href={publication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.title}
                  </Link>
                </h3>

                {/* Conference/Journal */}
                <p className="publication-card__venue">
                  {publication.conference || publication.journal}
                </p>

                {/* Summary with Tooltip */}
                <div className="publication-card__summary">
                  <Tooltip
                    align="bottom"
                    label={publication.summary}
                  >
                    <p>{truncateText(publication.summary, 120)}</p>
                  </Tooltip>
                </div>

                {/* Keywords */}
                <div className="publication-card__keywords">
                  {publication.keywords.slice(0, 3).map((keyword, idx) => (
                    <Tag key={idx} type="cool-gray" size="sm">
                      {keyword}
                    </Tag>
                  ))}
                  {publication.keywords.length > 3 && (
                    <Tag type="cool-gray" size="sm">
                      +{publication.keywords.length - 3} more
                    </Tag>
                  )}
                </div>

                {/* Metrics Row */}
                <div className="publication-card__metrics">
                  <div className="publication-card__metric">
                    <Citation size={16} />
                    <span>{publication.citations} citations</span>
                  </div>
                  {publication.hIndexContribution && (
                    <div className="publication-card__metric">
                      <Analytics size={16} />
                      <span>H-Index</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="publication-card__actions">
                  <Button
                    kind="ghost"
                    size="sm"
                    renderIcon={DocumentPdf}
                    href={publication.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    as="a"
                  >
                    View PDF
                  </Button>
                  <Button
                    kind="ghost"
                    size="sm"
                    renderIcon={Launch}
                    href={publication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    as="a"
                  >
                    Open DOI
                  </Button>
                </div>
              </Tile>
            </Column>
          ))}
        </Grid>

        {filteredPublications.length === 0 && (
          <div className="publications-page__no-results">
            <p>No publications found matching your search criteria.</p>
            <Button
              kind="tertiary"
              onClick={() => {
                setSearchTerm('');
                setSelectedYear('all');
                setSelectedConference('all');
                setActiveKeywords([]);
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </Column>

      {/* Pagination */}
      {filteredPublications.length > 0 && (
        <Column lg={16} md={8} sm={4} className="publications-page__pagination">
          <Pagination
            backwardText="Previous page"
            forwardText="Next page"
            itemsPerPageText="Items per page:"
            page={currentPage}
            pageSize={pageSize}
            pageSizes={[6, 9, 12, 15]}
            totalItems={filteredPublications.length}
            onChange={({ page, pageSize: newPageSize }) => {
              setCurrentPage(page);
              setPageSize(newPageSize);
            }}
          />
        </Column>
      )}
    </Grid>
  );
};

export default PublicationsPage;
