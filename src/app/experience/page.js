'use client';

import React, { useState, useMemo } from 'react';
import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Tile,
  Search,
  Dropdown,
  Tag,
  Toggle,
  Link,
  Button,
} from '@carbon/react';
import {
  User,
  Portfolio,
  Education,
  UserMultiple,
  Location,
  Time,
  ArrowRight,
  CheckmarkFilled,
  Launch,
} from '@carbon/icons-react';
import {
  experiences,
  calculateTotalYears,
  calculateCategoryYears,
  countAmbassadorPrograms,
  getUniqueCategories,
  getUniqueLocationTypes,
} from '../../data/experience';
import './experience.scss';

const ExperiencePage = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocationType, setSelectedLocationType] = useState('all');
  const [isTimelineView, setIsTimelineView] = useState(true);

  // Calculate metrics from data
  const metrics = useMemo(() => {
    const totalYears = calculateTotalYears();
    const sapYears = calculateCategoryYears('SAP / ABAP');
    const fullStackYears = calculateCategoryYears('Full-Stack / Java');
    const ambassadorCount = countAmbassadorPrograms();

    return {
      totalYears,
      sapYears,
      fullStackYears,
      ambassadorCount,
    };
  }, []);

  // Get unique categories and location types for filters
  const categories = useMemo(() => getUniqueCategories(), []);
  const locationTypes = useMemo(() => getUniqueLocationTypes(), []);

  // Filter experiences based on search and filters
  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      // Search filter
      const matchesSearch =
        searchTerm === '' ||
        exp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
        exp.location.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || exp.category.includes(selectedCategory);

      // Location type filter
      const matchesLocationType =
        selectedLocationType === 'all' || exp.locationType === selectedLocationType;

      return matchesSearch && matchesCategory && matchesLocationType;
    });
  }, [searchTerm, selectedCategory, selectedLocationType]);

  // Format date range
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const startStr = start.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });

    if (!endDate) {
      return `${startStr} – Present`;
    }

    const end = new Date(endDate);
    const endStr = end.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });

    return `${startStr} – ${endStr}`;
  };

  // Calculate duration
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (months < 12) {
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'year' : 'years'}`;
    }

    return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${
      remainingMonths === 1 ? 'month' : 'months'
    }`;
  };

  // Get employment type tag color
  const getEmploymentTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'blue';
      case 'Contract':
        return 'cyan';
      case 'Program':
        return 'teal';
      case 'Career Break':
        return 'warm-gray';
      default:
        return 'gray';
    }
  };

  // Get category tag color
  const getCategoryColor = (category) => {
    if (category.includes('SAP')) return 'purple';
    if (category.includes('Full-Stack')) return 'magenta';
    if (category.includes('Ambassador')) return 'teal';
    if (category.includes('Academic')) return 'cyan';
    return 'cool-gray';
  };

  // Get company initials for avatar
  const getCompanyInitials = (company) => {
    const words = company.split(' ');
    if (words.length === 1) {
      return company.substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <Grid className="experience-page" fullWidth>
      {/* Page Header */}
      <Column lg={16} md={8} sm={4} className="experience-page__header">
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/experience" isCurrentPage>
            Experience
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="experience-page__title-section">
          <h1 className="experience-page__title">Experience</h1>
          <p className="experience-page__subtitle">
            A timeline of my professional roles, technical contributions, and ambassador
            activities.
          </p>
        </div>
      </Column>

      {/* Section 1: Career Summary Metrics */}
      <Column lg={16} md={8} sm={4} className="experience-page__metrics">
        <Grid narrow>
          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile">
              <div className="metric-tile__icon">
                <Time size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.totalYears}+</div>
                <div className="metric-tile__label">Years of Experience</div>
                <div className="metric-tile__sublabel">Professional Software Development</div>
              </div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile">
              <div className="metric-tile__icon">
                <Portfolio size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.sapYears}+</div>
                <div className="metric-tile__label">SAP / ABAP</div>
                <div className="metric-tile__sublabel">Enterprise Solutions</div>
              </div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile">
              <div className="metric-tile__icon">
                <User size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.fullStackYears}+</div>
                <div className="metric-tile__label">Full-Stack / Java</div>
                <div className="metric-tile__sublabel">Modern Web Development</div>
              </div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="metric-tile metric-tile--highlight">
              <div className="metric-tile__icon">
                <UserMultiple size={32} />
              </div>
              <div className="metric-tile__content">
                <div className="metric-tile__number">{metrics.ambassadorCount}</div>
                <div className="metric-tile__label">Ambassador Programs</div>
                <div className="metric-tile__sublabel">Intel oneAPI · IBM Z</div>
              </div>
            </Tile>
          </Column>
        </Grid>
      </Column>

      {/* Section 2: Filters & View Controls */}
      <Column lg={16} md={8} sm={4} className="experience-page__filters">
        <Tile className="filter-bar">
          <Grid narrow>
            <Column lg={5} md={4} sm={4}>
              <Search
                size="lg"
                placeholder="Search experiences..."
                labelText="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClear={() => setSearchTerm('')}
              />
            </Column>

            <Column lg={4} md={2} sm={2}>
              <Dropdown
                id="category-filter"
                titleText="Filter by Category"
                label="All Categories"
                items={[
                  { id: 'all', text: 'All Categories' },
                  ...categories.map((cat) => ({ id: cat, text: cat })),
                ]}
                itemToString={(item) => (item ? item.text : '')}
                onChange={({ selectedItem }) => {
                  setSelectedCategory(selectedItem.id);
                }}
              />
            </Column>

            <Column lg={4} md={2} sm={2}>
              <Dropdown
                id="location-filter"
                titleText="Filter by Location Type"
                label="All Locations"
                items={[
                  { id: 'all', text: 'All Locations' },
                  ...locationTypes.map((type) => ({ id: type, text: type })),
                ]}
                itemToString={(item) => (item ? item.text : '')}
                onChange={({ selectedItem }) => {
                  setSelectedLocationType(selectedItem.id);
                }}
              />
            </Column>

            <Column lg={3} md={2} sm={2}>
              <div className="view-mode-toggle">
                <label className="view-mode-toggle__label">View Mode</label>
                <Toggle
                  id="view-mode-toggle"
                  labelA="Compact List"
                  labelB="Timeline"
                  toggled={isTimelineView}
                  onToggle={(checked) => setIsTimelineView(checked)}
                />
              </div>
            </Column>
          </Grid>
        </Tile>
      </Column>

      {/* Section 3: Timeline / List View */}
      <Column lg={16} md={8} sm={4} className="experience-page__content">
        <div className="experience-page__results-header">
          <h2 className="experience-page__results-title">
            {filteredExperiences.length} Experience
            {filteredExperiences.length !== 1 ? 's' : ''} Found
          </h2>
        </div>

        {filteredExperiences.length === 0 ? (
          <div className="experience-page__no-results">
            <p>No experiences found matching your search criteria.</p>
            <Button
              kind="tertiary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocationType('all');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div
            className={`experience-container ${
              isTimelineView ? 'experience-container--timeline' : 'experience-container--list'
            }`}
          >
            {filteredExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-item ${
                  exp.employmentType === 'Career Break'
                    ? 'experience-item--career-break'
                    : ''
                }`}
              >
                {isTimelineView && (
                  <div className="experience-item__timeline-node">
                    <div className="experience-item__timeline-dot"></div>
                    {index < filteredExperiences.length - 1 && (
                      <div className="experience-item__timeline-line"></div>
                    )}
                  </div>
                )}

                <Tile className="experience-card">
                  {/* Header Row */}
                  <div className="experience-card__header">
                    <div className="experience-card__avatar">
                      {getCompanyInitials(exp.company)}
                    </div>
                    <div className="experience-card__header-content">
                      <h3 className="experience-card__role">{exp.role}</h3>
                      <p className="experience-card__company">{exp.company}</p>
                    </div>
                    <div className="experience-card__header-meta">
                      <div className="experience-card__date-range">
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </div>
                      <div className="experience-card__duration">
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </div>
                    </div>
                  </div>

                  {/* Subheader Row */}
                  <div className="experience-card__subheader">
                    <div className="experience-card__location">
                      <Location size={16} />
                      <span>
                        {exp.location} · {exp.locationType}
                      </span>
                    </div>
                    <div className="experience-card__tags">
                      <Tag type={getEmploymentTypeColor(exp.employmentType)} size="sm">
                        {exp.employmentType}
                      </Tag>
                      {exp.category.map((cat, idx) => (
                        <Tag key={idx} type={getCategoryColor(cat)} size="sm">
                          {cat}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="experience-card__body">
                    <p className="experience-card__summary">{exp.summary}</p>

                    <div className="experience-card__responsibilities">
                      <h4 className="experience-card__section-title">
                        Key Responsibilities:
                      </h4>
                      <ul className="experience-card__bullet-list">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx}>
                            <CheckmarkFilled size={16} className="bullet-icon" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="experience-card__achievements">
                        <h4 className="experience-card__section-title">Key Achievements:</h4>
                        <ul className="experience-card__bullet-list">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>
                              <ArrowRight size={16} className="bullet-icon" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Skills Section */}
                  <div className="experience-card__skills">
                    <h4 className="experience-card__section-title">Technologies & Skills:</h4>
                    <div className="experience-card__skills-list">
                      {exp.skills.map((skill, idx) => (
                        <Tag key={idx} type="cool-gray" size="sm">
                          {skill}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  {/* Links Section */}
                  {exp.links && exp.links.length > 0 && (
                    <div className="experience-card__links">
                      {exp.links.map((link, idx) => (
                        <Button
                          key={idx}
                          kind="ghost"
                          size="sm"
                          renderIcon={Launch}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          as="a"
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </Tile>
              </div>
            ))}
          </div>
        )}
      </Column>
    </Grid>
  );
};

export default ExperiencePage;
