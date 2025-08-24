import React from 'react';
import Link from '@docusaurus/Link';
import { FeatureSection } from '@site/src/components/ui/Section';
import { ARCHITECTURE_SECTION_CONFIG } from '@site/src/config/content/features';
import styles from './ArchitectureSection.module.css';

/**
 * Architecture Section Component
 * Highlights UML Layers and architecture patterns
 */
export default function ArchitectureSection() {
  const { title, description, link } = ARCHITECTURE_SECTION_CONFIG;

  return (
    <FeatureSection>
      <div className="row">
        <div className="col col--12">
          <div className={styles.architectureContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>
              <Link to={link.to} className={styles.architectureLink}>
                <strong>{link.text}</strong>
              </Link>
              {' — '}
              {description}
            </p>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}