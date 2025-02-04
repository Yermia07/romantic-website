import React from 'react';
import gsap from 'gsap';

const InteractiveButton = () => {
  const handleClick = () => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.innerText = '❤️';
      heart.style.position = 'absolute';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = '2rem';
      heart.style.color = 'red';
      document.body.appendChild(heart);

      gsap.to(heart, {
        y: '-100vh',
        opacity: 0,
        duration: 2,
        onComplete: () => heart.remove(),
      });
    }
  };

  return (
    <section className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Klik untuk Kejutan Lucu & Romantis 😊</h2>
      <button onClick={handleClick} className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-colors duration-300">
        Klik Aku!
      </button>
    </section>
  );
};

export default InteractiveButton;
