/**
 * Homepage Features Configuration
 * Centralized feature data for easy maintenance
 */

export const HOMEPAGE_FEATURES = [
  {
    id: 'ai-training',
    title: 'Entrenamiento IA',
    link: '/ai-playbook-noir-solidity',
    description: 'Prompts y estrategias probadas para construir proyectos ganadores con IA'
  },
  {
    id: 'resources-arsenal',
    title: 'Arsenal de Recursos',
    link: '/docs/cheatsheet-solidity-2025',
    description: 'Cheatsheets, checklists y patrones para hackathons de alta velocidad'
  },
  {
    id: 'coaching-1on1',
    title: 'Coaching 1:1',
    link: '/connect',
    description: 'Sesiones intensivas para destrabar y acelerar tu proyecto'
  }
];

export const FEATURE_SECTION_CONFIG = {
  title: 'Tu Kit de Supervivencia para Hackathons',
  gridColumns: 3
};

export const ARCHITECTURE_SECTION_CONFIG = {
  title: 'Arquitectura y Patrones',
  description: 'Diagramas y arquitecturas ganadoras para hackathons ZK',
  link: {
    to: '/uml-layers',
    text: 'UML Layers'
  }
};