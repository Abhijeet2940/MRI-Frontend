import React, { useState } from "react";
import { institutes } from "../data/institutes";
import "../styles.css";

export const BookingFormPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    institute: "",
    bookingDate: "",
    purpose: "",
    bookingCategory: "",
    guests: "1",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    panNumber: "",
    aadhaarNumber: "",
    aadhaarFile: null as File | null,
    railwayEmployeeId: "",
    employeeIdProof: null as File | null,
    nonMemberEmployeeId: "",
    nonMemberEmployeeIdProof: null as File | null,
    eventType: "",
    eventDuration: "",
    facilities: [] as string[],
    specialRequirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const input = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: input.files?.[0] || null,
      });
    } else if (type === "checkbox") {
      const input = e.target as HTMLInputElement;
      if (input.checked) {
        setFormData({
          ...formData,
          facilities: [...formData.facilities, value],
        });
      } else {
        setFormData({
          ...formData,
          facilities: formData.facilities.filter((f) => f !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      const isRailwayEmployee = formData.bookingCategory === "Railway Employee / Institute Member";
      const isNonMemberEmployee = formData.bookingCategory === "Non-Member E. Rly. Employee";
      const baseValidation =
        formData.institute &&
        formData.bookingDate &&
        formData.purpose &&
        formData.bookingCategory &&
        formData.guests &&
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phone &&
        formData.panNumber &&
        formData.aadhaarNumber;
      
      const railwayValidation = isRailwayEmployee && (formData.railwayEmployeeId && formData.employeeIdProof);
      const nonMemberValidation = isNonMemberEmployee && (formData.nonMemberEmployeeId && formData.nonMemberEmployeeIdProof);
      
      if (baseValidation && (!isRailwayEmployee || railwayValidation) && (!isNonMemberEmployee || nonMemberValidation)) {
        setStep(2);
      } else {
        alert("Please fill all required fields");
      }
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.eventType && formData.eventDuration) {
      console.log("Form submitted:", formData);
      alert("Booking submitted successfully!");
      // Reset form
      setFormData({
        institute: "",
        bookingDate: "",
        purpose: "",
        bookingCategory: "",
        guests: "1",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        streetAddress: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        panNumber: "",
        aadhaarNumber: "",
        aadhaarFile: null,
        railwayEmployeeId: "",
        employeeIdProof: null,
        nonMemberEmployeeId: "",
        nonMemberEmployeeIdProof: null,
        eventType: "",
        eventDuration: "",
        facilities: [],
        specialRequirements: "",
      });
      setStep(1);
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <section className="page-section booking-form-page">
      <div className="container">
        <div className="booking-form-wrapper">
          <h1>Institute Booking Form</h1>
          <p className="booking-subtitle">Malda Division Railway Institute</p>

          <form onSubmit={step === 1 ? handleNext : handleSubmit} className="booking-form-main">
            <div className="form-step-indicator">
              <span>Step {step} of 2</span>
            </div>

            {step === 1 ? (
              <div className="form-step">
                <h2>Booking & Contact Details</h2>

                <div className="form-section-title">Booking Information</div>

                <div className="form-group">
                  <label htmlFor="institute">
                    Select Institute <span className="required">*</span>
                  </label>
                  <select
                    id="institute"
                    name="institute"
                    value={formData.institute}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose an institute</option>
                    {institutes.map((inst) => (
                      <option key={inst.id} value={inst.id}>
                        {inst.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="bookingDate">
                      Booking Date <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="bookingDate"
                      name="bookingDate"
                      value={formData.bookingDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="purpose">
                      Purpose of Booking <span className="required">*</span>
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select purpose</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Celebrating">Celebrating</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Booking Category <span className="required">*</span>
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bookingCategory"
                        value="Railway Employee / Institute Member"
                        checked={formData.bookingCategory === "Railway Employee / Institute Member"}
                        onChange={handleChange}
                        required
                      />
                      Railway Employee / Institute Member
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bookingCategory"
                        value="Non-Member E. Rly. Employee"
                        checked={formData.bookingCategory === "Non-Member E. Rly. Employee"}
                        onChange={handleChange}
                        required
                      />
                      Non-Member E. Rly. Employee
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bookingCategory"
                        value="Ex. Member / Retired Person"
                        checked={formData.bookingCategory === "Ex. Member / Retired Person"}
                        onChange={handleChange}
                        required
                      />
                      Ex. Member / Retired Person
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bookingCategory"
                        value="Non-Railway Person"
                        checked={formData.bookingCategory === "Non-Railway Person"}
                        onChange={handleChange}
                        required
                      />
                      Non-Railway Person
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bookingCategory"
                        value="Cultural Programme"
                        checked={formData.bookingCategory === "Cultural Programme"}
                        onChange={handleChange}
                        required
                      />
                      Cultural Programme
                    </label>
                  </div>
                </div>

                {formData.bookingCategory === "Railway Employee / Institute Member" && (
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="railwayEmployeeId">
                        Railway Employee ID <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="railwayEmployeeId"
                        name="railwayEmployeeId"
                        value={formData.railwayEmployeeId}
                        onChange={handleChange}
                        placeholder="Enter your Railway Employee ID"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="employeeIdProof">
                        Upload Employee ID Proof <span className="required">*</span>
                      </label>
                      <input
                        type="file"
                        id="employeeIdProof"
                        name="employeeIdProof"
                        onChange={handleChange}
                        accept=".jpg,.jpeg,.png,.pdf"
                        required
                      />
                    </div>
                  </div>
                )}

                {formData.bookingCategory === "Non-Member E. Rly. Employee" && (
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nonMemberEmployeeId">
                        Railway Employee ID <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="nonMemberEmployeeId"
                        name="nonMemberEmployeeId"
                        value={formData.nonMemberEmployeeId}
                        onChange={handleChange}
                        placeholder="Enter your Railway Employee ID"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nonMemberEmployeeIdProof">
                        Upload Employee ID Proof <span className="required">*</span>
                      </label>
                      <input
                        type="file"
                        id="nonMemberEmployeeIdProof"
                        name="nonMemberEmployeeIdProof"
                        onChange={handleChange}
                        accept=".jpg,.jpeg,.png,.pdf"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="guests">
                    Estimate Number of Guests <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </div>

                <div className="form-section-title">Contact Information</div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organization">Organization (Optional)</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="addressLine2">Address Line 2</label>
                  <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State / Province</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zip">ZIP / Postal Code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="panNumber">
                    PAN Number <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="panNumber"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="Enter 10 character PAN number"
                    required
                  />
                  <small>{formData.panNumber.length} of 10 max characters</small>
                </div>

                <div className="form-group">
                  <label htmlFor="aadhaarNumber">
                    AADHAAR Number <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="aadhaarNumber"
                    name="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={handleChange}
                    maxLength={12}
                    placeholder="Enter 12 character AADHAAR number"
                    required
                  />
                  <small>{formData.aadhaarNumber.length} of 12 max characters</small>
                </div>

                <div className="form-group">
                  <label htmlFor="aadhaarFile">
                    Upload AADHAAR Card <span className="required">*</span>
                  </label>
                  <input
                    type="file"
                    id="aadhaarFile"
                    name="aadhaarFile"
                    onChange={handleChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    required
                  />
                  <small>Accepted: jpg, jpeg, png, pdf (Max 15 MB)</small>
                </div>

                <button type="submit" className="primary-button">
                  Next
                </button>
              </div>
            ) : (
              <div className="form-step">
                <h2>Event Details</h2>

                <div className="form-group">
                  <label htmlFor="eventType">
                    Event Type <span className="required">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Cultural Program">Cultural Program</option>
                    <option value="Training Session">Training Session</option>
                    <option value="Meeting">Official Meeting</option>
                    <option value="Sports Event">Sports Event</option>
                    <option value="Social Event">Social Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="eventDuration">
                    Event Duration <span className="required">*</span>
                  </label>
                  <select
                    id="eventDuration"
                    name="eventDuration"
                    value={formData.eventDuration}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="Half Day">Half Day (4 hours)</option>
                    <option value="Full Day">Full Day (8 hours)</option>
                    <option value="Multi Day">Multi Day (2+ days)</option>
                    <option value="Custom">Custom Duration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Required Facilities <span className="required">*</span>
                  </label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="facilities"
                        value="Auditorium"
                        checked={formData.facilities.includes("Auditorium")}
                        onChange={handleChange}
                      />
                      <span>Auditorium</span>
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="facilities"
                        value="Projector/Screen"
                        checked={formData.facilities.includes("Projector/Screen")}
                        onChange={handleChange}
                      />
                      <span>Projector/Screen</span>
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="facilities"
                        value="Microphone"
                        checked={formData.facilities.includes("Microphone")}
                        onChange={handleChange}
                      />
                      <span>Microphone</span>
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="facilities"
                        value="Catering"
                        checked={formData.facilities.includes("Catering")}
                        onChange={handleChange}
                      />
                      <span>Catering</span>
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="facilities"
                        value="WiFi"
                        checked={formData.facilities.includes("WiFi")}
                        onChange={handleChange}
                      />
                      <span>WiFi</span>
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="facilities"
                        value="Parking"
                        checked={formData.facilities.includes("Parking")}
                        onChange={handleChange}
                      />
                      <span>Parking</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequirements">Special Requirements (Optional)</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Please mention any special requirements or requests"
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="secondary-button"
                  >
                    Previous
                  </button>
                  <button type="submit" className="primary-button">
                    Submit Booking
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
