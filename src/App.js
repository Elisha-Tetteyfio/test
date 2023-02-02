import React from "react";
import Card from "./Card";
import styles from "./App.module.css"

const App = () => {
  return(
    <div class={styles.bar}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App;