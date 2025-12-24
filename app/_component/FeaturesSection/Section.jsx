"use client";
import { useState } from "react";

export default function Section({ id, title, sectionData }) {
  const [activeCard, setActiveCard] = useState(null);

  const current = sectionData;

  return (
    <section
      id={id}
      className="min-h-screen bg-gray-50 rounded-2xl p-6 shadow mb-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4 text-orange-500">{title}</h2>

      {/* Dynamic Content (Review/Testimonial) - অপরিবর্তিত */}
      {current && current.dynamicContent && (
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-orange-500 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-800">
              {current.dynamicContent.title}
            </h3>
          </div>
          <blockquote className="text-lg text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-4 italic">
            {current.dynamicContent.content}
          </blockquote>
          <p className="text-right mt-3 text-sm font-semibold text-gray-600">
            {current.dynamicContent.author}
          </p>
        </div>
      )}
      {/* End of Dynamic Content Block */}


      {current.title && current.desc && (
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl mb-8">
          <h3 className="text-xl font-semibold text-orange-500">
            {current.title}
          </h3>
          <p className="text-gray-700 mt-1">{current.desc}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {current.cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveCard(card)}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div
              className=" relative w-full h-70 bg-orange-200 rounded-xl flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: "url('images/content-bg.png')",
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 mix-blend-color opacity-90"></div>

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-fill"
              />
            </div>

            <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
         
          </div>
        ))}
      </div>

      {/* Popup Modal*/}
      {activeCard && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl animate-scaleUp relative">
            <button
              onClick={() => setActiveCard(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black">
              ✕
            </button>

            <div
              className="w-full h-64 bg-orange-100 rounded-xl flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: "url('images/content-bg.png')",
              }}>
              <img
                src={activeCard.image}
                alt={activeCard.title}
                className="w-full h-full object-fill"
              />
            </div>

            <h3 className="text-xl font-bold mt-5">{activeCard.title}</h3>

            <p className="text-gray-600 mt-2">{activeCard.desc}</p>

            <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
              Try it for Free
            </button>
          </div>
        </div>
      )}

      <style>{`
        .animate-scaleUp {
          animation: scaleUp .25s ease;
        }
        @keyframes scaleUp {
          from { transform: scale(.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
