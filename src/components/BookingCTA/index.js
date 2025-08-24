import React from 'react';
import { CALENDLY_LINK } from '@site/src/config/links';
import Button, { ButtonContainer } from '@site/src/components/ui/Button';

/**
 * Booking CTA Component
 * Refactored to use unified Button component
 */
export default function BookingCTA({ 
  text = 'RESERVAR COACHING 1:1',
  variant = 'cta',
  containerStyle = true 
}) {
  const ButtonComponent = (
    <Button
      variant={variant}
      href={CALENDLY_LINK}
      external={true}
    >
      {text}
    </Button>
  );

  return containerStyle ? (
    <ButtonContainer>
      {ButtonComponent}
    </ButtonContainer>
  ) : (
    ButtonComponent
  );
}

// Exportar también el enlace para uso directo si es necesario
export { CALENDLY_LINK };