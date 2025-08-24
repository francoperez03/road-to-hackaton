/**
 * Homepage Content Configuration
 * Centralized content for the main landing page
 */

export const HERO_CONFIG = {
  title: 'Road To Hackathon',
  subtitle: 'Tu entrenamiento completo para dominar hackathons ZK/Noir/Solidity',
  description: `Desde arquitecturas probadas hasta prompts de IA optimizados. 
    El roadmap definitivo para construir proyectos ganadores en hackathons ZK, 
    con técnicas usadas por equipos que han ganado en Aleph, ETHGlobal y más.`,
  cta: {
    text: 'RESERVAR COACHING ESTRATÉGICO',
    variant: 'cta'
  },
  buttons: [
    {
      text: 'COMENZAR ENTRENAMIENTO',
      to: '/ai-playbook-noir-solidity',
      variant: 'secondary'
    },
    {
      text: 'RECURSOS',
      to: '/docs/cheatsheet-solidity-2025',
      variant: 'secondary'
    }
  ]
};

export const SEO_CONFIG = {
  title: 'Road To Hackathon',
  description: 'Tu entrenamiento completo para dominar hackathons ZK/Noir/Solidity'
};