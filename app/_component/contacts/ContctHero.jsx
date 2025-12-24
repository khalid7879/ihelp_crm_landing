"use client";
import React, { useState } from "react";
import { FaChevronDown, FaRegUser } from "react-icons/fa";

export default function ContactSalesForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    employees: "",
    country: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Simulate API call delay
    setIsSubmitted(true);
    setTimeout(() => {
      // You would typically handle API response here
      console.log("Successfully simulated form submission.");
      setIsSubmitted(false);

    }, 2000);
  };

  const IhelpBdLogo = () => (
    <div className="flex flex-col items-start gap-1">
      <span className="text-3xl font-extrabold text-white leading-none">
        ihelpbd
      </span>
      <span className="text-xs text-white opacity-70 tracking-widest">
        BY UNBOUNCE
      </span>
    </div>
  );

  const InputField = ({
    label,
    name,
    type = "text",
    required = false,
    isDropdown = false,
  }) => (
    <div className="w-full animate-slideInUp">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-800 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {!isDropdown ? (
          <input
            id={name}
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            required={required}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition duration-150 shadow-sm"
          />
        ) : (
          <>
            <select
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required={required}
              className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition duration-150 bg-white cursor-pointer shadow-sm">
              <option value="" disabled>
                Select {label}
              </option>
              {name === "employees" && (
                <>
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="51+">51+ (51 or more)</option>
                </>
              )}
              {name === "country" && (
                <>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </>
              )}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-xs" />
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center font-sans w-screen relative left-1/2 -translate-x-1/2">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn my-30 mx-4 md:mx-10 lg:mx-auto">
        <div className="bg-[#B84E17] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute -top-1/4 -right-1/4 w-[120%] h-[120%] bg-orange-800 rounded-full blur-3xl opacity-30 transform rotate-12"></div>

            {/* Circles and Stars */}
            <div className="absolute top-1/3 left-10 w-24 h-24 bg-orange-500 rounded-full animate-float1 shadow-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-500 rounded-full animate-float2 shadow-xl"></div>
            <div className="absolute bottom-10 right-10 text-6xl text-[#E67E22] transform rotate-12 animate-pulseSlow">
              ★
            </div>
            <div className="absolute bottom-1/4 left-1/4 text-5xl text-[#E67E22] transform -rotate-12 animate-pulseSlow delay-500">
              ★
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-10">
            <IhelpBdLogo />

            <div className="animate-slideInUp">
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-6">
                Contact ihelpkl sales
              </h1>
              <p className="mt-4 text-white opacity-90 text-lg">
                Curious how ihelpkl can benefit your team? Our experts are here
                to guide you through the process.
              </p>
            </div>

            <div className="relative mt-8 animate-slideInUp delay-300 w-full">
              <img
                src="/images/contacthero.png"
                alt="Customer support smiling on headset"
                className="w-full h-auto object-cover rounded-xl shadow-2xl border-4 border-white transform hover:scale-[1.01] transition duration-300"
              />

              <div className="absolute top-4 right-4 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-xl border-4 border-orange-500 transform rotate-6">
                <FaRegUser className="text-2xl text-orange-500 transform -rotate-6" />
              </div>
            </div>
          </div>
        </div>




        <div className="bg-white p-8 sm:p-12 flex flex-col justify-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 animate-slideInUp delay-100">
            Connect with our Sales Team
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="First Name" name="firstName" required />
              <InputField label="Last Name" name="lastName" required />
            </div>

            {/* Email */}
            <InputField
              label="Business Email"
              name="businessEmail"
              type="email"
              required
            />

            {/* Number of Employees (Dropdown) */}
            <InputField
              label="Number of Employees"
              name="employees"
              isDropdown
              required
            />

            {/* Country (Dropdown) */}
            <InputField label="Country" name="country" isDropdown required />

            {/* Phone */}
            <InputField label="Phone" name="phone" type="tel" required />

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#B84E17] text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#9E4113] transition duration-300 transform hover:scale-[1.005] animate-slideInUp delay-600"
                disabled={isSubmitted}>
                {isSubmitted ? "Connecting..." : "Connect with our Sales Team"}
              </button>
            </div>

            {/* Legal / Privacy Text */}
            <p className="text-[10px] text-gray-500 text-center pt-3 animate-fadeIn delay-700 leading-relaxed">
              Your contact details will be handled in accordance with our{" "}
              <a
                href="#"
                className="underline hover:text-orange-500 font-medium">
                Privacy Policy
              </a>
              . This site uses hCaptcha and the Google{" "}
              <a
                href="#"
                className="underline hover:text-orange-500 font-medium">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline hover:text-orange-500 font-medium">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, 20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -15px) rotate(-5deg);
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }
        .animate-float1 {
          animation: float1 15s infinite ease-in-out;
        }
        .animate-float2 {
          animation: float2 10s infinite reverse ease-in-out;
        }
        .animate-pulseSlow {
          animation: pulseSlow 4s infinite ease-in-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}
