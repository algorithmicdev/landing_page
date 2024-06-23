"use client";
import Image from 'next/image'
import React, { useState } from 'react';
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__brand">
      <Image
                  loading="lazy"
                  src="/nlx_logo.svg"
                  className="shrink-0 self-stretch my-auto " alt={''} 
                  width={80}     
                  height={20}
      />
      </div>
      <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
        <a href="#home" className="header__link">Home</a>
        <a href="#about" className="header__link">About</a>
        <a href="#services" className="header__link">Services</a>
        <a href="#contact" className="header__link">Contact</a>
      </nav>
      <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
        <a href="#contact" className="header__link">Contact</a>
      </nav>
      <div className="header__toggle" onClick={toggleMenu}>
        <span className="header__toggle-bar"></span>
        <span className="header__toggle-bar"></span>
        <span className="header__toggle-bar"></span>
      </div>
    </header>
  );
};
