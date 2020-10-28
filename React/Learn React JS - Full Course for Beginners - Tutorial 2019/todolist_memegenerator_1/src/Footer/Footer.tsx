import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <div className={styles.Footer} data-testid="Footer">
    Footer Component &copy; 2020
  </div>
);

export default Footer;
