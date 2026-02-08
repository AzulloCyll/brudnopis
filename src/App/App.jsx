import React, { useState } from "react";
import { Button, Card, Icon } from "../components";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Moja Aplikacja React</h1>

      <Card variant="large">
        <h3 className={styles.H3}>Statystyki</h3>
        <p>Tutaj możesz umieścić dowolną treść wewnątrz swojej karty!</p>
        <div className={styles.ButtonContainer}>
          <Button>
            <Icon name="check" size="small" />
            Zatwierdź
          </Button>
          <Button variant="secondary">
            <Icon name="menu" size="small" />
            Opcje
          </Button>
          <Button variant="danger">
            <Icon name="close" size="small" />
            Usuń
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
