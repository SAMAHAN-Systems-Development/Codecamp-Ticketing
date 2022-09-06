import Link from 'next/link';
import React from 'react';
import styles from './Card.module.scss';

export default function Card({ color, date, day, main_topic, sub_topic, link }) {
  const classname = "card_" + color;
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
    <>
    <div className={styles.card}>
      <div className={styles.card__[(color)]}>
        light
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.card__dark}>
        dark
      </div>
    </div>
    </>
  )
}
