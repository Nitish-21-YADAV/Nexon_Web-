import React from 'react';

function MasterAbout() {
    // Note: Removed the ">" from strings to use cleaner CSS list styles instead.
    const mission = [
        "To deliver comprehensive and customized logistics solutions that enhance operational efficiency and business growth.",
        "To ensure timely, secure, and cost-effective transportation across all modes of freight.",
        "To maintain the highest standards of quality, integrity, and customer satisfaction in every service provided.",
        "To leverage advanced technology and digital integration for accuracy, transparency, and real-time visibility.",
        "To continuously strengthen infrastructure, fleet, and warehousing capabilities to meet evolving market demands."
    ];

    const vision = [
        "Become a leading and most trusted logistics partner across India and global markets.",
        "Set industry benchmarks in service quality, efficiency, and technological advancement.",
        "Create a seamless and fully integrated supply chain ecosystem for businesses of all sizes.",
        "To be recognized for transparency, reliability, and customer-centric solutions.",
        "Drive continuous innovation that transforms the future of logistics and supply chain management."
    ];

    return (
        <section className="bg-white py-12 md:py-20 px-4 md:px-8 font-sans mt-5">
            <div className="max-w-7xl mx-auto space-y-16">
                
                {/* ---------- TOP SECTION: IMAGE & INTRO ---------- */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/AboutImg1.png"
                            alt="About Nexon Services"
                            className="w-full h-auto rounded-xl shadow-lg border border-gray-100 object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        {/* Heading */}
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
                                About <span className="text-blue-600">Nexon Services</span>
                            </h2>
                            <div className="w-24 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed text-justify md:text-left">
                            <p>
                                Nexon Services is regarded as one of India’s most trusted and seasoned integrated logistics companies. Built on a foundation of reliability, innovation, and operational excellence, we have grown into a complete logistics solutions provider, delivering specialized services in Freight Forwarding, Project Logistics, Supply Chain Management, Specialty Logistics, ISO Tank Depot operations, Empty Container Depot services, and MHE Leasing.
                            </p>
                            <p>
                                At Logistic Express and Logistics, we go beyond conventional logistics services—we act as your strategic partner in managing and optimizing supply chain operations. With extensive knowledge of the local market and a strong commitment to operational excellence, we deliver dependable, customized logistics solutions to businesses across India.
                            </p>
                            <p>
                                Our primary objective is to seamlessly connect businesses with their customers by ensuring timely, secure, and cost-efficient deliveries that support your organizational goals and long-term growth.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---------- VISION & MISSION SECTION ---------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Vision Card */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-2">
                            <span className="text-blue-600">Our</span> Vision
                        </h3>
                        <ul className="space-y-4">
                            {vision.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-2">
                            <span className="text-blue-600">Our</span> Mission
                        </h3>
                        <ul className="space-y-4">
                            {mission.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ---------- CLIENTS & COMMITMENT SECTION ---------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-white pt-4">
                    {/* Clients */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-black uppercase tracking-wider border-b-2 border-blue-600 inline-block pb-1">
                            Clients
                        </h3>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify md:text-left">
                            Our guiding principle has always been to ensure a seamless and satisfactory experience for every client. Despite implementing stringent controls and preventive measures, unforeseen human errors may occasionally arise, potentially leading to inconvenience. To effectively address such situations, we have appointed highly trained Customer Care Officers at each Service Centre to promptly resolve concerns and provide appropriate support. This proactive approach has significantly strengthened client confidence and fostered long-term relationships.
                        </p>
                    </div>

                    {/* Commitment */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-black uppercase tracking-wider border-b-2 border-blue-600 inline-block pb-1">
                            Our Commitment
                        </h3>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify md:text-left">
                            We are dedicated to delivering cost-effective, accurate, efficient, and timely transportation services by leveraging modern technologies and best operational practices. Our objective is to consistently meet and exceed specific customer requirements and expectations while maintaining uncompromised service quality. Regardless of the size, industry, or location of the business, we strive to ensure complete satisfaction for all our clients and associates. Integrity, fairness, and accountability are fundamental principles that guide our actions and decisions at every level of the organization.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MasterAbout;