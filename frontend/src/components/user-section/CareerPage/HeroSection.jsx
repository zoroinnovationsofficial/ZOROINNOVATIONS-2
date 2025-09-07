import React, { useState } from 'react';
import styles from './HeaderSection.module.css'; 
import SearchIcon from '../../../assets/Searchicon.svg'; 

const HeroSection = () => {
  const jobData = [
    {
      title: "Frontend Developer",
      description: "Build fast, responsive, and interactive UIs using React, Tailwind, and Next.js.",
      type: "Full-time",
      location: "Remote / Hybrid – Pune",
      salary: "₹10L – ₹18L per annum"
    },
    {
      title: "Product Designer (UI/UX)",
      description: "Craft intuitive and visually stunning user experiences across mobile and web apps.",
      type: "Full-time",
      location: "Remote / Mumbai",
      salary: "₹12L – ₹20L per annum"
    },
    {
      title: "DevOps Engineer",
      description: "Implement CI/CD pipelines, deployments, and maintain scalable infrastructure on AWS/Azure.",
      type: "Full-time",
      location: "Remote / Hybrid – Pune",
      salary: "₹10L – ₹18L per annum"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section className={styles['hero-section']}>
      <h2>Current Job Opportunities</h2>
      <p>Explore our open positions and find your perfect role in our growing team.</p>

      {/* Search Bar */}
      <div className={styles['search-wrapper']}>
        <img src={SearchIcon} alt="Search Icon" className={styles['search-icon']} />
        <input
          type="text"
          placeholder="Search positions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles['search-bar']}
        />
      </div>

      {/* Job List */}
      <div className={styles['job-list']}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className={styles['job-card']} key={index}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <div className={styles['job-tags']}>
                <span className={`${styles.tag} ${styles.blue}`}>{job.type}</span>
                <span className={`${styles.tag} ${styles.gray}`}>{job.location}</span>
                <span className={`${styles.tag} ${styles.gray}`}>{job.salary}</span>
              </div>
              <button 
                className={styles['apply-btn']} 
                onClick={() => handleApplyClick(job)}
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className={styles['no-results']}>No matching jobs found.</p>
        )}
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedJob && (
        <div 
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "1rem"
          }}
        >
          <div 
            style={{
              background: "#fff",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "650px",
              height: "85vh",
              overflowY: "auto",
              padding: "2rem",
              position: "relative",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                background: "none",
                border: "none",
                fontSize: "1.8rem",
                cursor: "pointer",
                color: "#444"
              }}
            >
              ✕
            </button>

            <h2 style={{ marginBottom: "0.5rem", color: "#111" }}>
              Apply for {selectedJob.title}
            </h2>
            <p style={{ marginBottom: "1.5rem", color: "#666" }}>
              Fill in the details below to apply.
            </p>

            {/* Simplified Form */}
            <form 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "1rem", 
                maxWidth: "500px", 
                width: "100%" 
              }}
            >
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                style={{ width: "100%", padding: "0.9rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }} 
              />

              <input 
                type="email" 
                placeholder="Email" 
                required 
                style={{ width: "100%", padding: "0.9rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }} 
              />

              <input 
                type="tel" 
                placeholder="Phone" 
                required 
                style={{ width: "100%", padding: "0.9rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }} 
              />

              {/* Resume Upload */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontWeight: "600", minWidth: "70px" }}>Resume:</span>
                <input 
                  type="file" 
                  required 
                  style={{ flex: 1, padding: "0.5rem", borderRadius: "8px", border: "1px solid #ccc" }} 
                />
              </div>

              <textarea 
                placeholder="Why do you want this role?" 
                rows="4" 
                required 
                style={{ width: "100%", padding: "0.9rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
              />

              <button 
                type="submit" 
                style={{
                  background: "#007bff",
                  color: "#fff",
                  padding: "1rem 1.5rem",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginTop: "1rem",
                  alignSelf: "flex-start",
                  transition: "0.3s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.background = "#0056b3"}
                onMouseOut={(e) => e.currentTarget.style.background = "#007bff"}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
