import React from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/layout/Hero';
import FeatureGrid from '@site/src/components/layout/FeatureGrid';
import ArchitectureSection from '@site/src/components/layout/ArchitectureSection';
import { SEO_CONFIG } from '@site/src/config/content/homepage';


/**
 * Homepage Component
 * Clean, component-based architecture using our design system
 */
export default function Home() {
  return (
    <Layout
      title={SEO_CONFIG.title}
      description={SEO_CONFIG.description}
    >
      <Hero />
      <main>
        <FeatureGrid />
        <ArchitectureSection />
      </main>
    </Layout>
  );
}