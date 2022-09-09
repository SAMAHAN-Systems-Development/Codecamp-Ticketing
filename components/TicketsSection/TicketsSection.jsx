import React from 'react';
import { Card } from '../ComponentIndex';
import styles from './TicketsSection.module.scss';

export default function TicketsSection1({ title }) {
  return (
    <div className={styles["section"]}>
      <div className={styles["section__header"]}>
        {title}
      </div>
      <div className={styles["section__content"]}>
        <div className={styles["section__content-row"]}>
          <Card 
            type="uiux" 
            date="D-1: SEP. 27, 2022" 
            day="Tuesday" 
            time="3-5PM"
            dev_type="<UI/UX />" 
            main_topic={["Figma & Design Fundamentals"]} 
            link="https://docs.google.com/forms/d/e/1FAIpQLSeCS8uGRca1lc1EJQ5km6ou6S__nF1lZtYLc7y7P_AsHdbf2Q/viewform" />
          <Card 
            type="htmlsass" 
            date="D-2: SEP. 30, 2022" 
            day="Friday" 
            time="3-5PM"
            dev_type="<FRONT-END />" 
            main_topic={["HTML & Sass", "Intro to Javascript-React"]} 
            link="https://docs.google.com/forms/d/e/1FAIpQLSdwDceQ6UmmE15t9Wattl78FIdOto2EKLebFihSfGFRq4ldaQ/viewform" />
        </div>
        <div className={styles["section__content-row"]}>
          <Card 
            type="nextstorybook" 
            date="D-3: OCT. 1, 2022" 
            day="Saturday" 
            time="3-5PM"
            dev_type="<FRONT-END />" 
            main_topic={["intro to nextjs + storybook"]} 
            link="https://docs.google.com/forms/d/e/1FAIpQLSegXXjvOHOHInRo480ve3GpK5ys_y1-mDPROOhvhoRCy1P3uA/viewform" />
          <Card
            type="expressgithub"
            date="D-4: OCT. 7, 2022"
            day="Friday"
            time="3-5PM"
            dev_type="<BACK-END/>"
            main_topic={["Restfulexpressjs", "github desktop crash course"]} 
            link="https://docs.google.com/forms/d/e/1FAIpQLSd5RJj6NkQ3tzeA9OZcCiS0CTQ_0q7KN2XVhHfbqPB8E4dsXQ/viewform" />
        </div>
      </div>
    </div>
  )
}

