import { FC } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ id, icon, title, description }) => (
  <Card className="group relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 transition-transform hover:-translate-y-2" elevation={0}>
    <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
    <CardContent className="flex flex-col flex-grow items-center p-8">
      <div className="mb-6 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <Typography variant="h6" className="font-bold text-gray-900 mb-2 text-center">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600 text-center mb-4">
        {description}
      </Typography>
      <Button
        component={Link}
        to={`/services/${id}`}
        variant="contained"
        color="primary"
        className="mt-auto normal-case bg-blue-700 hover:bg-blue-900 text-white px-6 py-2 rounded-full shadow-md"
      >
        View Details
      </Button>
    </CardContent>
  </Card>
);

export default ServiceCard;
