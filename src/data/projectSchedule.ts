export interface ProjectScheduleItem {
    id: number;
    synopsis: string;
    client: string;
    typeOfWork: string;
    location: string;
}

export const projectSchedule: ProjectScheduleItem[] = [
    { id: 1, synopsis: "FLP Lights & Power Socket Works, Armored Cable Laying 25Kms, Earthing & AHU Works", client: "Society for Integrated Circuit Technology & Applied Research (SITAR)", typeOfWork: "Class 100 Area", location: "Bangalore" },
    { id: 2, synopsis: "FLP Lights & Power Socket Works, Armored Cable Laying 16Kms, Cable Tray Works", client: "Nizams Institute of Medical Sciences", typeOfWork: "Operation Theatres", location: "Hyderabad" },
    { id: 3, synopsis: "Street Light Poles, Cable Laying, Clean Room Electrification", client: "Indian Immunologicals Limited (IIL)", typeOfWork: "Lab Area for R&D", location: "Gachibowli, Hyderabad" },
    { id: 4, synopsis: "Installation of Cables 170Kms, Light Fittings, PCC & MCC Panels", client: "Indian Immunologicals Limited (IIL)", typeOfWork: "Lab Area QA, QC, AH&HH", location: "Karakapatla, Hyderabad" },
    { id: 5, synopsis: "Street Light Poles, Cable Laying, LAN & Telephone, Lightning", client: "EPE Process Filters & Accumulators Pvt. Ltd.", typeOfWork: "New Unit Expansion", location: "Gandhinagar, Hyderabad" },
    { id: 6, synopsis: "FLP Lights & Power Socket Works, Armored Cable Laying 20Kms", client: "National Centre for Nanoscience & Nanotechnology (University of Mumbai)", typeOfWork: "Class 100 Area", location: "Mumbai" },
    { id: 7, synopsis: "FLP Lights & Power Socket Works, Armored Cable Laying 27Kms", client: "Research Centre Imarat (RCI)", typeOfWork: "Class 100 Area", location: "Balapur, Hyderabad" },
    { id: 8, synopsis: "Internal Wiring 210Kms, DBs, Switch & Socket Fixing", client: "India Bulls Centrum Park", typeOfWork: "Flats Internal Works", location: "Hyderabad" },
    { id: 9, synopsis: "External Cable Laying 155Kms, HT Yard, Panels, Transformers", client: "Lodha Bellezza", typeOfWork: "External Works Tower 7A & 7B", location: "KPHB, Hyderabad" },
    { id: 10, synopsis: "Cables 35Kms, Light Fittings, AHU, DB Works", client: "Colgate Palmolive", typeOfWork: "Lab for QA & QC", location: "Sanand, Gujarat" },
    { id: 11, synopsis: "External Cable Laying 155Kms, HT Yard, Panels", client: "Lanco Hills", typeOfWork: "External Works Tower 6 & 7", location: "Manikonda, Hyderabad" },
    { id: 12, synopsis: "Cables 60Kms, Light Fittings, AHU, BMS", client: "National Dairy Development Board (NDDB)", typeOfWork: "Lab Area", location: "Bangalore" },
    { id: 13, synopsis: "Cables 75Kms, AHU, DB Works", client: "Indian Institute of Technology (IIT)", typeOfWork: "Clean Room Lab Area", location: "New Delhi" },
    { id: 14, synopsis: "Cables 220Kms, BMS, FAS, ACS, CCTV, LAN", client: "Institute of Medical Sciences (IMS, BHU)", typeOfWork: "Medical College Lab & Hostel", location: "Varanasi, UP" },
    { id: 15, synopsis: "Cables 22Kms, Power & Lighting, AHU", client: "Sri Satya Sai Trust", typeOfWork: "Museum", location: "Puttaparthi" },
    { id: 16, synopsis: "Cables 55Kms, Power & Lighting, AHU", client: "Granules India Limited", typeOfWork: "Clean Room Lab Area", location: "Gagilapur, Hyderabad" },
    { id: 17, synopsis: "Cables 60Kms, Power & Lighting", client: "Jamia Millia Islamia University", typeOfWork: "Medical College Lab Area", location: "New Delhi" },
    { id: 18, synopsis: "Cables 35Kms, Power & Lighting", client: "RAS Life Sciences", typeOfWork: "Clean Room Lab Area", location: "Karakapatla, Hyderabad" },
    { id: 19, synopsis: "External & Internal Cable Works", client: "Integrated Clean Room Technologies Pvt. Ltd. (Iclean)", typeOfWork: "New Unit Expansion", location: "Baroda, Gujarat" },
    { id: 20, synopsis: "External & Internal Cable Works", client: "MRC Iclean Systems Pvt. Ltd.", typeOfWork: "New Unit Expansion", location: "Hyderabad" },
    { id: 21, synopsis: "FLP Lights & Power Socket Works", client: "Rainbow Hospitals", typeOfWork: "Operation Theatres", location: "Bangalore" },
    { id: 22, synopsis: "FLP Lights & Power Socket Works, CCTV, BMS, ACS", client: "Centre for Millimeter Wave Semiconductor Devices & Systems (CMSDS)", typeOfWork: "Class 100 Area", location: "Kolkata" },
    { id: 23, synopsis: "Cables 70Kms, Power & Lighting", client: "GVK Biosciences Pvt. Ltd.", typeOfWork: "New Unit Expansion", location: "Hyderabad" },
    { id: 24, synopsis: "Cables 20Kms, Power & Lighting", client: "Mondelez International", typeOfWork: "Clean Room Lab Area", location: "Sri City, Nellore" },
    { id: 25, synopsis: "Cables 42Kms, Power & Lighting", client: "Sarvotham Care Pvt. Ltd.", typeOfWork: "Clean Room Lab Area", location: "Hyderabad" },
    { id: 26, synopsis: "FLP Lights & Power Socket Works, CCTV, BMS", client: "Safe Pharma", typeOfWork: "Clean Room Lab Area", location: "Narasaraopet, AP" },
    { id: 27, synopsis: "Internal Wiring 210Kms, LAN, CCTV, ACS", client: "Integrated Clean Room Technologies Pvt. Ltd. (Iclean)", typeOfWork: "Corporate Office", location: "Kompally, Hyderabad" },
    { id: 28, synopsis: "Street Light Poles, Cable Laying, CCTV", client: "Mylan Labs", typeOfWork: "New Unit Expansion", location: "Lusaka, Zambia" },
    { id: 29, synopsis: "Cables 45Kms, Power & Lighting", client: "Stelies Bio Pharma", typeOfWork: "New Unit Expansion", location: "Bangalore" },
    { id: 30, synopsis: "Cables 36Kms, Power & Lighting", client: "Chemo India Formulation Pvt. Ltd.", typeOfWork: "New Unit Expansion", location: "Hyderabad" },
    { id: 31, synopsis: "Street Light Poles, Cable Laying", client: "Kamal Encon Pvt. Ltd.", typeOfWork: "New Unit Expansion", location: "New Delhi" },
    { id: 32, synopsis: "FLP Lights & Power Socket Works", client: "Asian Institute of Gastroenterology (AIG)", typeOfWork: "New Unit Expansion", location: "Gachibowli, Hyderabad" },
    { id: 33, synopsis: "FLP Lights & Power Socket Works", client: "National Institute of Animal Biotechnology (NIAB)", typeOfWork: "New Unit Expansion", location: "Gachibowli, Hyderabad" },
    { id: 34, synopsis: "Cables 18Kms, Power & Lighting", client: "CCL Products India Ltd", typeOfWork: "Clean Room Lab", location: "Sulluripet, AP" },
    { id: 35, synopsis: "Cables 35Kms, Power & Lighting", client: "Andhra Pradesh Health & Medical Dept.", typeOfWork: "Operation Theaters", location: "All District HQs" },
    { id: 36, synopsis: "FLP Lights & Power Socket Works 80Kms", client: "Maruti Suzuki", typeOfWork: "Battery Production Plant", location: "Becharaji, Gujarat" },
    { id: 37, synopsis: "Cables 60Kms, DGs, UPS, Control Panels", client: "National Dairy Development Board", typeOfWork: "Animal IVF Labs", location: "Chiplima, Odisha" },
    { id: 38, synopsis: "FLP Lights & Power Socket Works 33Kms", client: "IIT Guwahati", typeOfWork: "Testing Laboratory", location: "Guwahati" }
];
