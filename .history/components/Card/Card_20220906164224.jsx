import React from 'react';
import styles from './Card.module.scss';

export default function Card({ color, date, day, main_topic, sub_topic }) {
  const classname = "card_" + color;
  return (
    <div className={[styles["card_"], styles[color]].join(" ")}>
      <div className={styles.header}>
        <div clasSName={styles.left}>{date}</div>
        &nbsp;//&nbsp;
        <div clasSName={styles.right}>{day}</div>
      </div>
      <div className={styles.main_topic}>
        {main_topic}
      </div>
    </div>
  )
}
