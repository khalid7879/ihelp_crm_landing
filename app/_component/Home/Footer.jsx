// Footer.jsx
"use client";
import React from "react";
// 💡 React Icons থেকে আইকনগুলো ইম্পোর্ট করা হলো
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter, // 'X' এর জন্য Twitter/X আইকন
  FaGoogle,
  FaFax, // Fax আইকন
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    "Security",
    "Privacy",
    "Terms of Service",
    "Professional Services Agreement",
    
    "GDPR",
    "Compliance",
  ];

  // লোগো কম্পোনেন্ট - অপরিবর্তিত
  const InsightlyLogo = ({ src }) => (
    <div className="flex flex-col items-center justify-center py-10">
      {/* ⚠️ আপনার আপলোড করা লোগোর পাথটি এখানে বসান */}
      <img src={src} alt="Insightly Logo" className="h-6 sm:h-8 w-auto" />
    </div>
  );

  // 💡 আপডেট করা সোশ্যাল আইকন কম্পোনেন্ট
  const SocialIcon = ({ Icon, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg
        transition duration-200 hover:scale-110 hover:shadow-lg cursor-pointer`}>
      <Icon className="text-sm" />
    </a>
  );

  return (
    <footer className="w-full bg-white pt-10 pb-15  border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative flex justify-center py-10">
          <div className="absolute top-1/2 -translate-y-1/2 z-10 bg-white px-8">
            <InsightlyLogo src="/images/logo.svg" />
          </div>

          <div className="w-full h-px bg-gray-200 absolute top-1/2"></div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0 pt-6">
          <div className="order-2 md:order-1 text-center md:text-left whitespace-nowrap">
            &copy; 2014-{currentYear} IHelpBd Inc. All rights reserved.
          </div>

          <div className="order-1 md:order-2 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:text-orange-500 transition duration-150 whitespace-nowrap">
                {link}
              </a>
            ))}
          </div>


          <div className="order-3 flex items-center space-x-2">
            {/* Facebook */}
            <SocialIcon
              Icon={FaFacebookF}
              href="https://facebook.com/Insightly"
            />

            {/* YouTube */}
            <SocialIcon Icon={FaYoutube} href="https://youtube.com/Insightly" />

            {/* X / Twitter */}
            <SocialIcon Icon={FaTwitter} href="https://twitter.com/Insightly" />


            <SocialIcon Icon={FaFax} href="#" />

            {/* Google */}
            <SocialIcon Icon={FaGoogle} href="#" />


            {/* <div className="relative w-9 h-9 bg-[#E64F25] rounded-full flex items-center justify-center text-white text-lg font-bold transition duration-200 hover:scale-110 hover:shadow-lg cursor-pointer">
              <span className="text-xl">in</span>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                7
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
