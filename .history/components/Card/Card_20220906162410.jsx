import React from 'react';
import styles from './Card.module.scss';

export default function Card({ color, date, day, main_topic, sub_topic }) {
  const classname = "card_" + color;
  return (
    <div className={styles[classname]}>
    </div>
  )
}
