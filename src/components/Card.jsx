function Card({ imageSrc, title, description }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
        {imageSrc && (
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        )}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  
  export default Card;