import React from 'react';

const Playlist = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Playlist Lagu Romantis 🎵</h2>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-lg shadow-md"
      ></iframe>
    </section>
  );
};

export default Playlist;
