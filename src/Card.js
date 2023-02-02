import React from "react";
import styles from "./Card.module.css"

const Card = () => {
  return(
    <div className={styles.all}>
      <div className={styles.card}>
        <div className={styles.im}>
          <img src="" alt="im" />
        </div>
        <div className={styles.text}>Name</div>
        <div><img src="" alt=">"></img></div>
      </div>
    </div>
  )
}

export default Card;