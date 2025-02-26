import React, { useEffect, useState } from 'react';
import Section from '../../../HOC/Section';
import bg1 from '../../../assets/img/bg1.jpg'; 
import bg2 from '../../../assets/img/bg2.jpg';
import bg3 from '../../../assets/img/bg3.jpg';
import bg4 from '../../../assets/img/bg4.jpg';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1); // Using state for slides

  const plusSlides = (n) => {
    // Update slide index based on plusSlides
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > 4) newIndex = 1; // Wrap to first slide
      if (newIndex < 1) newIndex = 4; // Wrap to last slide
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    // Ensure index is adjusted properly
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // Show current slide and activate the corresponding dot
    slides[n - 1].style.display = "block";  
    dots[n - 1].className += " active";
  };

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // First call to show current slide
    showSlides(slideIndex);

    const timer = setInterval(() => {
      plusSlides(1); // Automatically move to the next slide
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [slideIndex]); // Dependency on slideIndex, so it updates correctly

  return (
    <Section id='home'>
      <div>
        

        {/* Slideshow container */}
        <div className="slideshow-container">
          {/* Full-width images */}
          <div className="mySlides">
            <img src={bg1} style={{ width: "100%", height: "calc(100vh - 100px)", objectFit: "cover" }} alt="Image 1" />
          </div>

          <div className="mySlides">
            <img src={bg2} style={{ width: "100%", height: "calc(100vh - 100px)", objectFit: "cover" }} alt="Image 2" />
          </div>

          <div className="mySlides">
            <img src={bg3} style={{ width: "100%", height: "calc(100vh - 100px)", objectFit: "cover" }} alt="Image 3" />
          </div>

          <div className="mySlides">
            <img src={bg4} style={{ width: "100%", height: "calc(100vh - 100px)", objectFit: "cover" }} alt="Image 4" />
          </div>

          {/* Next and previous buttons */}
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
        <br />

        {/* The dots/circles */}
        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
        </div>
      </div>
    </Section>
  );
};

export default Home;