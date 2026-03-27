import React from "react";
import { useNavigate } from "react-router-dom";
import { institutes } from "../data/institutes";

export const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="page-section">
      <div className="container">
        {/* About Header */}
        <div className="about-header">
          <div className="about-header-content">
            <h1>About Malda Division Railway Institute</h1>
            <p className="about-header-subtitle">Eastern Railway</p>
            <p className="about-header-description">
              Malda Division Railway Institute, Eastern Railway serves as the central hub for railway employee welfare and community engagement. Our institutes enable seamless online reservations for events and facilities across the Malda Division. From seminars and training sessions to cultural programs and recreational activities, our platform streamlines bookings across three institutes, ensuring a smooth experience for organizing official and community events.
            </p>
          </div>
          <div className="about-header-image">
            <div className="image-placeholder">Malda Division</div>
          </div>
        </div>

          {/* Institutes Section */}
          <div className="about-institutes">
            <h2>Our Institutes</h2>
            <div className="institutes-grid">
              {institutes.map((inst) => (
                <div key={inst.id} className="institute-simple-card">
                  <h3>{inst.name}</h3>
                  <p className="institute-location">📍 {inst.location}</p>
                  <p className="institute-established">Established: {inst.established}</p>
                  <p className="institute-desc">{inst.description}</p>
                  <div className="institute-card-buttons">
                    <button className="primary-button" onClick={() => navigate("/booking")}>Book Now</button>
                    <button 
                      className="secondary-button"
                      onClick={() => navigate(`/institute/${inst.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="about-team">
            <h2>Meet Our Team</h2>
            
            <div className="team-head">
              <h3>Malda Division Railway Institute</h3>
              <div className="team-member">
                <h4>Rajesh Kumar Sharma</h4>
                <p className="member-role">Senior Divisional Personnel Officer</p>
                <p className="member-contact">📧 srdpomalda@gmail.com</p>
              </div>
            </div>

            <div className="team-institutes">
              <div className="team-institute-group">
                <h4>Malda Railway Institute</h4>
                <div className="team-members-list">
                  <div className="team-member-item">
                    <h5>Priya Mishra</h5>
                    <p>(Welfare Inspector)</p>
                    <p>📧 priyamishra1987@gmail.com</p>
                  </div>
                  <div className="team-member-item">
                    <h5>Vikram Singh</h5>
                    <p>(Secretary)</p>
                    <p>📞 +91 9456-123456</p>
                  </div>
                </div>
              </div>

              <div className="team-institute-group">
                <h4>Sahibganj Railway Institute</h4>
                <div className="team-members-list">
                  <div className="team-member-item">
                    <h5>Amit Kumar</h5>
                    <p>(Welfare Inspector)</p>
                    <p>📧 amitkumar2010@gmail.com</p>
                  </div>
                  <div className="team-member-item">
                    <h5>Neha Sharma</h5>
                    <p>(Secretary)</p>
                    <p>📞 +91 9823-456789</p>
                  </div>
                </div>
              </div>

              <div className="team-institute-group">
                <h4>Bhagalpur Railway Institute</h4>
                <div className="team-members-list">
                  <div className="team-member-item">
                    <h5>Suresh Patel</h5>
                    <p>(Welfare Inspector)</p>
                    <p>📧 sureshpatel1990@gmail.com</p>
                  </div>
                  <div className="team-member-item">
                    <h5>Anjali Verma</h5>
                    <p>(Secretary)</p>
                    <p>📞 +91 8765-432109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

