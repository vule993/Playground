import React from 'react';
import styles from './School.module.css';
import products from '../Data/VSchoolProducts';
import Product from './Product/Product';
/*
Given a list of products (as an array of objects, as seen in VSchoolProducts.js) render a <Product> component (which you will 
also need to create) for each product in the list.

Make sure to use the array's map() method to create these components, and don't forget to pass a key prop to it  to avoid the warning.
*/

const School: React.FC = () => {
  let productComponents = products.map(product => (
    <Product key={product.id} name={product.name} price={product.price} description={product.description}></Product>
  ));
  return (<div className={styles.School} data-testid="School">
    <h1>School component</h1>
    <hr></hr>
    {productComponents}
  </div>)
};

export default School;
