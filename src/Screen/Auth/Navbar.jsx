import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-black px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <div>
        <img 
          src={logo} 
          alt="Brand Logo"
          className="w-30 h-auto object-contain ml-12"
        />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Home</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">About Us</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Portfolio</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Services</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Institute</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide">Contact</a>
      </div>
    </nav>
  );
}
