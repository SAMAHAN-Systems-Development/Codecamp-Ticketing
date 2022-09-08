import React from 'react';
import styles from "./Footer.module.scss";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__content"]}>
        <section className={styles["footer__left-section"]}>
          <div className={styles["footer__title"]}>
            <h2>A SAMAHAN SYSTEMS DEVELOPMENT 2022 PROJECT</h2>
          </div>
          <div className={styles["footer__caption"]}>
            <h3>GOT ANY QUESTIONS? REACH OUT TO US!</h3>
          </div>
          <div className={styles["footer__contacts"]}>
            <div className={styles["footer__contacts-item"]}>
              <h4>SOCIALS</h4>
              <h4>/</h4>
              <h4>@SAMAHANSysDev</h4>
            </div>
            <div className={styles["footer__contacts-item"]}>
              <h4>EMAIL</h4>
              <h4>/</h4>
              <h4>samahan.sd@addu.edu.ph</h4>
            </div>
          </div>
        </section>

        <section className={styles["footer__right-section"]}>
          <div className={styles["footer__logo-sticker"]}>
            <Image
              src="/assets/images/SysDev-Smiley-Sticker.png"
              alt="SysDev Logo Sticker"
              layout="fill"
              objectFit="contain"
              draggable={false}
              priority
            />
          </div>
          <Link href="https://www.facebook.com/SAMAHANSysDev">
            <a target="_blank">
              <div className={styles["footer__logo-text"]}>
                <h4>SYS</h4>
                <h4>DEV</h4>
              </div>
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
}
