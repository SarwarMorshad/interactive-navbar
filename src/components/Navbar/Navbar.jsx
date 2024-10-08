import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to detect active section while scrolling and apply the zoom effect
  const handleScroll = () => {
    const sections = ["home", "about", "services", "contact"];
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      const rect = sectionElement.getBoundingClientRect();

      // Check if the section is in view (middle of the viewport)
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActiveSection(section); // Set active section

        // Apply zoom effect for the section in view
        sectionElement.style.backgroundSize = "110%"; // Zoom in
        sectionElement.style.transition = "background-size 0.5s ease-in-out"; // Smooth transition
      } else {
        // Reset the background size for sections not in view
        sectionElement.style.backgroundSize = "100%"; // Zoom out
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
            <h1 className="text-white text-2xl font-bold">Interactive Navbar</h1>
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

      {/* Main Content */}
      <section className="py-10">
        <div className="m-10">
          {/* Home Section */}
          <div
            id="home"
            className="h-[700px] bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg"
            style={{
              backgroundImage: "url('/src/assets/1.jpg')",
              backgroundSize: "cover",
              marginTop: "50px",
              padding: "30px",
            }}
          >
            <h2 className="text-9xl text-white animate-rotateText">Home</h2>
          </div>

          {/* About Section */}
          <div
            id="about"
            className="h-[700px] bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg"
            style={{
              backgroundImage: "url('/src/assets/2.jpg')",
              backgroundSize: "cover",
              marginTop: "50px",
              padding: "30px",
            }}
          >
            <h2 className="text-9xl text-white animate-rotateText">About</h2>
          </div>

          {/* Services Section */}
          <div
            id="services"
            className="h-[700px] bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg"
            style={{
              backgroundImage: "url('/src/assets/3.jpg')",
              backgroundSize: "cover",
              marginTop: "50px",
              padding: "30px",
            }}
          >
            <h2 className="text-9xl text-white animate-rotateText">Services</h2>
          </div>

          {/* Contact Section */}
          <div
            id="contact"
            className="h-[700px] bg-no-repeat bg-center flex justify-center items-center shadow-gray-600 shadow-2xl rounded-lg"
            style={{
              backgroundImage: "url('/src/assets/4.jpg')",
              backgroundSize: "cover",
              marginTop: "50px",
              padding: "30px",
            }}
          >
            <h2 className="text-9xl text-white animate-rotateText">Contact</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
