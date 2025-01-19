import GalleryItem from '../components/GalleryItem';

const galleryImages = [
  { image: '/images/mountain.avif', caption: 'Majestic Mountains' },
  { image: '/images/1.jpg', caption: 'Dolphin chasing fish.' },
  { image: '/images/2.jpg', caption: 'Lush green canyon.' },
  { image: '/images/3.jpg', caption: 'Red rock canyon.' },
  { image: '/images/4.jpg', caption: 'Colorful forest valley.' },
  { image: '/images/5.jpg', caption: 'Rolling Green Hills' },
  { image: '/images/6.jpg', caption: 'Starlit Highland Sunset' },
  { image: '/images/7.jpg', caption: 'Solitary Purple Crocus' },
  { image: '/images/8.jpg', caption: 'Blooming Purple Lilacs' },
  { image: '/images/9.jpg', caption: 'Misty Mountain Waterfall' },
  { image: '/images/10.jpg', caption: 'Turquoise Ocean Meeting' },
  { image: '/images/11.jpg', caption: 'Tropical Island Paradise' },
  { image: '/images/12.jpg', caption: 'Starlings, Sunset, Silhouettes' },
  { image: '/images/13.jpg', caption: 'Peacock, Wall, Garden' },
  { image: '/images/14.jpg', caption: 'Waving Polar Bear' },
  { image: '/images/15.jpg', caption: 'Misty Forest Sunrise' },
  { image: '/images/16.jpg', caption: 'Soaring Bamboo Cathedral' },
  { image: '/images/17.jpg', caption: 'African Safari Rhinos' },
  { image: '/images/18.jpg', caption: 'Grazing Mountain Horses' },
  { image: '/images/19.jpg', caption: 'Misty Peacock Silhouettes' },
  { image: '/images/20.jpg', caption: 'Lion Lioness Love' },

];

function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Nature's Beauty Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((item, index) => (
          <GalleryItem key={index} image={item.image} caption={item.caption} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;