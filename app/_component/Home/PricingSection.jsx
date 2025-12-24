import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "No credit card required",
      color: "text-orange-500",
      features: [
        "Contact management",
        "Deal pipelines",
        "CRM import",
        "Breeze Assistant (Beta)",
        "Reporting dashboard",
      ],
    },
    {
      name: "Starter",
      price: "Starts at $15/month per seat*",
      color: "text-orange-500",
      features: [
        "Everything in Free",
        "Required fields",
        "Permission sets",
        "Multiple currencies",
        "No HubSpot branding",
      ],
    },
    {
      name: "Professional",
      price: "Starts at $50/month per seat",
      color: "text-orange-500",
      features: [
        "Everything in Starter",
        "AI customer agent",
        "Duplicate management",
        "Standard contact scoring",
        "Calculated properties",
        "Custom reporting",
      ],
    },
    {
      name: "Enterprise",
      price: "Starts at $75/month per seat",
      color: "text-orange-500",
      features: [
        "Everything in Professional",
        "Custom objects",
        "Organize teams",
        "Single sign-on",
        "Field-level permissions",
      ],
    },
  ];

  return (
    <section className="py-15 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-normal text-gray-900 mb-4">
          Scale Your Business Without Starting From Scratch
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
         Free today, ready for tomorrow. Upgrade your free CRM anytime to unlock advanced 
         capabilities—no disruption, no data migration required.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white">
            {/* Title */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xl font-semibold ${plan.color}`}>●</span>
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
            </div>

            {/* Price */}
            <p className="text-gray-700 mb-6">{plan.price}</p>

            {/* Features */}
            <h4 className="font-semibold text-gray-900 mb-4">
              Popular features
            </h4>

            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-12">
        <Link href="/contact">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
            Get free CRM
          </button>
        </Link>

        <Link href="/contact">
          <button className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-50 transition">
            Demo premium CRM
          </button>
        </Link>
      </div>

      {/* Bottom Note */}
      <p className="text-center text-gray-500 text-sm mt-10 px-4">
        *Special discount available for new customers. This offer has no fixed end date and may be discontinued at any time. For details on product packaging and
         applicable limits, please contact us. please see our{" "}
        <a href="#" className="underline">
          pricing page
        </a>
        .
      </p>
    </section>
  );
}
