import React from 'react';
import { HeroSection } from '@site/src/components/ui/Section';
import Button, { ButtonGroup, ButtonContainer } from '@site/src/components/ui/Button';
import BookingCTA from '@site/src/components/BookingCTA';
import { HERO_CONFIG } from '@site/src/config/content/homepage';

/**
 * Homepage Hero Component
 * Extracted from main page for better organization
 */
export default function Hero() {
  const { title, subtitle, description, cta, buttons } = HERO_CONFIG;

  return (
    <HeroSection
      title={title}
      subtitle={subtitle}
      description={description}
    >
      {/* CTA Button */}
      <ButtonContainer>
        <BookingCTA text={cta.text} />
      </ButtonContainer>
      
      {/* Navigation Buttons */}
      <ButtonGroup>
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            to={button.to}
            size="large"
          >
            {button.text}
          </Button>
        ))}
      </ButtonGroup>
    </HeroSection>
  );
}