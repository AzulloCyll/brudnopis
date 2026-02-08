import React from "react";
import styles from "./Icon.module.scss";

const ICON_PATHS = {
  rocket:
    "M12,2.5L8,7V14.5L6,17.5V19.5L8,19L12,21.5L16,19L18,19.5V17.5L16,14.5V7L12,2.5M12,5L14,7V14L15,15.5V17.5L12,16.5L9,17.5V15.5L10,14V7L12,5M12,9A1,1 0 0,0 11,10A1,1 0 0,0 12,11A1,1 0 0,0 13,10A1,1 0 0,0 12,9M12,12A1,1 0 0,0 11,13A1,1 0 0,0 12,14A1,1 0 0,0 13,13A1,1 0 0,0 12,12Z",
  check: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  close:
    "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  menu: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
};

export default function Icon({ name, size = "medium", color, ...props }) {
  const path = ICON_PATHS[name];

  if (!path) return null;

  const classNames = [styles.IconWrapper, styles[size]]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      viewBox="0 0 24 24"
      className={classNames}
      style={{ fill: color || "currentColor" }}
      {...props}
    >
      <path d={path} />
    </svg>
  );
}
