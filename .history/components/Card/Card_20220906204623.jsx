import Link from 'next/link';
import React from 'react';
import styles from './Card.module.scss';

export default function Card({ type, date, day, dev_type, main_topic, link }) {

  return (
    <Link
     href={link} passHref={true}>
      <div className={[styles["card"], styles[`card--${type}`]].join(" ")}>
        <div className={styles["card__header"]}>
          <div className={styles["card__header-date"]}>
            {date}
          </div>
          <div className={[styles["card__header-day"], styles[`card__header-day--${type}`]].join(" ")}>
          &nbsp;//&nbsp;{day}
          </div>
        </div>
        <div className={styles["card__content"]}>
          <div className={styles["card__content-devtype"]}>
            {dev_type}
          </div>
          {main_topic.map((item) => {
              return (
                <div className={styles["card__content-topics"]}>
                  {item}
                </div>
              )
            })}
        </div>
        <div className={styles["card__footer"]}>
          GET TICKETS HERE -{'>'}
        </div>
      </div>
    </Link>
    )
}
