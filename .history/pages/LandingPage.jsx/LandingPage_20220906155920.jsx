import React from 'react';
import { Header } from '../../components/ComponentIndex';
import TicketsSection from '../../components/TicketsSection/TicketsSection';
import styles from './LandingPage.module.scss';

export default function LandingPage() {
  return (
    <div className={styles.container}>
        {/* <Header /> */}
        <TicketsSection title="<!-- REGISTER HERE -->" />
        {/* <TicketsSection /> */}
    </div>
  )
}
