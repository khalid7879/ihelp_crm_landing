"use client";
import { useState, useEffect } from "react";
import { menuItems } from "./data";

export default function Sidebar() {
  const [active, setActive] = useState("contact");

  useEffect(() => {

    const onScroll = () => {
      menuItems.forEach((item) => {
        const sec = document.getElementById(item.id);
        if (!sec) return;

        const top = sec.getBoundingClientRect().top;
        if (top >= 0 && top <= 250) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActive(id);
  };

  return (

    <aside className="w-56 sticky top-25 h-fit space-y-2 pl-5 hidden lg:block">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`flex items-center gap-2 w-full px-4 py-3 rounded-xl text-left transition
            ${
              active === item.id
                ? "bg-orange-500 text-white"
                : "bg-white  text-black"
            }`}>
          <span>{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
