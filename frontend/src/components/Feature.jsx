import {
  PackageCheck,
  Barcode,
  Clock,
  Truck,
  Settings,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    title: "Sticker & Kitting",
    description:
      "End-to-end sticker application and kitting services for E-commerce brands.",
    icon: PackageCheck,
    color: "sky-500",
  },
  {
    title: "Promotional Labeling",
    description:
      "Professional barcode and promotional labeling compliant with standards.",
    icon: Barcode,
    color: "sky-500",
  },
  {
    title: "Fast Delivery",
    description: "Same-day and next-day courier services for urgent needs.",
    icon: Clock,
    color: "sky-500",
  },
  {
    title: "Regional Couriers",
    description: "Safe and efficient local & regional parcel movement.",
    icon: Truck,
    color: "sky-500",
  },
  {
    title: "Custom Solutions",
    description: "Tailored logistics and delivery solutions for your business.",
    icon: Settings,
    color: "sky-500",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges.",
    icon: BadgeDollarSign,
    color: "sky-500",
  },
];

export default function FeaturesWhite() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Modern logistics and packaging solutions designed for E-commerce and
          growing businesses.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl bg-${feature.color}/10 mb-6`}
              >
                <Icon className={`text-${feature.color} w-8 h-8`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}