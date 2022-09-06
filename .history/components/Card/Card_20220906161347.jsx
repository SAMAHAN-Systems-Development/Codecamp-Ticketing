import React from 'react';
import styles from './Card.module.scss';

export default function Card({ color, date, day, main_topic, sub_topic }) {
  return (
    <div className={[styles["card"], styles["_pink"]].join(" ")}>
      a
    </div>
  )
}
