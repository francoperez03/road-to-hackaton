# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start
# Serves at http://localhost:3000

# Build for production
npm run build

# Test with Playwright
npm test

# Test with UI
npm run test:ui
```

## Architecture Overview

This is a **Docusaurus-based static documentation site** for hackathon resources focused on ZK/Noir/Solidity development.

### Key Architecture Components:

- **Docusaurus Framework**: React-based static site generator optimized for documentation
- **Configuration**: `docusaurus.config.js` defines site settings, navigation, and theme
- **Content Structure**: 
  - Homepage: `src/pages/index.js` (React component)
  - Standalone pages: `src/pages/*.md`
  - Documentation: `docs/*.md`
- **Styling**: Custom CSS in `src/css/custom.css` with purple theme
- **Diagrams**: Mermaid support enabled for UML diagrams
- **Testing**: Playwright for end-to-end testing

### Content Organization:

```
src/
├── pages/
│   ├── index.js                    # Homepage (React)
│   ├── ai-playbook-noir-solidity.md
│   ├── uml-layers.md
│   └── connect.md
├── components/
│   └── HomepageFeatures/          # Homepage feature cards
└── css/
    └── custom.css                 # Custom styling

docs/                              # Documentation sidebar
├── cheatsheet-solidity-2025.md
├── checklist-pre-demo.md
├── gas-90-10.md
└── zk-lite-5q.md

tests/                             # Playwright tests
├── homepage.spec.js
├── navigation.spec.js
├── content.spec.js
└── responsive.spec.js
```

## Important Constraints

### Fixed URL Slugs
**CRITICAL**: The following URL slugs are part of the public API and must NOT be changed:

- `/` → Home  
- `/ai-playbook-noir-solidity` → AI Playbook
- `/docs/cheatsheet-solidity-2025` → Cheatsheet Solidity
- `/docs/checklist-pre-demo` → Checklist Pre-Demo  
- `/docs/gas-90-10` → Gas Optimization
- `/docs/zk-lite-5q` → ZK Decision Guide
- `/uml-layers` → UML Architecture Diagrams
- `/connect` → Office Hours y Contacto

### Deployment Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `build/`
- **Node.js Version**: 18+ required

## Development Notes

- **Branding**: "Road To Hackathon" - training/coaching focus for ZK hackathons
- **Color scheme**: Aleph Hackathon inspired (Green #00FF88, Dark Blue-Gray #2D3748, White #FFFFFF)
- **Design**: Grid-inspired layout with consistent color variables
- **No gradients**: Flat color design only
- Site uses Spanish (es) as primary language
- Dark mode is default but toggleable
- Mermaid diagrams are supported natively
- External links should include UTM parameters: `?utm_source=hub&utm_medium=link&utm_campaign=aleph2025`
- MDX parsing requires escaping `<` characters in text (use `\<`)
- Homepage is a React component for better landing page capabilities
- All documentation pages have automatic table of contents
- Mobile-responsive design with tested breakpoints

## Calendly Link Management

**⚠️ IMPORTANT**: To change the Calendly link site-wide:

1. Edit `src/config/links.js`
2. Update the `CALENDLY_LINK` constant
3. This will automatically update:
   - Footer CTA on all pages
   - Connect page CTAs
   - Any component using BookingCTA

## Components

- `BookingCTA`: Centralized Calendly booking component
- Custom footer with integrated CTA
- Responsive design components

## Testing

Playwright tests cover:
- Homepage functionality and content
- Navigation between all pages
- Content rendering on all pages
- Responsive design across device sizes
- Mermaid diagram rendering