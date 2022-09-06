import Link from 'next/link';
import React from 'react';
import styles from './Card.module.scss';

export default function Card({ type, date, day, dev_type, main_topic, link }) {

  return (
    // <Link href={link} passHref={true}>
    //   <div className={[styles["card_"], styles[color]].join(" ")}>
    //     <div className={styles.card__header}>
    //       <div clasSName={styles.left}>{date}</div>
    //       <div clasSName={styles.right}>&nbsp;//&nbsp;{day}</div>
    //     </div>
    //     <div className={styles.topics}>
    //       <div className={styles.main_topic}>
    //         {main_topic}
    //       </div>
    //       <div className={styles.sub_topic}>
    //         {sub_topic}
    //       </div>
    //     </div>
    //     <div className={styles.get_tickets}>
    //       GET TICKETS HERE
    //     </div>
    //   </div>
    // </Link>
    // <>
    // <div className={styles["card"]}>
    //   <div className={[styles["card__"], styles["dark"]].join(" ")}>
    //     light
    //   </div>
    // </div>
    // <div className={styles.card}>
    //   <div className={styles.card__dark}>
    //     dark
    //   </div>
    // </div>
    // </>

    <Link
     href={link} passHref={true}>
      <div className={[styles["card"], styles[`card--${type}`]].join(" ")}>
        <div className={styles["card__header"]}>
          <div className={styles["card__header-date"]}>
            {date}
          </div>
          <div className={[styles["card__header-day"], styles[`card__header-day--${type}`]].join(" ")}>
            {day}
          </div>
        </div>
        <div className={styles["card__topic"]}>
          <div className={styles["card__topic-devtype"]}>
            {dev_type}
          </div>
          <div className={styles["card__topic-"]}>
            {main_topic}
          </div>
        </div>
        <div className={styles["card__footer"]}>
        GET TICKETS HERE ->
        </div>
      </div>
    </Link>
    )
}
