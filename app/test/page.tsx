'use client';

import reviewer from "../../public/assets/images/founderimage.jpg";
import image2 from "../../public/assets/images/founderback.png";
import styles from "../styles.module.css";
import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: reviewer.src,
      review: "We needed a modern, user-friendly website, and TomsiaDevelopment nailed it! The process was smooth, and the results were outstanding",
      reviewerName: "Sarah M.",
      companyName: "Founder of BrightSolutions",
    },
    {
      image: image2.src,
      review: "This is a sample review text for slide 2.",
      reviewerName: "Reviewer Name 2",
      companyName: "Company Name 2",
    },
    {
      image: '../../public/assets/images/founderimage.jpg',
      review: "This is a sample review text for slide 3.",
      reviewerName: "Reviewer Name 3",
      companyName: "Company Name 3",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className={`${styles.carousel} carousel`}>
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-content">
              <p className={styles.reviewboxp}>{slide.review}</p>
              <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.reviewerimg} />
              <h3 className={styles.reviewerh3}>{slide.reviewerName}</h3>
              <p className={styles.reviewerp}>{slide.companyName}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
      <style jsx>
      {`
        .carousel {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: auto;
          overflow: hidden;
        }
        .carousel-inner {
          display: flex;
          width: 300%; /* Adjusted to accommodate all three sections */
        }
        .carousel-item {
          width: 100%; /* Each section takes full width */
          flex-shrink: 0;
        }
        .carousel img {
          width: 100%;
        }
        .carousel-content {
          text-align: center;
          padding: 20px;
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border-radius: 50%;
          border: none;
          padding: 10px;
          cursor: pointer;
          z-index: 1000;
        }
        .carousel-control.prev {
          left: 10px;
        }
        .carousel-control.next {
          right: 10px;
        }
            `}</style>
    </div>
  );
};

export default Carousel;
