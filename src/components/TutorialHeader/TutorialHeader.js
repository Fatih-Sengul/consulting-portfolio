'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

import Link from 'next/link';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
        </Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <Link href="/repos" passHref legacyBehavior>
            <HeaderMenuItem>Repositories</HeaderMenuItem>
          </Link>
          <Link href="/publications" passHref legacyBehavior>
            <HeaderMenuItem>Publications</HeaderMenuItem>
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            <HeaderMenuItem>Projects</HeaderMenuItem>
          </Link>
          <Link href="/skills" passHref legacyBehavior>
            <HeaderMenuItem>Skills</HeaderMenuItem>
<<<<<<< HEAD
          </Link>
=======

>>>>>>> 46d8ff2701f9ec0f81ebdac8625c03256ca7e49f
          <Link href="/experience" passHref legacyBehavior>
            <HeaderMenuItem>Experience</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem>Repositories</HeaderMenuItem>
              </Link>
              <Link href="/projects" passHref legacyBehavior>
                <HeaderMenuItem>Projects</HeaderMenuItem>
              </Link>
              <Link href="/skills" passHref legacyBehavior>
                <HeaderMenuItem>Skills</HeaderMenuItem>
<<<<<<< HEAD
              </Link>
=======

>>>>>>> 46d8ff2701f9ec0f81ebdac8625c03256ca7e49f
              <Link href="/experience" passHref legacyBehavior>
                <HeaderMenuItem>Experience</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
            className="action-icons"
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
            className="action-icons"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
