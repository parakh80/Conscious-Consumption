function GalleryItem({ image, caption }) {
    return (
      <div>
        <img src={image} alt={caption} className="w-full h-64 object-cover rounded-lg" />
        <p className="mt-2 text-center">{caption}</p>
      </div>
    );
  }
  
  export default GalleryItem;