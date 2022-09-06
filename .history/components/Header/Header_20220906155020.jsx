
import React from 'react';
import styles from './Header.module.scss';
import HeaderIamge from './HeaderImage/HeaderImage';
import HeaderText from './HeaderText/HeaderText';

export default function Header() {
  return (
    <div className={styles.container}>
      <HeaderIamge />
      <HeaderText />
    </div>
  )
}
