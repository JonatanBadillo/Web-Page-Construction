// DynamicImageGallery.tsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

interface DynamicImageGalleryProps {
  images: { original: string; thumbnail: string; description?: string }[];
}

const DynamicImageGallery: React.FC<DynamicImageGalleryProps> = ({ images }) => {
  const items = images.map(image => ({
    ...image,
    originalClass: 'custom-image', // Aplicar clase personalizada a las imágenes
    description: image.description ? (
      <div className="custom-caption">{image.description}</div>
    ) : null,
  }));

  return (
    <div className="dynamic-image-gallery">
      <ImageGallery
        items={items}
        showBullets={false}
        showThumbnails={true}
        showFullscreenButton={true}
        showPlayButton={false}
        additionalClass="custom-gallery"
      />
    </div>
  );
};

export default DynamicImageGallery;
