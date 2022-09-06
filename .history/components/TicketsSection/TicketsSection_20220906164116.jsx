import React from 'react';
import { Card } from '../ComponentIndex';
import styles from './TicketsSection.module.scss';

export default function TicketsSection({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <Card color="pink" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="UI/UX" sub_topic="Figma & Design Fundamentals"  />
          <Card color="green" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="UI/UX" sub_topic="Figma & Design Fundamentals"  />
        </div>
        <div className={styles.row}>
        <Card color="purple" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="UI/UX" sub_topic="Figma & Design Fundamentals"  />
          <Card color="orange" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="UI/UX" sub_topic="Figma & Design Fundamentals"  />
        </div>
      </div>
    </div>
  )
}
