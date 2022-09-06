
import React from 'react';
import styles from './Header.module.scss';
import HeaderIamge from './HeaderImage/HeaderImage';
import HeaderText from './HeaderText/HeaderText';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.img_wrapper}>
        <Image 
            src="/assets/images/header_logo.png"
            alt="Header Background"
            layout="fill"
            objectFit="fill"
            draggable={false}
            priority
        />
    </div>
      <HeaderText />
    </div>
  )
}
