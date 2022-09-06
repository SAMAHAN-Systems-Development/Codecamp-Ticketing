import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      <Image 
        src="/assets/images/header_logo.png"
        layout='fill'
      />
    </div>
  )
}
