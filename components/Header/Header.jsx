import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const lift = {
    whileHover: {
      scale: 1.2
    },
    whileTap: {
      scale: 0.8
    }
  }
  return (
    <div className={styles["section"]}>
      <motion.div
        className={styles["section__image-container-wrapper"]}
        whileHover="whileHover"
        whileTap="whileTap"
        variants={lift}
      >
        <Image 
          src="/assets/images/SysDevCodeCamp-LogoType.png"
          alt="Header Background"
          layout="fill"
          objectFit="contain"
          draggable={false}
          priority
        />
      </motion.div>
      <div className={styles["section__text-container"]}>
        <div className={styles["section__text-container-content"]}>
          <div className={styles["section__text-container-content-row"]}>
            <span className={styles["section__text-container-content-row-title"]}>SAMAHAN SysDev Code Camp For Dummies 2022</span> is the first ever online code camp hosted by the Department of SAMAHAN Systems Development. This event is centered on web development — the SysDev way. 
            </div>
            <div className={styles["section__text-container-content-row"]}>
            The series of topics that the event will tackle will be completely for beginners. However, seasoned web developers are also welcome to attend to broaden their perspective.
            </div>
            <div className={styles["section__text-container-content-row"]}>
            It’s COMPLETELY FREE and OPEN TO ALL!
            </div>
          </div>
      </div>
    </div>
  )
}
