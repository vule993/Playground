import React from 'react';
import styles from './Identity.module.css';

import facebook from '../img/site/facebook.png';
import instagram from '../img/site/instagram.png';
import linkedin from '../img/site/linkedin.png';

const Identity: React.FC = () => (
  <div className={styles.Identity}>
    <div className={styles.socialContainer}>
      <img className={styles.socialLogo} alt="facebook" src={facebook} />
      <img className={styles.socialLogo} alt="facebook" src={linkedin} />   
      <img className={styles.socialLogo} alt="facebook" src={instagram} />     
    </div>
  </div>
);

export default Identity;
