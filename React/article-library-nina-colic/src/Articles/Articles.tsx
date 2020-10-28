import React from 'react';
import styles from './Articles.module.css';
import Article from "./Article/Article";
import $ from "jquery";
const Articles: React.FC = () => {

  let loadSource = (source:string) => {
    $.ajax({
        
        url: source
    })
    .done(function(html) {
        //$("#vid").append(html); // append the html to the element with the ID 'vid'
      console.log(html);
    });
  }
  loadSource("https://www.danas.rs/kultura/djura-jaksic-portret-razocaranog-romantika-i-dozivotnog-rodoljuba/");
  return (
    <div className={styles.Articles}>

      <div id={styles.banner}>
        <Article article={null} width={49.6} />
      </div>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
  </div>
  )
}


export default Articles;
