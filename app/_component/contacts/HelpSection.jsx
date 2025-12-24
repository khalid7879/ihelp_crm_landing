import React from "react";
import { Mail, Zap, DollarSign } from "lucide-react"; // Example icons from lucide-react

const HelpSection = () => {
  // Data for the feature cards
  const features = [
    {
      icon: Mail,
      title: "All-in-one CRM.",
      description:
        "Centralize lead, contact, sales, and project data in a single source of truth, while scaling marketing campaigns and sales pipelines with ease.",
    },
    {
      icon: Zap,
      title: "Easy to use",
      description:
        "Easily create drag-and-drop emails, customize dashboards and fields, integrate with 100+ apps, and automatically score and move leads through sales stages.",
    },
    {
      icon: DollarSign,
      title: "Pricing",
      description:
        "Unlock enterprise-grade CRM features—lead scoring, routing, email, and automation—while saving up to 50% versus other solutions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Top Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight max-w-4xl mx-auto">
          Speak with an iHELP expert and see how our all-in-one CRM platform can transform the way you engage and retain customers.
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="flex justify-center mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
          {features.map((feature, index) => (
            // Card container with animation placeholder
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg rounded-xl"
              // You can use a state/IntersectionObserver here for a proper fade-in animation
            >
              {/* Icon */}
              <feature.icon className="w-8 h-8 text-gray-800 mb-4" />

              {/* Title */}
              <h3 className="text-lg font-normal text-gray-800 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="text-center mb-24 px-4">
        <button className="px-10 py-4 text-white font-semibold text-lg bg-orange-600 rounded-lg shadow-md transition-colors duration-300 hover:bg-orange-700 hover:shadow-lg">
          Connect with our Sales team
        </button>
      </div>

      {/* Bottom Text */}
      <div className="text-center px-4">
        <p className="text-2xl md:text-3xl font-light text-gray-800 leading-snug max-w-4xl mx-auto">
          Trusted by thousands of companies across industries, iHELP CRM powers smarter customer management and business growth.**
        </p>
      </div>
    </section>
  );
};

export default HelpSection;
