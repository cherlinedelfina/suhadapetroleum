import React from "react";
import Section from "../../../HOC/Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import projects_bg from "../../../assets/img/projects_bg.jpg";
import image1 from "../../../assets/img/project1.jpg";
import image2 from "../../../assets/img/project2.jpg";
import workshop1 from "../../../assets/img/workshop1.png";
import workshop2 from "../../../assets/img/workshop2.png";
import serviceImage from "../../../assets/img/workshop3.png"; 
import servicebg from "../../../assets/img/services_bg.png";

const FacilitiesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [workshop1, workshop2];

  return (
    <div className="h-screen flex justify-center items-center">
      <Slider {...settings} className="w-[750px]">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Facility ${index + 1}`}
              className="rounded-lg mx-auto"
              style={{
                width: "1000px",
                height: "333px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Service = () => {
  return (
    <div>
      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>
      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>
      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>

      {/* Services Section */}
      <div className="row">
        <div className="column">
          <h2 className="text-3xl font-bold mb-6 text-black mt-16">Our Services</h2>
          <ul className="list-disc pl-5 text-xl text-black">
            <li>General Overhaul Pump & Gas Engine Service</li>
            <li>Pump & Gas Engine Repair</li>
            <li>Project Management & Technical Support</li>
            <li>Planning & Scheduling</li>
            <li>Procurement & Expediting</li>
            <li>On-Site Installation</li>
            <li>Start-Up & Commissioning</li>
            <li>Equipment Operation & Maintenance</li>
            <li>Quality Assurance & Control</li>
          </ul>
        </div>

        <div className="column">
          <img
            src={serviceImage}
            alt="Service Image"
            className="w-[200px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>
      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>

      {/* Our Facilities Section */}
      <section
        className="bg-cover bg-center py-12 px-6 relative flex flex-col items-center"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center">
          <p className="font-semibold mb-4">&nbsp;</p>
          <h1 className="text-2xl font-bold mb-6 mt-20">Our Facilities</h1>
          <p className="font-semibold mb-4">&nbsp;</p>
          
          {/* Adjusted FacilitiesCarousel */}
          <div className="w-[200px] ">
            <FacilitiesCarousel />
          </div>

          <p className="text-sm mt-4">
            📍 Laksana Business Park Block MB 12A-B, Jl. Raya Kali Baru, Laksana, Kecamatan Pakuhaji, Kabupaten Tangerang, Banten 15570
          </p>
          <p className="font-semibold mb-4">&nbsp;</p>
        </div>
      </section>

    </div>
  );
};

export default Service;

