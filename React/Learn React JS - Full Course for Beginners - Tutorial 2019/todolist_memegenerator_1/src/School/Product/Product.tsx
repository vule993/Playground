import React from 'react';
import styles from './Product.module.css';

interface ProductProps{
  id?: number;
  name?: string;
  price?: number;
  description?: string;
}
const Product: React.FC<ProductProps> = (props: ProductProps = { id: 0, name: "", price: 0, description: "" }) => {  

  return (
    <div className={styles.Product} data-testid="Product">
      <div key={props.id}>
        <div className={styles.crucialData}>
          <div>Name: {props.name}</div>
          <div>Price: {props.price}</div>
        </div>
        <div>
          Description: {props.description}
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
export default Product;
