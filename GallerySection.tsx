import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { institutes } from "../data/institutes";

const institutePhotos: Record<string, { label: string; color: string }[]> = {
  malda: [
    { label: "Auditorium Front", color: "linear-gradient(135deg,#bfdbfe,#93c5fd)" },
    { label: "Stage Setup", color: "linear-gradient(135deg,#a5f3fc,#67e8f9)" },
    { label: "Cultural Event", color: "linear-gradient(135deg,#bbf7d0,#6ee7b7)" },
    { label: "Award Ceremony", color: "linear-gradient(135deg,#fde68a,#fcd34d)" },
    { label: "Community Gathering", color: "linear-gradient(135deg,#ddd6fe,#c4b5fd)" },
  ],
  sahibganj: [
    { label: "Auditorium Front", color: "linear-gradient(135deg,#fecaca,#fca5a5)" },
    { label: "Stage Setup", color: "linear-gradient(135deg,#fed7aa,#fdba74)" },
    { label: "Cultural Program", color: "linear-gradient(135deg,#bbf7d0,#6ee7b7)" },
    { label: "Official Event", color: "linear-gradient(135deg,#a5f3fc,#67e8f9)" },
    { label: "Community Gathering", color: "linear-gradient(135deg,#e0e7ff,#c7d2fe)" },
  ],
  bhagalpur: [
    { label: "Auditorium Front", color: "linear-gradient(135deg,#fde68a,#fcd34d)" },
    { label: "Stage Setup", color: "linear-gradient(135deg,#bfdbfe,#93c5fd)" },
    { label: "Cultural Event", color: "linear-gradient(135deg,#ddd6fe,#c4b5fd)" },
    { label: "Award Function", color: "linear-gradient(135deg,#fecaca,#fca5a5)" },
    { label: "Community Gathering", color: "linear-gradient(135deg,#bbf7d0,#6ee7b7)" },
  ],
};

const VISIBLE = 3;

const InstituteGallery: React.FC<{ id: string; name: string }> = ({
  id,
  name,
}) => {
  const [start, setStart] = useState(0);
  const navigate = useNavigate();
  const photos = institutePhotos[id] ?? [];
  const total = photos.length;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(total - VISIBLE, s + 1));

  const visible = photos.slice(start, start + VISIBLE);

  return (
    <div className="gallery-institute-block">
      <h3 className="gallery-institute-name">{name}</h3>

      <div className="gallery-carousel">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prev}
          disabled={start === 0}
        >
          &#8249;
        </button>

        <div className="carousel-track">
          {visible.map((photo, i) => (
            <div
              key={start + i}
              className="carousel-slide"
              style={{ background: photo.color }}
            >
              <span className="carousel-label">{photo.label}</span>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={next}
          disabled={start >= total - VISIBLE}
        >
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === start ? "active" : ""}`}
            onClick={() => setStart(i)}
          />
        ))}
      </div>

      <div className="gallery-card-actions">
        <button className="primary-button" onClick={() => navigate("/booking")}>Book Now</button>
        <button
          className="secondary-button"
          onClick={() => navigate(`/institute/${id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export const GallerySection: React.FC = () => {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">Gallery</p>
        <h2>Institute Photo Gallery</h2>
        <p className="page-lead">
          Explore highlights from each institute — cultural events, facilities,
          and community life.
        </p>
        <div className="gallery-institutes-list">
          {institutes.map((inst) => (
            <InstituteGallery key={inst.id} id={inst.id} name={inst.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

