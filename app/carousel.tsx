'use client';

import image1 from "./../public/assets/images/sarah.jpeg";
import image2 from "./../public/assets/images/james.jpeg";
import image3 from "./../public/assets/images/emily.jpeg";
import carouselprev from "./../public/assets/images/carouselprev.png";
import carouselnext from "./../public/assets/images/carouselnext.png";
import styles from './styles.module.css'
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: image1.src,
            review: "We needed a modern, user-friendly website, and TomsiaDevelopment nailed it! The process was smooth, and the results were outstanding",
            reviewerName: "Sarah M.",
            companyName: "Founder of BrightSolutions",
        },
        {
            image: image2.src,
            review: "We wanted a sleek e-commerce platform, and TomsiaDevelopment delivered beyond expectations! Everything was handled professionally and efficiently.",
            reviewerName: "James L.",
            companyName: "Owner of UrbanTrend Apparel",
        },
        {
            image: image3.src,
            review: "Our site needed a full redesign, and TomsiaDevelopment made it happen flawlessly. Great communication and stunning results!",
            reviewerName: "Emily R.",
            companyName: "Marketing Director at GreenVista",
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
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);

    return (
        <div className={styles.reviewbox}>
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    >
                        {index === currentIndex && (
                            <div className="carousel-content">
                                <p className={styles.reviewboxp}>{slide.review}</p>
                                <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.reviewerimg} />
                                <h3 className={styles.reviewerh3}>{slide.reviewerName}</h3>
                                <p className={styles.reviewerp}>{slide.companyName}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Image src={carouselprev} className={`${styles['carousel-controlprev']}`} onClick={handlePrev} alt="Prev" width={50} height={50}>
            </Image>
            <Image src={carouselnext} className={`${styles['carousel-controlnext']}`} onClick={handleNext} alt="Next" width={50} height={50}>
            </Image>
            <style jsx>{`

                .carousel {
                    position: relative;
                    width: 100%;
                    max-width: 600px;
                    margin: auto;
                    overflow: hidden;
                }
                .carousel-inner {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                }
                .carousel-item {
                    min-width: 100%;
                    display: none;
                }
                .carousel-item.active {
                    display: block;
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
                    color: white;
                    border: none;
                    padding: 10px;
                    cursor: pointer;
                    z-index: 1000;
                }
                .carousel-control.prev {
                    left: -100px;
                }
                .carousel-control.next {
                    right: -100px;
                }
            `}</style>
        </div>
    );
};

export default Carousel;