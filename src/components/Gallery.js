import React from "react";

function Gallery({ images }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={img}
            alt={`gallery-${i}`}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
