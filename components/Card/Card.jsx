import React from 'react';
import styles from './Card.module.scss';
import { motion } from 'framer-motion';

export default function Card({ type, date, day, dev_type, main_topic, link }) {

  const lift = {
    whileHover: {
      y: -15
    },
    whileTap: {
      scale: 0.8
    }
  }
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer noopenner"
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      whileTap="whileTap"
      variants={lift}>
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
          {main_topic.map((item, index) => {
              return (
                <div className={styles["card__content-topics"]} key={index}>
                  {item}
                </div>
              )
            })}
        </div>
        <div className={styles["card__footer"]}>
          GET TICKETS HERE -{'>'}
        </div>
      </div>
    </motion.a>
    )
}
