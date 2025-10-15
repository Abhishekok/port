import React from "react";


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-20 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Abhishek Negi</h2>
          <p className="text-sm text-gray-400 mt-1">
            Fullstack Developer | MERN, Next.js
          </p>
        </div>

        {/* Center - Contact */}
        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="text-gray-400">📧 abhisheknegi868@gmail.com</p>
          <p className="text-gray-400">📱 +91 7827652600</p>
        </div>

        {/* Right side - Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Abhishekok/Projects"
            target="https://github.com/Abhishekok/Projects"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-negi-34506925b/"
            target="https://www.linkedin.com/in/abhishek-negi-34506925b/"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abhisheknegi868@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>
        </div>
      </div>

      {/* Bottom text */}

    </footer>
  );
};

export default Footer;
