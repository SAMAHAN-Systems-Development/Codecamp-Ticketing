import Image from 'next/image';
import React from 'react';
import styles from './HeaderImage.module.scss';

export default function HeaderIamge() {
  return (
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
  )
}
