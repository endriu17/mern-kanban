import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; endriu17 &middot; WebDevPlus</p>
      <p><a href="https://github.com/endriu17" target="_Blank">Github repo</a></p>
    </div>
  );
}

export default Footer;
