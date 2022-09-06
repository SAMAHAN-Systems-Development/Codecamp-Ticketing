
import React from 'react';
import styles from './Header.module.scss';
import HeaderIamge from './HeaderImage/HeaderImage';

export default function Header() {
  return (
    <div className={styles.container}>
      <HeaderIamge />
    </div>
  )
}
