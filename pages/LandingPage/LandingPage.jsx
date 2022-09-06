import React from 'react';
import { Footer, Header } from '../../components/ComponentIndex';
import TicketsSection from '../../components/TicketsSection/TicketsSection';

export default function LandingPage() {
  return (
    <>
      <Header />
      <TicketsSection title="<!-- REGISTER HERE -->" />
      <Footer />
    </>
  )
}
