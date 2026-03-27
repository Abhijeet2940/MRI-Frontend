import React from "react";
import maldastation from "../Assests/Malda_Town_Railway_Station.jpg";

export const HeroBooking: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <img src={maldastation} alt="Malda Town Railway Station" />
        </div>
        <div className="hero-form-card">
          <h2>Book Your Institute</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="field">
              <span>Select Institute<span className="required">*</span></span>
              <select required>
                <option value="">Select Institute</option>
                <option>Malda Railway Institute, Malda</option>
                <option>Sahebganj Railway Institute, SahebGanj</option>
                <option>Bhagalpur Railway Institute, Bhagalpur</option>
              </select>
            </label>

            <label className="field">
              <span>Booking Date<span className="required">*</span></span>
              <input
                type="date"
                placeholder="DD-MM-YYYY"
                required
              />
            </label>

            <label className="field">
              <span>Purpose of Booking<span className="required">*</span></span>
              <select required>
                <option value="">Select purpose of booking</option>
                <option>Seminar</option>
                <option>Workshop</option>
                <option>Celebration</option>
                <option>Wedding</option>
                <option>Others</option>
              </select>
            </label>

            <button type="submit" className="primary-button full-width">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

