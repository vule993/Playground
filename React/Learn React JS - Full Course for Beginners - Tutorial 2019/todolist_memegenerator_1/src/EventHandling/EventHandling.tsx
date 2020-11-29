import React from 'react';
import styles from './EventHandling.module.css';
import slika from '../logo.svg';

const EventHandling: React.FC = () => (
  <div className={styles.EventHandling} data-testid="EventHandling">
    <h1>EventHandling Component</h1>
    <hr></hr>
    <img onMouseOver={()=>console.log("Mis iznad slike!")} src={slika} style={{width: '100px'}} alt="neka glupa slika nbtn"></img>
    <button onClick={()=>console.log("Kliknut sam")} >Klikni me</button>
  </div>
);

export default EventHandling;
