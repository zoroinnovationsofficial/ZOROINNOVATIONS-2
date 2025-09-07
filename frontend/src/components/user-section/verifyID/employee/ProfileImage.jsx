import React from "react";
import { HiUser } from "react-icons/hi";

const ProfileImage = React.memo(
  ({ employeeData = {}, imageLoaded, setImageLoaded }) => {
    const hasImage = Boolean(employeeData.profileImage);
    const displayName =
      employeeData.fullName || employeeData.name || "Employee";

    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center">
        <div className="relative">
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {!imageLoaded && (
              <div className="w-full h-full bg-gray-300 animate-pulse flex items-center justify-center">
                <HiUser className="w-16 h-16 text-gray-400" />
              </div>
            )}
            {hasImage && (
              <img
                src={employeeData.profileImage}
                alt={`${displayName} profile`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);

ProfileImage.displayName = "ProfileImage";

export default ProfileImage;
