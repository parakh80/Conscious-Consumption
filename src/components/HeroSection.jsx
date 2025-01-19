function HeroSection({ imageSrc, height = 'h-screen', children, className = '' }) {
  return (
    <section
      className={`bg-cover bg-center ${height} ${className}`}
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}

export default HeroSection;