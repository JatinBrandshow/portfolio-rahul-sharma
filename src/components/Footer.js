"use client";

import React from "react";
import {
  Mail,
  Github,
  Twitter,
  Briefcase,
  Landmark,
  GraduationCap,
  Network,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-10 border-t border-gray-800">
      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-4">
        {/* Email */}
        <a
          href="mailto:professorname@gmail.com"
          className="hover:text-orange-400 transition"
          aria-label="Email"
        >
          <Mail size={32} />
        </a>

        {/* ORCID */}
        <a
          href="https://orcid.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
          aria-label="ORCID"
        >
          <Landmark size={32} />
        </a>

        {/* Google Scholar */}
        <a
          href="https://scholar.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
          aria-label="Google Scholar"
        >
          <GraduationCap size={32} />
        </a>

        {/* ResearchGate */}
        <a
          href="https://www.researchgate.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
          aria-label="ResearchGate"
        >
          <Network size={32} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
          aria-label="GitHub"
        >
          <Github size={32} />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
          aria-label="Twitter"
        >
          <Twitter size={32} />
        </a>

        {/* Portfolio / LinkedIn */}
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition"
          aria-label="Portfolio"
        >
          <Briefcase size={32} />
        </a>
      </div>

      {/* Personal Email */}
      <p className="text-center text-sm text-gray-400 mb-4">
        You also can write to me on my personal email at{" "}
        <a
          href="mailto:professorname@gmail.com"
          className="text-orange-400 hover:underline"
        >
          professorname@gmail.com
        </a>
      </p>

      {/* Bottom credit line */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        Designed & Developed by{" "}
        <a
          href="https://brandshow.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:underline"
        >
          Brandshow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
