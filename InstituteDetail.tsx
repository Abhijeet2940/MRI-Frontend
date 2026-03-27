import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInstituteById, institutes } from "../data/institutes";

export const InstituteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const institute = id ? getInstituteById(id) : null;

  if (!institute) {
    return (
      <div className="container" style={{ padding: "60px 20px" }}>
        <h2>Institute Not Found</h2>
        <p>The institute you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/")} className="primary-button">
          Back to Home
        </button>
      </div>
    );
  }

  const currentIndex = institutes.findIndex((inst) => inst.id === id);
  const previousInstitute = currentIndex > 0 ? institutes[currentIndex - 1] : null;
  const nextInstitute = currentIndex < institutes.length - 1 ? institutes[currentIndex + 1] : null;

  return (
    <section className="institute-detail">
      <div className="container">
        <button
          onClick={() => navigate("/")}
          className="secondary-button back-button"
          style={{ marginBottom: "20px" }}
        >
          ← Back to Home
        </button>

        <article className="detail-content">
          {institute.images && institute.images.length > 0 && (
            <div className="institute-images">
              {institute.images.map((image, index) => (
                <img key={index} src={image} alt={`${institute.name} ${index + 1}`} />
              ))}
            </div>
          )}

          <h1>{institute.name}</h1>

          <div className="institute-meta">
            <span>
              <strong>Established:</strong> {institute.established}
            </span>
            <span>
              <strong>Location:</strong> {institute.location}
            </span>
          </div>

          <div className="main-content">
            <div className="left-column">
              <div className="detail-section">
                <h2>About {institute.name}</h2>
                <p>{institute.fullDescription}</p>
              </div>

              <div className="detail-section">
                <h2>Spaces & Facilities Offered</h2>
                <ul className="facilities-list">
                  {institute.facilities.map((facility) => (
                    <li key={facility}>{facility}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h2>Contact Details</h2>
                <p><strong>Phone:</strong> {institute.contact.phone}</p>
                <p><strong>Address:</strong> {institute.contact.address}</p>
                <p><strong>Email:</strong> {institute.contact.email}</p>
              </div>

              <div className="detail-section">
                <h2>Institute Booking Made Easy</h2>
                <p>Reserve this Eastern Railway Institute for official functions, cultural events, or private gatherings through our streamlined booking system.</p>
                <button className="primary-button" onClick={() => navigate("/booking")}>Book Now</button>
              </div>
            </div>

            <div className="right-column">
              <div className="detail-section terms-card">
                <h2>Terms & Conditions</h2>
                <ul className="terms-list">
                  {institute.terms.map((term, index) => (
                    <li key={index}>{term}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h2>Welfare Inspector</h2>
            <p><strong>Name:</strong> {institute.welfareInspector.name}</p>
            <p><strong>Email:</strong> {institute.welfareInspector.email}</p>
          </div>

          <div className="detail-section">
            <h2>Secretary</h2>
            <p><strong>Name:</strong> {institute.secretary.name}</p>
            <p><strong>Phone:</strong> {institute.secretary.phone}</p>
          </div>
        </article>

        <div className="institute-navigation">
          {previousInstitute && (
            <button
              onClick={() => navigate(`/institute/${previousInstitute.id}`)}
              className="nav-button prev-button"
            >
              ← {previousInstitute.name}
            </button>
          )}
          {nextInstitute && (
            <button
              onClick={() => navigate(`/institute/${nextInstitute.id}`)}
              className="nav-button next-button"
            >
              {nextInstitute.name} →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
