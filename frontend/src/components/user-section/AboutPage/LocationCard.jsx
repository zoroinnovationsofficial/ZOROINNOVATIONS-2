import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const LocationCard = ({ image, title, address, city, phone, hours, email }) => {
  return (
    <div className="bg-purple-100 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={`${title} Office`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-600 mt-1" />
            <div>
              <p className="text-gray-900">{address}</p>
              <p className="text-gray-600">{city}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-600" />
            <p className="text-gray-900">{phone}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <p className="text-gray-900">{email}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-gray-600" />
            <p className="text-gray-900">{hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
