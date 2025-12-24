"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Section from "./Section";

import { menuItems, sectionData } from "./data"; 

export default function FeaturesSection() {
  const [active, setActive] = useState("contact");

  const handleScrollTo = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex gap-10 max-w-7xl mx-auto pt-20">
      {/* Fixed Sidebar */}
      <Sidebar active={active} onClick={handleScrollTo} />

      {/* Scrollable Content */}
      <div className="flex-1">

        {sectionData.map((item) => (
          <Section
            key={item.id}
            id={item.id}
            title={item.title}
            sectionData={item} 
          />
        ))}
      </div>
    </div>
  );
}
