import React from "react";
import styles from "./Button.module.scss";

export default function Button({ variant, children }) {
  const classNames = [styles.Button, styles[variant]].filter(Boolean).join(" ");

  return <button className={classNames}>{children || "Button"}</button>;
}
