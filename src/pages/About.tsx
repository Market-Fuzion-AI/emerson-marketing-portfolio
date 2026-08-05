import React from 'react';
import { About as AboutSection } from '../components/About';
import { MarketingToolkit } from '../components/MarketingToolkit';

export function About() {
  return (
    <div className="pt-20">
      <AboutSection />
      <MarketingToolkit />
    </div>
  );
}
