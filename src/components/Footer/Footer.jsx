import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-gray-400 text-center">
      <div className="flex flex-col items-center">
        {/* <Logo width="80px" /> */}
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} Made with ❤️ by Tohid-Khan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
