function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} Sustainable Living
        </div>
      </footer>
    );
  }
  
  export default Footer;