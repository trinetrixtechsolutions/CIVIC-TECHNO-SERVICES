import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Electrical Infrastructure",
    description:
      "HT & LT Panels, Transformers, Cable Laying, Distribution Boards, DG & UPS Installations.",
    image:
      "https://s3.amazonaws.com/brt.org/GettyImages-875327478-5.jpg?width=2000",
  },
  {
    title: "HVAC & High-Side Engineering",
    description:
      "Clean Rooms, Chillers, AHU Systems, Ventilation & Humidification Systems.",
    image:
      "https://www.rsi.edu/wp-content/uploads/hvac-engineer-working-on-hvac.jpg",
  },
  {
    title: "Automation & Smart Systems",
    description:
      "BMS Systems, Smart Controls, Energy Monitoring & Optimization.",
    image:
      "https://www.iot-now.com/wp-content/uploads/2021/10/Smart-Home-Automation-System.jpg",
  },
  {
    title: "Electronic Management System (EMS)",
    description:
      "Smart Electronic Monitoring, Energy Data Analysis, Load Optimization & Digital Control Solutions.",
    image:
      "https://newgensoft.com/in/wp-content/uploads/sites/3/2025/03/Electronic-Document-Management-scaled.jpg",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="relative mb-14">

          {/* View All Button - Right */}
          <div className="absolute right-0 top-16">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              View All
            </button>
          </div>

          {/* Centered Title + Subtitle */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Delivering integrated electrical and smart engineering solutions for modern infrastructure.
            </p>
          </div>

        </div>

        {/* Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate("/services")}
              className="relative h-64 cursor-pointer group"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">

                {/* Front */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-lg font-bold text-center px-4">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-base font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5">
                    {service.description}
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    Explore
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
