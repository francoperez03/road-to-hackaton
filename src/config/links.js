// 🔧 CONFIGURACIÓN CENTRALIZADA DE ENLACES
// Cambiar aquí para actualizar todos los enlaces del sitio

export const CALENDLY_LINK = 'https://calendly.com/PLACEHOLDER_CALENDLY_LINK?utm_source=hub&utm_medium=link&utm_campaign=aleph2025';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/crypto_dev_1',
  github: 'https://github.com/PLACEHOLDER_USER',
  portfolio: 'https://placeholder-portfolio.dev'
};

// UTM Parameters para tracking
export const UTM_PARAMS = {
  source: 'hub',
  medium: 'link', 
  campaign: 'aleph2025'
};

// Función helper para agregar UTMs a cualquier enlace
export function addUTM(url, medium = 'link') {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}utm_source=${UTM_PARAMS.source}&utm_medium=${medium}&utm_campaign=${UTM_PARAMS.campaign}`;
}