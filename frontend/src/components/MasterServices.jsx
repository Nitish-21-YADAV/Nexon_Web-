import React from "react";

const services = [
  {
    image: "/Service1.png",
    title: "Air Service",
    description:
      "Our skilled air freight team ensures the swift and punctual delivery of your cargo worldwide. Through precise planning and coordination, we help you achieve improved inventory forecasting and storage management, resulting in greater operational efficiency and cost control.",
  },
  {
    image: "/Service2.png",
    title: "Express Cargo Services",
    description:
      "We offer reliable road transportation services across India, capable of handling a wide range of cargo. Our modern fleet of LCVs, trucks, containers, trailers, and prime movers enables secure and timely deliveries nationwide.",
  },
  {
    image: "/Service3.webp",
    title: "Project Handling",
    description:
      "Our committed project logistics specialists deliver end-to-end management solutions for complex requirements, from feasibility analysis and multimodal strategy to on-ground execution and operational support.",
  },
  {
    image: "/Service4.jpg",
    title: "Warehouse Management",
    description:
      "With years of industry expertise, we provide comprehensive warehouse management services across India. We manage over 7,50,000 sq. ft. of space and offer racking systems, mezzanine floors, dock levelers, forklifts, and stackers.",
  },
  {
    image: "/Service5.jpg",
    title: "Supply Chain Management",
    description:
      "Our PEB warehouses feature scientifically planned racking systems and value-added services including packaging, labeling, and cargo segregation. We offer contract warehousing, order processing, and distribution solutions.",
  },
  {
    image: "/Service6.jpg",
    title: "Customs Clearance",
    description:
      "With over 200 professionals across ports, airports, and ICDs in India, we provide complete customs clearance services for imports and exports via sea and air, including project cargo and ODC shipments.",
  },
];

const MasterService = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Delivering reliable, efficient, and customized logistics solutions
            tailored to meet your business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-40 sm:h-48 md:h-52 mb-5 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MasterService;