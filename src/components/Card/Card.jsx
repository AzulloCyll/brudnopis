import React from "react";
import styles from "./Card.module.scss";

function Card({ children, variant = "medium" }) {
  const classNames = [styles.Card, styles[variant]].filter(Boolean).join(" ");
  return <div className={classNames}>{children}</div>;
}

export default Card;
