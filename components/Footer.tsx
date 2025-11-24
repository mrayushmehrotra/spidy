import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted h-[30vh] text-foreground px-6 py-12" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 text-foreground text-2xl font-extrabold">
            spidy ui
          </div>
          <p className="text-sm mt-2">
            a product by{" "}
            <a href="#" className="text-primary hover:underline">
              ayush mehrotra
            </a>
          </p>
          <p className="text-sm">
            building in public at{" "}
            <a
              href="https://twitter.com/mannupaaji"
              className="text-primary hover:underline"
            >
              @ayusmehrotra
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          <div className="space-y-2">
            <p className="hover:text-foreground cursor-pointer">pricing</p>
            <p className="hover:text-foreground cursor-pointer">components</p>
            <p className="hover:text-foreground cursor-pointer">templates</p>
            <p className="hover:text-foreground cursor-pointer">categories</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-foreground cursor-pointer">blog</p>
            <p className="hover:text-foreground cursor-pointer">box shadows</p>
            <p className="hover:text-foreground cursor-pointer">showcase</p>
            <p className="hover:text-foreground cursor-pointer">playground</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-foreground cursor-pointer">spidy pro</p>
            <p className="hover:text-foreground cursor-pointer">aceternity</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-foreground cursor-pointer">twitter</p>
            <p className="hover:text-foreground cursor-pointer">discord</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
