// src/components/Services/ServiceCard.tsx
import { FC } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string; // Added for detail page usage
  heroImage?: string; // Added for detail page usage
}

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  icon,
  title,
  description,
}) => (
  <div className="group bg-white rounded-2xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-300 hover:border-[#c59d5f] shadow-sm hover:shadow-xl">

    {/* Icon */}
    <div className="mb-6 w-16 h-16 rounded-xl bg-[#c59d5f]/10 flex items-center justify-center text-[#c59d5f] transition-all duration-300 group-hover:bg-[#c59d5f] group-hover:text-white">
      {icon}
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 text-sm leading-relaxed mb-6">
      {description}
    </p>

    {/* Button */}
    <Link
      to={`/services/${id}`}
      className="mt-auto inline-block text-sm font-semibold text-[#c59d5f] border border-[#c59d5f] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#c59d5f] hover:text-white text-center"
    >
      View Details
    </Link>

  </div>
);

export default ServiceCard;