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

      </div>
    </div>
  )
}
