import React from 'react';

const Gallery = () => {
  const photos = ['/images/photo1.jpg', '/images/photo2.jpg', '/images/photo3.jpg'];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Foto-Foto Kita 📸</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Foto ${index + 1}`} className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
