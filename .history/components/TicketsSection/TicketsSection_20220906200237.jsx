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
          <Card type="uiux" date="D-1: SEP 27, 2022" day="Tuesday" dev_type="<UI/UX />" main_topic="Figma & Design Fundamentals" link="https://fonts.google.com/knowledge" />
          <Card type="htmlsass" date="D-2: SEP 30, 2022" day="Friday" dev_type="<FRONT-END />" main_topic="HTML & Sass Intro to Javascript-React" link="https://fonts.google.com/knowledge" />
        </div>
        <div className={styles.row}>
          <Card type="nextstorybook" date="D-3: OCT 1, 2022" day="Saturday" dev_type="<FRONT-END />" main_topic="intro to nextjs + storybook" link="https://fonts.google.com/knowledge" />
          <Card type="expressgithub" date="D-4: OCT 7, 2022" day="Friday" dev_type="<BACK-END />" main_topic="Restful expressjs github desktop crash course" link="https://fonts.google.com/knowledge" />
        </div>
      </div>
    </div>
  )
}
