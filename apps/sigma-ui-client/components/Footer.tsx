import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black h-[30vh]  text-white px-6 py-12" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 text-white text-2xl font-extrabold">
            Sigma UI
          </div>
          <p className="text-sm mt-2">
            A product by{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Ayush Mehrotra
            </a>
          </p>
          <p className="text-sm">
            Building in public at{" "}
            <a
              href="https://twitter.com/mannupaaji"
              className="text-blue-400 hover:underline"
            >
              @ayusmehrotra
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-300">
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Pricing</p>
            <p className="hover:text-white cursor-pointer">Components</p>
            <p className="hover:text-white cursor-pointer">Templates</p>
            <p className="hover:text-white cursor-pointer">Categories</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Blog</p>
            <p className="hover:text-white cursor-pointer">Box Shadows</p>
            <p className="hover:text-white cursor-pointer">Showcase</p>
            <p className="hover:text-white cursor-pointer">Playground</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Sigma Pro</p>
            <p className="hover:text-white cursor-pointer">Aceternity</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Twitter</p>
            <p className="hover:text-white cursor-pointer">Discord</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
