# Mentoría ZK · @crypto_dev_1

Hub de recursos para hackathón ZK/Noir/Solidity - sitio estático construido con VitePress.

## Instalación rápida

```bash
npm install
npm run docs:dev
```

El sitio estará disponible en `http://localhost:5173`

## Comandos disponibles

```bash
# Desarrollo local
npm run docs:dev

# Build para producción  
npm run docs:build

# Preview del build
npm run docs:preview
```

## Estructura del proyecto

```
docs/
├── index.md                           # Home page
├── ai-playbook-noir-solidity.md       # AI Playbook con prompts
├── uml-layers.md                      # Diagramas UML y arquitectura
├── connect.md                         # Office hours y contacto
├── docs/                              # Sección de documentación
│   ├── cheatsheet-solidity-2025.md    # Cheatsheet Solidity
│   ├── checklist-pre-demo.md          # Checklist pre-demo
│   ├── gas-90-10.md                   # Optimización gas
│   └── zk-lite-5q.md                  # Decisiones ZK rápidas
└── .vitepress/
    ├── config.ts                      # Configuración VitePress
    └── theme/
        └── custom.css                 # Estilos personalizados
```

## Editar contenido

- Todos los archivos están en formato Markdown
- Los archivos de contenido están en `/docs/`
- La navegación se configura en `/docs/.vitepress/config.ts`
- Los diagramas Mermaid están soportados nativamente

## Deployment

### Vercel

1. Conecta tu repo de GitHub a Vercel
2. Configuración del proyecto:
   - **Build Command**: `npm run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Root Directory**: `./` (dejar vacío o punto)

### GitHub Pages

1. Ve a Settings → Pages en tu repositorio
2. Selecciona "GitHub Actions" como source
3. Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build with VitePress
        run: npm run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Convención de slugs

**IMPORTANTE**: Los siguientes slugs están fijados y NO deben cambiarse:

- `/` → Home  
- `/ai-playbook-noir-solidity` → AI Playbook
- `/docs/cheatsheet-solidity-2025` → Cheatsheet Solidity
- `/docs/checklist-pre-demo` → Checklist Pre-Demo  
- `/docs/gas-90-10` → Gas Optimization
- `/docs/zk-lite-5q` → ZK Decision Guide
- `/uml-layers` → UML Architecture Diagrams
- `/connect` → Office Hours y Contacto

Estos slugs forman parte de la API pública del sitio.

## Personalización

### Actualizar links reales

Reemplaza los placeholders en `/docs/connect.md`:

- `PLACEHOLDER_CALENDLY_LINK` → tu link real de Calendly
- `PLACEHOLDER_PORTFOLIO_LINK` → tu portfolio/home
- `PLACEHOLDER_USER` → tu usuario de GitHub

### Agregar UTM tracking

Todos los links externos importantes ya incluyen UTM parameters:
```
?utm_source=hub&utm_medium=link&utm_campaign=aleph2025
```

### Configurar redes sociales

Actualiza `socialLinks` en `/docs/.vitepress/config.ts` con tus URLs reales.

## Checklist QA (pre-deploy)

- [ ] `npm run docs:build` compila sin errores
- [ ] Todas las páginas cargan correctamente en preview
- [ ] Navegación navbar y sidebar funcionan
- [ ] Diagrama Mermaid en `/uml-layers` renderiza
- [ ] Links externos tienen UTM parameters
- [ ] Títulos H1 únicos en cada página
- [ ] Meta descriptions configuradas
- [ ] Modo oscuro/claro funcional

## Soporte

- **VitePress**: [docs.vitepress.dev](https://vitepress.dev)
- **Mermaid**: [mermaid.js.org](https://mermaid.js.org)
- **Deployment issues**: Verificar que `docs/.vitepress/dist` se genera correctamente

## Licencia

Recursos gratuitos para la comunidad. Si te sirve, compartilo con tu equipo.