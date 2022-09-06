import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      <Image 
        src="/assets/images/header_logo.png"
        alt="Header Background"
        layout="fill"
        objectFit="cover"
        draggable={false}
        priority
      />
    </div>
  )
}
