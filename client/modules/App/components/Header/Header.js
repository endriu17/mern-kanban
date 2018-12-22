import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );

  return (
    <div className={styles.header}>
      <h2>Kanban App</h2>
      {context.router.isActive('/', true)}
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

// Header.propTypes = {
//   // toggleAddPost: PropTypes.func.isRequired,
//   // switchLanguage: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default Header;
