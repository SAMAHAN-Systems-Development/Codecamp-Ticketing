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
          <Card color="pink" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="<UI/UX />" sub_topic="Figma & Design Fundamentals" link="https://fonts.google.com/knowledge" />
          <Card color="green" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="<FRONT-END />" sub_topic="HTML & Sass Intro to Javascript-React" link="https://fonts.google.com/knowledge" />
        </div>
        <div className={styles.row}>
          <Card color="purple" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="<FRONT-END />" sub_topic="intro to nextjs + storybook" link="https://fonts.google.com/knowledge" />
          <Card color="orange" date="D-1: SEP 27, 2022" day="Tuesday" main_topic="<BACK-END />" sub_topic="Restful expressjs github desktop crash course" link="https://fonts.google.com/knowledge" />
        </div>
      </div>
    </div>
  )
}
