import React from 'react';

import FooterSection from './FooterSection';
import { FOOTER_SECTIONS } from '../../../utilities/constants';
import './_footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <FooterSection links={FOOTER_SECTIONS[0]} />
      <FooterSection links={FOOTER_SECTIONS[1]} />
      <FooterSection links={FOOTER_SECTIONS[2]} />
    </footer>
  );
};

export default Footer;
