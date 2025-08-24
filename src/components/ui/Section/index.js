import React from 'react';
import clsx from 'clsx';
import styles from '/src/styles/components/sections.module.css';

/**
 * Reusable Section Component
 * Provides consistent spacing, backgrounds, and layout patterns
 */

const SECTION_BACKGROUNDS = {
  default: 'backgroundDefault',
  dark: 'backgroundDark',
  light: 'backgroundLight',
  primary: 'backgroundPrimary'
};

const SECTION_PADDING = {
  none: 'paddingNone',
  small: 'paddingSmall',
  default: 'paddingDefault',
  large: 'paddingLarge'
};

export default function Section({ 
  background = 'default',
  padding = 'default',
  gridPattern = false,
  className,
  children,
  ...props 
}) {
  const sectionClasses = clsx(
    styles.section,
    styles[SECTION_BACKGROUNDS[background]] || styles.backgroundDefault,
    styles[SECTION_PADDING[padding]] || styles.paddingDefault,
    gridPattern && styles.gridPattern,
    className
  );

  return (
    <section className={sectionClasses} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

// Hero section variant
export function HeroSection({ 
  title,
  subtitle,
  description,
  children,
  className,
  ...props 
}) {
  return (
    <Section 
      background="dark" 
      padding="large"
      className={clsx(styles.hero, className)}
      {...props}
    >
      <div className={styles.heroContent}>
        {title && <h1 className={clsx('hero__title', styles.heroTitle)}>{title}</h1>}
        {subtitle && <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{subtitle}</p>}
        {description && <p className={styles.heroDescription}>{description}</p>}
        {children}
      </div>
    </Section>
  );
}

// Features section variant
export function FeatureSection({ children, className, ...props }) {
  return (
    <Section 
      background="default"
      padding="default"
      className={clsx(styles.features, className)}
      {...props}
    >
      {children}
    </Section>
  );
}