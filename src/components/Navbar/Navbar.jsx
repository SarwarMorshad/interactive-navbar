import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to detect active section while scrolling
  const handleScroll = () => {
    const sections = ["home", "about", "services", "contact"];
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      const rect = sectionElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">MyWebsite</h1>
          <button className="text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
          <ul className={`lg:flex lg:space-x-6 text-white ${isOpen ? "block" : "hidden"}`}>
            {["home", "about", "services", "contact"].map((section) => (
              <li
                key={section}
                className={`p-2 rounded cursor-pointer ${
                  activeSection === section ? "bg-blue-700" : "hover:bg-blue-600"
                }`}
                onClick={() => handleClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-16">
        <div id="home" className="h-screen bg-gray-100 flex justify-center items-center">
          <h2 className="text-3xl">Home </h2>
        </div>
        <div id="about" className="h-screen bg-gray-200 flex justify-center items-center">
          <h2 className="text-3xl">About </h2>
        </div>
        <div id="services" className="h-screen bg-gray-300 flex justify-center items-center">
          <h2 className="text-3xl">Services </h2>
        </div>
        <div id="contact" className="h-screen bg-gray-400 flex justify-center items-center">
          <h2 className="text-3xl">Contact </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
