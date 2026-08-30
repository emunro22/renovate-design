import Image from "next/image";
import type { StaticImageData } from "next/image";

interface GalleryProps {
  images: StaticImageData[];
  altPrefix?: string;
}

function Gallery({ images, altPrefix = "Renovate Design project" }: GalleryProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <div key={i} className="relative overflow-hidden rounded-xl shadow-lg h-64">
          <Image
            src={img}
            alt={`${altPrefix} ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
