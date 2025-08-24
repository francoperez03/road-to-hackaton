import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '/src/styles/components/buttons.module.css';

/**
 * Unified Button Component
 * Supports both internal navigation (Link) and external links (a)
 */

const BUTTON_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  cta: 'cta'
};

const BUTTON_SIZES = {
  small: 'small',
  default: '',
  large: 'large'
};

export default function Button({ 
  variant = 'primary',
  size = 'default',
  to,
  href,
  external = false,
  className,
  children,
  ...props 
}) {
  const buttonClasses = clsx(
    styles.button,
    styles[BUTTON_VARIANTS[variant]] || styles.primary,
    styles[BUTTON_SIZES[size]],
    className
  );

  // External link
  if (href || external) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal navigation
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}

// Button group component for multiple buttons
export function ButtonGroup({ children, className }) {
  return (
    <div className={clsx(styles.buttonGroup, className)}>
      {children}
    </div>
  );
}

// Button container for centered single buttons
export function ButtonContainer({ children, className }) {
  return (
    <div className={clsx(styles.buttonContainer, className)}>
      {children}
    </div>
  );
}