import React, { useState } from "react";

const DigitalResources = () => {
  const resources = [
    {
      id: 1,
      type: "Guide",
      title: "Building Scalable Web Applications",
      img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      shortDesc:
        "Learn the key steps to create a secure and scalable web application tailored to your needs.",
      fullDesc:
        "Learn the key steps to create a secure and scalable web application tailored to your needs. This includes best practices for architecture design, API management, database optimization, and deployment strategies to handle growth efficiently.",
    },
    {
      id: 2,
      type: "Article",
      title: "Securing Your Digital Infrastructure",
      img: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400",
      shortDesc:
        "Discover key strategies to protect your applications, data, and users from cybersecurity threats.",
      fullDesc:
        "Discover key strategies to protect your applications, data, and users from cybersecurity threats. Learn about zero-trust architecture, data encryption, network segmentation, continuous monitoring, and incident response planning.",
    },
    {
      id: 3,
      type: "Webinar",
      title: "Future-Proofing with AI & Automation",
      img: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      shortDesc:
        "Explore how AI can streamline operations, reduce costs, and drive smarter decisions across your business.",
      fullDesc:
        "Explore how AI can streamline operations, reduce costs, and drive smarter decisions across your business. This webinar showcases real-world case studies in predictive analytics, workflow automation, natural language processing, and intelligent decision-making systems.",
    },
  ];

  // Track expanded cards
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle individual card
    }));
  };

  return (
    <section className="digital-resources">
      <div className="container">
        <div className="header">
          <h2>Digital Resources</h2>
          <p>
            Explore our latest insights, guides, and tools to help you make
            smarter technology decisions and drive innovation.
          </p>
        </div>

        <div className="resources-grid">
          {resources.map((res) => (
            <div key={res.id} className="resource-card">
              <div className="resource-image">
                <img src={res.img} alt={res.title} />
              </div>
              <div className="resource-content">
                <span className="resource-type">{res.type}</span>
                <h3>{res.title}</h3>
                <p>{expanded[res.id] ? res.fullDesc : res.shortDesc}</p>
                <button
                  onClick={() => toggleExpand(res.id)}
                  className="read-more"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#0073e6",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "0.95rem",
                  }}
                >
                  {expanded[res.id] ? "View Less ←" : "Read More →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="#" className="view-all-link">
            View All Resources →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalResources;
