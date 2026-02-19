// src/components/projects/projects.ts

// Placeholder for projects without specific images
const placeholderImg = "https://ehealth.eletsonline.com/wp-content/uploads/2020/07/IIT-Guwahati.jpg";

export interface Project {
  id: number;
  name: string; // Client Name
  description: string; // Scope of Work
  projectType: string; // Type of work
  location: string;
  category: string;
  value: string; // Added Value field
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Society for Integrated Circuit Technology and Applied Research (SITAR)",
    description: "FLP Lights & power socket works, Armored cable laying 25Kms, earthing & AHU works",
    projectType: "Class 100 area",
    location: "Bangalore",
    category: "Industrial",
    value: "Rs. 60 Lks",
    image: placeholderImg
  },
  {
    id: 2,
    name: "Nizams Institute of Medical Sciences",
    description: "FLP Lights & power socket works, Armored cable laying 16Kms, Cable tray works",
    projectType: "Operation Theatres",
    location: "Hyderabad",
    category: "Healthcare",
    value: "Rs. 35 Lks",
    image: placeholderImg 
  },
  {
    id: 3,
    name: "Indian Immunologicals Limited (IIL)",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Clean room electrification, lightning and lighting works",
    projectType: "Lab area for R&D",
    location: "Gachibowli, Hyd",
    category: "Industrial",
    value: "Rs. 55 Lks",
    image: placeholderImg
  },
  {
    id: 4,
    name: "Indian Immunologicals Limited (IIL)",
    description: "Installation of Cables 170 Kms, light fittings, PCC & MCC Panels, AHU, DB works",
    projectType: "Lab area for QA, QC, AH&HH",
    location: "Karakapatla, Hyd",
    category: "Industrial",
    value: "Rs. 77 Lks",
    image: placeholderImg
  },
  {
    id: 5,
    name: "EPE Process Filters & Accumulators Pvt. Ltd.",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Lan & Telephone, lightning and lighting works",
    projectType: "New Unit Expantion",
    location: "Gandhinagar, Hyd",
    category: "Industrial",
    value: "Rs. 45 Lks",
    image: placeholderImg
  },
  {
    id: 6,
    name: "National Centre for Nanoscience and Nanotechnology (NCNNUM)",
    description: "FLP Lights & power socket works, Armored cable laying 20Kms, earthing & AHU works",
    projectType: "Class 100 area",
    location: "Mumbai",
    category: "Healthcare",
    value: "Rs. 38 Lks",
    image: placeholderImg
  },
  {
    id: 7,
    name: "Research Centre Imarat (RCI)",
    description: "Supply and installation of FLP Lights & power socket works, Armored cable laying 27Kms, earthing, AHU works",
    projectType: "Class 100 area",
    location: "Balapur, Hyd",
    category: "Industrial",
    value: "Rs. 70 Lks",
    image: placeholderImg
  },
  {
    id: 8,
    name: "India Bulls Centrum Park",
    description: "Internal wiring 210Kms, DBs fixing, switch & sockets fixing etc..",
    projectType: "Flats Internal Works",
    location: "Lower tankbund, Hyd",
    category: "Residential",
    value: "Rs. 40 Lks",
    image: placeholderImg
  },
  {
    id: 9,
    name: "Lodha Bellezza",
    description: "External cables laying 155 Kms, HT Yard, HT&LT panels, Transformers, Cable trays 22 Kms, DB works, Circuit wiring, LAN, Telephone & TV woks, Earthing & Lightning works",
    projectType: "External Works Tower 7A & 7B",
    location: "KPHB, Hyd",
    category: "Residential",
    value: "Rs. 90 Lks",
    image: placeholderImg
  },
  {
    id: 10,
    name: "Colgate Palmolive",
    description: "Supply & installation of Cables 35Kms, light fittings, AHU, DB works and Cable tray works",
    projectType: "Lab for QA & QC",
    location: "Sanand, Gujarath",
    category: "Industrial",
    value: "Rs. 35 Lks",
    image: placeholderImg
  },
  {
    id: 11,
    name: "Lanco Hills",
    description: "External cables laying 155 Kms, HT Yard, HT&LT panels, Transformers, Cable trays 22 Kms, DB works, Earthing & Lightning works",
    projectType: "External Works Tower 6&7",
    location: "Manikonda, Hyd",
    category: "Residential",
    value: "Rs. 42 Lks",
    image: placeholderImg
  },
  {
    id: 12,
    name: "National Dairy Development Board (NDDB)",
    description: "Supply & installation of Cables 60Kms, light fittings, AHU, DB works, BMS and Cable tray works",
    projectType: "Lab Area",
    location: "Bangalore",
    category: "Industrial",
    value: "Rs. 65 Lks",
    image: placeholderImg
  },
  {
    id: 13,
    name: "Indian Institute of Technology (IIT)",
    description: "Supply & installation of Cables 75Kms, light fittings, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "New Delhi",
    category: "Assembly",
    value: "Rs. 50 Lks",
    image: placeholderImg
  },
  {
    id: 14,
    name: "Institute of Medical Science, Banaras Hindu University (IMS, BHU)",
    description: "Supply & installation of Cables 220 Kms, light fittings, AHU, DB works, internal wiring, Cable tray works, BMS, FAS, ACS, CCTV, LAN & Telephone works",
    projectType: "Medical College & Hostel",
    location: "Varanasi, UP",
    category: "Healthcare",
    value: "Rs. 190 Lks",
    image: placeholderImg
  },
  {
    id: 15,
    name: "Sri Satya Sai Trust",
    description: "Supply & installation of Cables 22Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Museum",
    location: "Puttaparthi",
    category: "Assembly",
    value: "Rs. 42 Lks",
    image: placeholderImg
  },
  {
    id: 16,
    name: "Granuels India Limited",
    description: "Supply & installation of Cables 55Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Gagilapur, Hyd",
    category: "Industrial",
    value: "Rs. 120 Lks",
    image: placeholderImg
  },
  {
    id: 17,
    name: "Jamia Millia Islamia University",
    description: "Supply & installation of Cables 60Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Medical College Lab Area",
    location: "New Delhi",
    category: "Assembly",
    value: "Rs. 70 Lks",
    image: placeholderImg
  },
  {
    id: 18,
    name: "RAS Life Sciences",
    description: "Supply & installation of Cables 35Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Karakapatla, Hyd",
    category: "Industrial",
    value: "Rs. 40 Lks",
    image: placeholderImg
  },
  {
    id: 19,
    name: "Integrated Clean Room Technologies Pvt. Ltd. (Iclean)",
    description: "Supply and installation of external and internal cable works, cable tray works, earthing, panel and DB works",
    projectType: "New Unit Expantion",
    location: "Baroda, Gujarath",
    category: "Industrial",
    value: "Rs. 85 Lks",
    image: placeholderImg
  },
  {
    id: 20,
    name: "MRC Iclean Systems Pvt. Ltd.",
    description: "Supply and installation of external and internal cable works, cable tray works, earthing, panel and DB works",
    projectType: "New Unit Expantion",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 62 Lks",
    image: placeholderImg
  },
  {
    id: 21,
    name: "Rainbow Hospitals",
    description: "FLP Lights & power socket works, Armored cable laying 20Kms, Cable tray works",
    projectType: "Operation Theatres",
    location: "Bangalore",
    category: "Healthcare",
    value: "Rs. 38 Lks",
    image: placeholderImg
  },
  {
    id: 22,
    name: "Centre for Millimeter Wave Semiconductor Devices & Systems (CMSDS)",
    description: "FLP Lights & power socket works, Armored cable laying 35Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "Class 100 Area",
    location: "Baruipur, Kolkata",
    category: "Industrial",
    value: "Rs. 170 Lks",
    image: placeholderImg
  },
  {
    id: 23,
    name: "GVK Biosciences Pvt. Ltd.",
    description: "Supply & installation of Cables 70Kms, power & lighting, AHU, DB works, Cable tray works, Panel and HT works",
    projectType: "New Unit Expantion",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 110 Lks",
    image: placeholderImg
  },
  {
    id: 24,
    name: "Mondelez International",
    description: "Supply & installation of Cables 20Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Sri city, Nellore",
    category: "Industrial",
    value: "Rs. 30 Lks",
    image: placeholderImg
  },
  {
    id: 25,
    name: "Sarvotham Care Pvt. Ltd.",
    description: "Supply & installation of Cables 42Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Clean Room Lab Area",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 56 Lks",
    image: placeholderImg
  },
  {
    id: 26,
    name: "Safe Pharma",
    description: "Lights & power socket works, Armored cable laying 35Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "Clean Room Lab Area",
    location: "Narasarao pet, AP",
    category: "Industrial",
    value: "Rs. 105 Lks",
    image: placeholderImg
  },
  {
    id: 27,
    name: "Integrated Clean Room Technologies Pvt. Ltd. (Iclean)",
    description: "Internal wiring 210Kms, DBs fixing, switch & sockets fixing, LAN, Telephone, CCTV, ACS, FAS, cable tray works",
    projectType: "Corporate Office",
    location: "Kompally, Hyd",
    category: "Commercial",
    value: "Rs. 85 Lks",
    image: placeholderImg
  },
  {
    id: 28,
    name: "Mylan Labs",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Clean room electrification, lightning and lighting works, CCTV, ACS, FAS, LAN and Telephone works",
    projectType: "New Unit Expantion",
    location: "Lusaka, Zambia",
    category: "Industrial",
    value: "Rs. 135 Lks",
    image: placeholderImg
  },
  {
    id: 29,
    name: "Stelies Bio Pharma",
    description: "Supply & installation of Cables 45Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "New Unit Expantion",
    location: "Bangalore",
    category: "Industrial",
    value: "Rs. 82 Lks",
    image: placeholderImg
  },
  {
    id: 30,
    name: "Chemo India Pharmulation Pvt. Ltd.",
    description: "Supply & installation of Cables 36Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "New Unit Expantion",
    location: "Hyderabad",
    category: "Industrial",
    value: "Rs. 65 Lks",
    image: placeholderImg
  },
  {
    id: 31,
    name: "Kamal Encon Pvt. Ltd.",
    description: "Supply and installation of Street light poles, Cable laying, earthing, Clean room electrification, lightning and lighting works, CCTV, ACS, FAS, LAN and Telephone works",
    projectType: "New Unit Expantion",
    location: "New Delhi",
    category: "Industrial",
    value: "Rs. 126 Lks",
    image: placeholderImg
  },
  {
    id: 32,
    name: "Asian Institute of Gastroenterology (AIG)",
    description: "Lights & power socket works, Armored cable laying 33Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "New Unit Expansions",
    location: "Gachibowli, Hyd",
    category: "Healthcare",
    value: "Rs. 52 Lks",
    image: placeholderImg
  },
  {
    id: 33,
    name: "National Institute of Animal Biotechnology (NIAB)",
    description: "Lights & power socket works, Armored cable laying 55Kms, earthing, AHU works, CCTV, BMS, ACS, FAS, LAN & Telephone works",
    projectType: "New Unit Expansions",
    location: "Gachibowli, Hyd",
    category: "Healthcare",
    value: "Rs. 215 Lks",
    image: placeholderImg
  },
  {
    id: 34,
    name: "CCL Products India Ltd",
    description: "Supply & installation of Cables 18Kms, power & lighting Works",
    projectType: "Clean Room Lab",
    location: "Sulluripet, AP",
    category: "Industrial",
    value: "Rs. 28 Lks",
    image: placeholderImg
  },
  {
    id: 35,
    name: "Andhra Pradesh Health & Medical Dept.",
    description: "Supply & installation of Cables 35Kms, power & lighting, AHU, DB works and Cable tray works",
    projectType: "Operation Theaters",
    location: "All District Head Quarters",
    category: "Healthcare",
    value: "Rs. 120 Lks",
    image: placeholderImg
  },
  {
    id: 36,
    name: "Maruthi Suzuki",
    description: "Lights & power socket works, Armored cable laying 80Kms, earthing, AHU works, CCTV, BMS, CS, FAS, LAN & Telephone works",
    projectType: "Battery Production Plant",
    location: "Becharaji, Gujarath",
    category: "Industrial",
    value: "Rs. 446 Lks",
    image: placeholderImg
  },
  {
    id: 37,
    name: "National Diary Development Board",
    description: "Supply and installation of cables 60Kms, point wiring, DGs, UPS, control panels light fittings etc...",
    projectType: "Animal IVF Labs",
    location: "Chiplima, Odisha",
    category: "Industrial",
    value: "Rs. 465 Lks",
    image: placeholderImg
  },
  {
    id: 38,
    name: "IIT Guwahati",
    description: "Lights & power socket works, Armored cable laying 33Kms, earthing, AHU works, CCTV, BMS, CS, FAS, LAN & Telephone works",
    projectType: "Testing Laboratory",
    location: "IIT Guwahati",
    category: "Assembly",
    value: "N/A", // Value was not in text
    image: placeholderImg
  }
];