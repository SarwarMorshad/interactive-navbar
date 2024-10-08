import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyWebsite</h1>
        <button className="text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`lg:flex lg:space-x-6 text-white ${isOpen ? "block" : "hidden"}`}>
          <li className="hover:bg-blue-700 p-2 rounded">
            <a href="#home">Home</a>
          </li>
          <li className="hover:bg-blue-700 p-2 rounded">
            <a href="#about">About</a>
          </li>
          <li className="hover:bg-blue-700 p-2 rounded">
            <a href="#services">Services</a>
          </li>
          <li className="hover:bg-blue-700 p-2 rounded">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
