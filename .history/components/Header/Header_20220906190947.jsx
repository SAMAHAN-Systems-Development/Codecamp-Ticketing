
import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';


export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.img_wrapper}>
          <Image 
            src="/assets/images/header_logo.png"
            alt="Header Background"
            layout="fill"
            // width={100}
            // height={100}
            objectFit="fill"
            draggable={false}
            priority
          />
        </div>
      </div>
      <div className={styles.text_container}>
        <div className={styles.content}>
          <div className={styles.row}>
            SAMAHAN SysDev Code Camp For Dummies 2022 is the first ever online code camp hosted by the SAMAHAN System Development committee. This event is centered on web development — the SysDev way. 
            </div>
            <div className={styles.row}>
            The series of topics that the event will tackle will be completely for beginners. However, seasoned web developers are also welcome to attend to broaden their perspective.
            </div>
            <div className={styles.row}>
            It’s COMPLETELY FREE and OPEN TO ALL!
            </div>
          </div>
      </div>
    </div>
  )
}
