// DynamicImageGallery.tsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

interface DynamicImageGalleryProps {
  images: { original: string; thumbnail: string; description?: string }[];
}

const DynamicImageGallery: React.FC<DynamicImageGalleryProps> = ({ images }) => {
  return (
    <div className="dynamic-image-gallery">
      <ImageGallery 
        items={images} 
        showBullets={true} 
        showThumbnails={true} 
        showFullscreenButton={false} 
        showPlayButton={false} 
        additionalClass="custom-gallery"
      />
    </div>
  );
};

export default DynamicImageGallery;
