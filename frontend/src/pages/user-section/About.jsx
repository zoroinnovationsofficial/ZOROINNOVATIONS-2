import React, { useState, useEffect } from "react";
import SectionHeader from "../../components/user-section/AboutPage/SectionHeader.jsx";
import OurStorySection from "../../components/user-section/AboutPage/ourMissionSection";
import MissionVisionSection from "../../components/user-section/AboutPage/missionVisionSection";
import CoreValueSection from "../../components/user-section/AboutPage/coreValueSection";
import LeadershipCard from "../../components/user-section/AboutPage/LeadershipCard.jsx";
import AwardCard from "../../components/user-section/AboutPage/AwardCard.jsx";
import LocationCard from "../../components/user-section/AboutPage/LocationCard.jsx";
import { getAllTeamMembers } from "../../api/teamMemberApi.js";
import TimelineItem from "../../components/user-section/AboutPage/TimelineItem.jsx";

const awards = [
  { image: "/Overlay-8.svg", title: "Best Financial Advisory Firm", source: "Financial Times Excellence Awards", year: "2023, 2022, 2021" },
  { image: "/Overlay-9.svg", title: "Top Client Satisfaction", source: "Investment News Recognition", year: "2023" },
  { image: "/Overlay-10.svg", title: "SEC Registered", source: "Investment Advisor", year: "Since 2000" },
  { image: "/Overlay-11.svg", title: "FINRA Member", source: "Financial Industry Regulatory Authority", year: "Active Member" },
];

const locations = [
  {
    image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Karnataka Headquarters",
    address: "117 Reddys Colony Street , Thondedhavi , Gowribidanuru",
    city: "Chikkaballapur, Karnataka India 561213",
    phone: "(+91) 9481414295",
    email: "zoroinnovations@yahoo.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM",
  },
];

const timelineEvents = [
  { image: "/Background.svg", year: "2000", title: "Company Founded", description: "Sarah Mitchell and David Chen establish FinSecure with a vision to provide personalized financial advisory services." },
  { image: "/Background-1.svg", year: "2005", title: "First Major Expansion", description: "Opened our Chicago office and expanded our team to serve clients across the Midwest region." },
  { image: "/Background-2.svg", year: "2010", title: "Technology Innovation", description: "Launched our proprietary financial planning platform, revolutionizing how we serve our clients." },
  { image: "/Background-3.svg", year: "2015", title: "West Coast Expansion", description: "Opened our Los Angeles office, establishing a strong presence on the West Coast." },
  { image: "/Background-4.svg", year: "2020", title: "Digital Transformation", description: "Successfully transitioned to hybrid service model, offering both in-person and virtual consultations." },
  { image: "/Background-5.svg", year: "2023", title: "Industry Recognition", description: "Received multiple industry awards for excellence in client service and financial advisory services." },
  { image: "/Background-6.svg", year: "2025", title: "Future Growth", description: "Continuing to expand our services and reach, with plans for additional offices and enhanced digital capabilities.", isFuture: true },
];

const About = () => {
  const [leadershipTeam, setLeadershipTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const members = await getAllTeamMembers();
        if (Array.isArray(members)) {
          setLeadershipTeam(members);
        } else if (members && Array.isArray(members.data)) {
          setLeadershipTeam(members.data);
        } else {
          setLeadershipTeam([]);
        }
      } catch (error) {
        console.error("Failed to fetch team members:", error);
        setLeadershipTeam([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // 👇 Handle direct navigation to "#leadership-team"
  useEffect(() => {
    if (window.location.hash === "#leadership-team") {
      const el = document.getElementById("leadership-team");
      if (el) {
        el.scrollIntoView({ behavior: "auto" }); // instant scroll, no delay
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SectionHeader />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValueSection />

      {/* Leadership Team Section */}
      <section id="leadership-team" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced leadership team brings together decades of financial expertise and industry knowledge.
          </p>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {leadershipTeam.map((member, index) => (
              <LeadershipCard key={index} image={member.image} name={member.name} title={member.title} bio={member.bio} />
            ))}
          </div>
        )}

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Team Members
          </button>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition of our commitment to excellence and professional standards in the financial services industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <AwardCard key={index} image={award.image} title={award.title} source={award.source} year={award.year} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our convenient locations or schedule a virtual consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-items-center">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
          <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Office locations map" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our journey to becoming a trusted financial services leader.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 w-1 bg-orange-500 h-full"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <TimelineItem key={index} {...event} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
