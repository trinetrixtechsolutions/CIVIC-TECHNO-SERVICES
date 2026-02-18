import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const services = [
  {
    id: 1,
    icon: <ElectricalServicesIcon className="text-5xl text-blue-700" />,
    title: "Electrical Infrastructure",
    description: "HT & LT Panels, Transformers, Cable Laying (up to 220 Kms+), Distribution Boards, Industrial Internal & External Wiring, DG & UPS Installations.",
    features: [
      "High Tension & Low Tension Panels",
      "Power Transformers Installation",
      "Extensive Cable Laying Solutions",
      "Distribution Board Design & Installation",
      "DG & UPS Power Systems"
    ]
  },
  {
    id: 2,
    icon: <AcUnitIcon className="text-5xl text-cyan-700" />,
    title: "HVAC & High-Side Engineering",
    description: "Clean Room Installations, Chiller Yards, Humidification Systems, Air Handling Units (AHU), Industrial Ventilation Systems.",
    features: [
      "Clean Room HVAC Solutions",
      "Chiller Plant Installation",
      "Humidification & Dehumidification",
      "Air Handling Units (AHU)",
      "Industrial Ventilation Systems"
    ]
  },
  {
    id: 3,
    icon: <SettingsRemoteIcon className="text-5xl text-indigo-700" />,
    title: "Automation & Smart Systems",
    description: "Building Management Systems (BMS), Energy Monitoring & Optimization.",
    features: [
      "Building Management Systems",
      "Energy Monitoring Solutions",
      "Smart Building Automation",
      "Control System Integration",
      "Energy Optimization Strategies"
    ]
  },
  {
    id: 4,
    icon: <LocalFireDepartmentIcon className="text-5xl text-red-700" />,
    title: "Fire & Safety Systems",
    description: "Fire Alarm Systems (FASS), Access Control Systems (ACS), CCTV Surveillance.",
    features: [
      "Fire Alarm Systems (FASS)",
      "Access Control Systems (ACS)",
      "CCTV Surveillance",
      "Emergency Response Systems",
      "Safety Compliance Solutions"
    ]
  },
  {
    id: 5,
    icon: <EngineeringIcon className="text-5xl text-gray-700" />,
    title: "Consulting & Project Engineering",
    description: "Electrical Design, Single Line Diagrams, BOQ Preparation, Cost Estimation, Testing & Commissioning, and O&M Contracts.",
    features: [
      "Electrical System Design",
      "Single Line Diagrams",
      "Bill of Quantities (BOQ)",
      "Cost Estimation & Budgeting",
      "Testing, Commissioning & O&M"
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === Number(id));

  if (!service) return <div className="text-center py-20 text-xl">Service not found.</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-slate-50 rounded-2xl shadow-xl p-10 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          {service.icon}
          <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{service.title}</h1>
          <p className="text-gray-600 text-center mb-4">{service.description}</p>
        </div>
        <h2 className="text-lg font-semibold text-blue-700 mb-4">Key Features</h2>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircleOutlineIcon className="text-blue-600 text-lg mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
          Back to Services
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetail;
