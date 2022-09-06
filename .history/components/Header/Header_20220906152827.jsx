import Image from 'next/image';
import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.img_wrapper}>
          <Image 
            src="/assets/images/header_logo.png"
            alt="Header Background"
            layout="fill"
            objectFit="cover"
            draggable={false}
            priority
          />
        </div>
        <div className={styles.text_container}>
        SAMAHAN SysDev Code Camp For Dummies 2022 is the first ever online code camp hosted by the SAMAHAN System Development committee. This event is centered on web development — the SysDev way. 
        The series of topics that the event will tackle will be completely for beginners. However, seasoned web developers are also welcome to attend to broaden their perspective.
        It’s COMPLETELY FREE and OPEN TO ALL!
        </div>
    </div>
  )
}
