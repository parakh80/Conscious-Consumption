
function TipCard({ title, description, Icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2">
        <Icon className="text-green-500 mr-2" size={24} />
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default TipCard;