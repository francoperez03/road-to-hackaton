import React from 'react';
import clsx from 'clsx';
import { FeatureSection } from '@site/src/components/ui/Section';
import { HOMEPAGE_FEATURES, FEATURE_SECTION_CONFIG } from '@site/src/config/content/features';
import styles from './FeatureGrid.module.css';

/**
 * Feature Card Component
 */
function FeatureCard({ title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <h3>
          <a href={link} className={styles.featureLink}>
            {title}
          </a>
        </h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

/**
 * Feature Grid Component
 * Displays homepage features in a responsive grid
 */
export default function FeatureGrid() {
  return (
    <FeatureSection>
      <div className="row">
        <div className="col col--12">
          <h2 className={styles.sectionTitle}>
            {FEATURE_SECTION_CONFIG.title}
          </h2>
        </div>
      </div>
      <div className="row">
        {HOMEPAGE_FEATURES.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </FeatureSection>
  );
}