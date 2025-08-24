import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import BookingCTA from '@site/src/components/BookingCTA';

function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;
  return (
    <footer
      className={`footer ${
        style === 'dark' ? 'footer--dark' : ''
      }`}>
      <div className="container container-fluid">
        {/* CTA Section */}
        <div className="margin-bottom--lg">
          <BookingCTA />
        </div>
        
        {links && (
          <div className="margin-bottom--lg">
            <FooterLinks links={links} />
          </div>
        )}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{<FooterLogo logo={logo} />}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
export default React.memo(Footer);