'use client';

import {
  Grid,
  Column,
  Button,
  Tag,
  Tile,
  Link,
  AspectRatio,
} from '@carbon/react';
import {
  ArrowRight,
  Launch,
  Portfolio,
  Education,
  UserCertification,
  Globe,
} from '@carbon/icons-react';
import {
  Code,
  DataProcessing,
  DeliverInsights,
} from '@carbon/pictograms-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Grid className="home-page" fullWidth>
      {/* SECTION A - HERO / INTRO */}
      <Column lg={16} md={8} sm={4} className="home-page__hero">
        <Grid>
          <Column lg={8} md={8} sm={4} className="home-page__hero-content">
            <div className="home-page__hero-label">
              <Tag type="blue" size="sm">
                Getting started
              </Tag>
            </div>
            <h1 className="home-page__hero-heading">
              Design, build &amp; optimize with SAP, Java and AI.
            </h1>
            <p className="home-page__hero-subheading">
              I'm Fatih Şengül, an SAP ABAP Consultant and Full-Stack Engineer
              working in large-scale enterprise environments. I combine SAP,
              Java, and machine learning to build robust systems for
              manufacturing, finance, and cloud-native platforms.
            </p>
            <div className="home-page__hero-tags">
              <Tag type="blue">SAP ABAP Consultant</Tag>
              <Tag type="cyan">Full-Stack / Java</Tag>
              <Tag type="teal">AI &amp; ML Researcher</Tag>
              <Tag type="purple">Intel oneAPI Ambassador</Tag>
              <Tag type="magenta">IBM Z Ambassador</Tag>
            </div>
            <div className="home-page__hero-buttons">
              <Button
                kind="primary"
                renderIcon={ArrowRight}
                href="/experience"
                as="a"
              >
                View Experience
              </Button>
              <Button
                kind="secondary"
                renderIcon={ArrowRight}
                href="/publications"
                as="a"
              >
                View Publications
              </Button>
            </div>
          </Column>
          <Column lg={8} md={8} sm={4} className="home-page__hero-visual">
            <div className="home-page__hero-illustration">
              <AspectRatio ratio="1x1">
                <div className="home-page__hero-illustration-content">
                  <div className="home-page__portrait-wrapper">
                    <Image
                      src="/profile.svg"
                      alt="Portrait of Fatih Şengül"
                      fill
                      priority
                      sizes="(max-width: 1056px) 80vw, 640px"
                      className="home-page__portrait"
                    />
                  </div>
                  <Tile className="home-page__stats-overlay">
                    <div className="home-page__stats-item">
                      <span className="home-page__stats-number">6+</span>
                      <span className="home-page__stats-label">
                        years in software
                      </span>
                    </div>
                    <div className="home-page__stats-item">
                      <span className="home-page__stats-number">3+</span>
                      <span className="home-page__stats-label">
                        years in SAP ABAP
                      </span>
                    </div>
                    <div className="home-page__stats-item">
                      <span className="home-page__stats-number">5+</span>
                      <span className="home-page__stats-label">
                        publications
                      </span>
                    </div>
                  </Tile>
                </div>
              </AspectRatio>
            </div>
          </Column>
        </Grid>
      </Column>

      {/* SECTION B - KEY METRICS STRIP */}
      <Column lg={16} md={8} sm={4} className="home-page__metrics">
        <Grid>
          <Column lg={4} md={4} sm={4}>
            <Tile className="home-page__metric-tile">
              <Portfolio size={32} className="home-page__metric-icon" />
              <div className="home-page__metric-number">6+ years</div>
              <div className="home-page__metric-caption">
                Professional software experience
              </div>
            </Tile>
          </Column>
          <Column lg={4} md={4} sm={4}>
            <Tile className="home-page__metric-tile">
              <Education size={32} className="home-page__metric-icon" />
              <div className="home-page__metric-number">3+ years</div>
              <div className="home-page__metric-caption">
                SAP ABAP &amp; enterprise consulting
              </div>
            </Tile>
          </Column>
          <Column lg={4} md={4} sm={4}>
            <Tile className="home-page__metric-tile">
              <UserCertification size={32} className="home-page__metric-icon" />
              <div className="home-page__metric-number">5+</div>
              <div className="home-page__metric-caption">
                Peer-reviewed publications &amp; conference papers
              </div>
            </Tile>
          </Column>
          <Column lg={4} md={4} sm={4}>
            <Tile className="home-page__metric-tile">
              <Globe size={32} className="home-page__metric-icon" />
              <div className="home-page__metric-number">2 programs</div>
              <div className="home-page__metric-caption">
                Global ambassador roles (Intel oneAPI, IBM Z)
              </div>
            </Tile>
          </Column>
        </Grid>
      </Column>

      {/* SECTION C - WHAT I DO - THREE PERSONA COLUMNS */}
      <Column lg={16} md={8} sm={4} className="home-page__personas">
        <h2 className="home-page__section-heading">What I Do</h2>
        <Grid>
          <Column lg={5} md={8} sm={4}>
            <Tile className="home-page__persona-tile">
              <Code size={48} className="home-page__persona-icon" />
              <h3 className="home-page__persona-title">
                SAP ABAP &amp; Enterprise Systems
              </h3>
              <p className="home-page__persona-description">
                I design and develop custom ABAP solutions for S/4HANA and ECC
                systems, with a focus on production planning, quality
                management, and logistics in large integrated textile factories.
              </p>
              <ul className="home-page__persona-list">
                <li>ALV reports, custom transactions, enhancements</li>
                <li>PP, MM, SD, QM integration</li>
                <li>Performance optimization &amp; clean core mindset</li>
              </ul>
              <Link
                href="/experience"
                className="home-page__persona-link"
                renderIcon={ArrowRight}
              >
                See SAP experience
              </Link>
            </Tile>
          </Column>
          <Column lg={5} md={8} sm={4}>
            <Tile className="home-page__persona-tile">
              <DataProcessing size={48} className="home-page__persona-icon" />
              <h3 className="home-page__persona-title">
                Full-Stack &amp; Java Engineering
              </h3>
              <p className="home-page__persona-description">
                I have full-stack experience building banking and financial
                applications with Spring, Hibernate, JSF, and Oracle, including
                maintenance of monolithic architectures and PL/SQL heavy
                backends.
              </p>
              <ul className="home-page__persona-list">
                <li>Spring Boot, Hibernate, PL/SQL</li>
                <li>JSF / PrimeFaces UI</li>
                <li>Agile delivery in finance domain</li>
              </ul>
              <Link
                href="/projects"
                className="home-page__persona-link"
                renderIcon={ArrowRight}
              >
                Browse projects
              </Link>
            </Tile>
          </Column>
          <Column lg={5} md={8} sm={4}>
            <Tile className="home-page__persona-tile">
              <DeliverInsights size={48} className="home-page__persona-icon" />
              <h3 className="home-page__persona-title">
                AI Research &amp; Ambassador Programs
              </h3>
              <p className="home-page__persona-description">
                I publish research on deep learning, computer vision, and
                oneAPI-based acceleration while representing Intel and IBM Z as
                an ambassador, organizing workshops and community events.
              </p>
              <ul className="home-page__persona-list">
                <li>ML/DL models with TensorFlow, PyTorch, oneAPI</li>
                <li>Computer vision for defect / object detection</li>
                <li>Intel oneAPI &amp; IBM Z community building</li>
              </ul>
              <Link
                href="/publications"
                className="home-page__persona-link"
                renderIcon={ArrowRight}
              >
                View publications
              </Link>
            </Tile>
          </Column>
        </Grid>
      </Column>

      {/* SECTION D - FEATURED PROJECTS / HIGHLIGHTS */}
      <Column lg={16} md={8} sm={4} className="home-page__featured">
        <h2 className="home-page__section-heading">Featured Work</h2>
        <Grid>
          <Column lg={8} md={4} sm={4}>
            <Tile className="home-page__featured-tile">
              <h3 className="home-page__featured-title">
                SAP Integrated Textile Production Reporting
              </h3>
              <p className="home-page__featured-description">
                ALV reporting and PP optimization at Menderes Tekstil, improving
                production planning visibility and efficiency across integrated
                textile manufacturing operations.
              </p>
              <div className="home-page__featured-tags">
                <Tag type="blue" size="sm">
                  SAP ABAP
                </Tag>
                <Tag type="blue" size="sm">
                  PP
                </Tag>
                <Tag type="blue" size="sm">
                  S/4HANA
                </Tag>
              </div>
              <Button
                kind="ghost"
                renderIcon={ArrowRight}
                href="/experience"
                as="a"
                className="home-page__featured-button"
              >
                Learn more
              </Button>
            </Tile>
          </Column>
          <Column lg={8} md={4} sm={4}>
            <Tile className="home-page__featured-tile">
              <h3 className="home-page__featured-title">
                Dynamic Apex Optimization for Motorsport Telemetry
              </h3>
              <p className="home-page__featured-description">
                Genetic algorithm optimization on racing data to identify
                optimal apex points and racing lines, leveraging advanced data
                science techniques.
              </p>
              <div className="home-page__featured-tags">
                <Tag type="teal" size="sm">
                  Python
                </Tag>
                <Tag type="teal" size="sm">
                  GA
                </Tag>
                <Tag type="teal" size="sm">
                  Data Science
                </Tag>
              </div>
              <Button
                kind="ghost"
                renderIcon={ArrowRight}
                href="/projects"
                as="a"
                className="home-page__featured-button"
              >
                Learn more
              </Button>
            </Tile>
          </Column>
          <Column lg={8} md={4} sm={4}>
            <Tile className="home-page__featured-tile">
              <h3 className="home-page__featured-title">
                YOLO-based Military Aircraft Detection
              </h3>
              <p className="home-page__featured-description">
                Deep learning computer vision research paper implementing
                state-of-the-art object detection techniques for military
                aircraft identification.
              </p>
              <div className="home-page__featured-tags">
                <Tag type="purple" size="sm">
                  Computer Vision
                </Tag>
                <Tag type="purple" size="sm">
                  YOLOv7/v8
                </Tag>
                <Tag type="purple" size="sm">
                  Deep Learning
                </Tag>
              </div>
              <Button
                kind="ghost"
                renderIcon={ArrowRight}
                href="/publications"
                as="a"
                className="home-page__featured-button"
              >
                Learn more
              </Button>
            </Tile>
          </Column>
        </Grid>
      </Column>

      {/* SECTION E - CALL TO ACTION / CONTACT */}
      <Column lg={16} md={8} sm={4} className="home-page__cta">
        <Grid>
          <Column lg={10} md={6} sm={4}>
            <h2 className="home-page__cta-heading">Let's build something.</h2>
            <p className="home-page__cta-text">
              I'm open to opportunities in enterprise SAP development, Java
              backends, and AI-driven optimization projects. Let's collaborate
              on building innovative solutions for complex business challenges.
            </p>
            <div className="home-page__cta-buttons">
              <Button
                kind="primary"
                renderIcon={ArrowRight}
                href="/downloads/cv.pdf"
                as="a"
              >
                View full CV (PDF)
              </Button>
              <Button
                kind="tertiary"
                renderIcon={Launch}
                href="https://www.linkedin.com/in/fatih-sengul"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact via LinkedIn
              </Button>
            </div>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}
