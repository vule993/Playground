import React from 'react';
import styles from './Article.module.css';

interface ArticleProps{
  width?: number,
  height?: number,
  article?: null
}
const Article: React.FC<ArticleProps> = (props: ArticleProps = {width:100,height:100, article : null}) => (
  <div className={styles.Article} style={{ width: props.width+'%', height: props.height+'px'}}>
    Article Component
  </div>
);

export default Article;
