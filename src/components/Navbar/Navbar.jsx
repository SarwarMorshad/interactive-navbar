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

      // Check if section is in view
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
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
      <section className="mb-10">
        <nav className="bg-blue-500 p-6 fixed top-0 w-full z-10 shadow-lg">
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
      </section>

      {/* Sections with Strong Shadows and White Space */}
      <section className="py-10">
        <div className="m-10">
          {/* Home Section */}
          <div
            id="home"
            className="h-screen bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg" // Added shadow and rounded class
            style={{
              backgroundImage: "url('/src/assets/1.jpg')",
              backgroundSize: "90% 90%",
              marginTop: "100px", // Ensure enough space for shadow on top
              padding: "30px", // White space inside the section
            }}
          >
            <h2 className="text-9xl text-white">Home Section</h2>
          </div>

          {/* About Section */}
          <div
            id="about"
            className="h-screen bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg" // Added shadow and rounded class
            style={{
              backgroundImage: "url('/src/assets/2.jpg')",
              backgroundSize: "90% 90%",
              marginTop: "50px", // Add space between sections for shadow visibility
              padding: "30px", // White space inside the section
            }}
          >
            <h2 className="text-9xl text-white">About Section</h2>
          </div>

          {/* Services Section */}
          <div
            id="services"
            className="h-screen bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg" // Added shadow and rounded class
            style={{
              backgroundImage: "url('/src/assets/3.jpg')",
              backgroundSize: "90% 90%",
              marginTop: "50px", // Add space between sections for shadow visibility
              padding: "30px", // White space inside the section
            }}
          >
            <h2 className="text-9xl text-white">Services Section</h2>
          </div>

          {/* Contact Section */}
          <div
            id="contact"
            className="h-screen bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg" // Added shadow and rounded class
            style={{
              backgroundImage: "url('/src/assets/4.jpg')",
              backgroundSize: "90% 90%",
              marginTop: "50px", // Add space between sections for shadow visibility
              padding: "30px", // White space inside the section
            }}
          >
            <h2 className="text-9xl text-white">Contact Section</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
