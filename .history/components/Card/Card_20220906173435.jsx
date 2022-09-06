import Link from 'next/link';
import React from 'react';
import './Card.module.scss';

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
    <div className="card card--light">
      light
    </div>
    <div className="card card--dark">
      dark
    </div>
    </>
  )
}
