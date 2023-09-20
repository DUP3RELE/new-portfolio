'use client'
import React, { useState, useEffect } from 'react';

const CirclesComponent = () => {
  // Inicjalizacja stanu dla wartości przewinięcia
  const [scrollY, setScrollY] = useState(0);

  // Nasłuchiwanie na zdarzenie przewijania
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Usuń nasłuchiwacz podczas czyszczenia
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Zastosuj style na podstawie wartości przewinięcia
  const firstCircleStyle = {
    transform: `translateY(${-scrollY * 1.0}px)`
  };

  const secondCircleStyle = {
    transform: `translateY(${-scrollY * 0.1}px)`
  };

  const thirdCircleStyle = {
    transform: `translateY(${-scrollY * 0.7}px)`
  };

  const fourthCircleStyle = {
    transform: `translateY(${-scrollY * 0.3}px)`
  };

  return (
    <div className="mx-auto flex justify-center items-center h-screen">
      <div className="bg-blue-500 rounded-full w-16 h-16" style={firstCircleStyle}></div>
      <div className="bg-red-500 rounded-full w-24 h-24 ml-4" style={secondCircleStyle}></div>
      <div className="bg-yellow-500 rounded-full w-32 h-32 ml-4" style={thirdCircleStyle}></div>
      <div className="bg-green-500 rounded-full w-40 h-40 ml-4" style={fourthCircleStyle}></div>
    </div>
  );
}

export default CirclesComponent;
