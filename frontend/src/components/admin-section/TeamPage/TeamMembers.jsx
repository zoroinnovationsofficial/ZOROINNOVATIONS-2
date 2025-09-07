import React from 'react';
import img3 from '../../../assets/TeamPage/img3.png';
import img4 from '../../../assets/TeamPage/img4.png';
import img5 from '../../../assets/TeamPage/img5.png';
import img6 from '../../../assets/TeamPage/img6.png';
import img7 from '../../../assets/TeamPage/img7.png';

const TeamMembers = () => {
  const team = [
    { name: 'Ethan Harper', role: 'Lead Developer', img: img7 },
    { name: 'Olivia Bennett', role: 'Product Manager', img: img6 },
    { name: 'Noah Carter', role: 'AI Specialist', img: img5 },
    { name: 'Ava Thompson', role: 'UX/UI Designer', img: img4 },
    { name: 'Liam Foster', role: 'QA Engineer', img: img3 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
      {team.map((member, idx) => (
        <div
          key={idx}
          className="hover:bg-white/10 hover:backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-white
          transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500"
        >
          <img
            src={member.img}
            alt={member.name}
            className="rounded-xl mb-4 transition-opacity duration-300 hover:opacity-90"
          />
          <div className="font-bold text-lg">{member.name}</div>
          <div className="text-orange-400 font-semibold text-sm">{member.role}</div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;


