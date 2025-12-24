"use client";
import React from "react";
import Image from "next/image";

const AICRMSection = () => {
  const features = [
    {
      title: "Breeze Assistant",
      description:
        "Use iHELP’s AI-powered assistant to research companies, prepare for sales calls, summarize CRM records, and streamline your sales workflow.",
    },
    {
      title: "AI content writer",
      description:
        "Create engaging content and scale your content production effortlessly with AI—instantly, at the click of a button.",
    },
    {
      title: "Chatbot builder",
      description:
        "Qualify leads, schedule meetings, deliver customer support, and scale personalized conversations effortlessly with AI-powered chatbots.",
    },
    {
      title: "Shared Inbox(Up-Coming)",
      description:
        "Up COMING",
    },
    {
      title: "Email tracking",
      description:
        "Receive instant notifications when prospects open your emails, enabling perfectly timed follow-ups to convert leads into deals faster.",
    },
    {
      title: "Email templates",
      description:
        "Convert high-performing emails into AI-powered templates your team can customize to close more deals faster.",
    },
  ];

  // ---- RIGHT SIDE IMAGE ----
  const RightSideVisual = () => {
    return (
      <div className="relative w-full max-w-lg mx-auto md:mx-0">
        <div className="rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
          <Image
            src="/images/ai-crm.webp" // <-- your uploaded image
            alt="AI CRM Visual"
            width={700}
            height={800}
            className="w-full h-auto object-contain"
            unoptimized // <<-- Extra safety (optional)
          />
        </div>
      </div>
    );
  };

  return (
    <section className="py-15 bg-white">
      {/* Top Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-5xl font-normal text-gray-800 mb-4">
         Work Smarter, Get More Done with <span className="text-orange-500">AI</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet your digital teammate. With AI embedded across iHELP’s free CRM, you can automate routine work, unlock actionable 
          customer insights, and accelerate business growth.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side Features */}
        <div className="pr-8 space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group py-4 border-b border-gray-200 transition-all duration-300 transform hover:bg-gray-50 hover:pl-4 rounded-md cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-start pt-10">
          <RightSideVisual />
        </div>
      </div>
    </section>
  );
};

export default AICRMSection;
