import React, { useEffect } from 'react';
import Particles from 'react-particles-js';
import gsap from 'gsap';

const BirthdaySection = () => {
  useEffect(() => {
    const countDownDate = new Date('Feb 14, 2025 00:00:00').getTime();
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (countdownElement) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

      if (distance < 0) {
        clearInterval(interval);
        if (countdownElement) {
          countdownElement.innerHTML = 'Happy Birthday!';
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center py-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg shadow-lg my-8">
      <Particles
        params={{
          particles: {
            number: { value: 100 },
            color: { value: '#ff6f61' },
            shape: { type: 'circle' },
            size: { value: 5, random: true },
            move: { enable: true, speed: 2 },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <h2 className="text-3xl font-bold text-white relative z-10">Selamat Ulang Tahun, Sayang! 🎂🎉</h2>
      <p className="text-white mt-4 relative z-10">Semoga tahun ini membawa lebih banyak cinta, tawa, dan kebahagiaan!</p>
      <div id="countdown" className="text-2xl text-white mt-6 relative z-10"></div>
    </section>
  );
};

export default BirthdaySection;
