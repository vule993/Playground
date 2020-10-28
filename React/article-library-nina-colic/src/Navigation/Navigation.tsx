import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { Form, Col, Row } from 'react-bootstrap';

const Navigation: React.FC = () => (
  <div className={styles.Navigation}>

    <div id={styles.navigationMenu}>
      <ul>
        <li>
          <Link to='/'>Članci</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </div>

    <Form.Group className={styles.search} as={Row} controlId="searchBox">
    <Col sm="12">
      <Form.Control className={styles.searchbar} type="password" placeholder="Pretraži..." />
    </Col>
  </Form.Group>


  </div>
);

export default Navigation;
