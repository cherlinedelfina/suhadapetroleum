import React from 'react';
import Section from '../../../HOC/Section';
import projects_bg from '../../../assets/img/projects_bg.jpg';
import image1 from '../../../assets/img/image1.jpg'; // Update with actual image paths
import image2 from '../../../assets/img/image2.jpg'; // Use real images
import image3 from '../../../assets/img/image3.jpg';
import image4 from '../../../assets/img/image4.jpg';

const Service = () => {
  return (
    <Section id='services'>
      <div className="bg-container" style={{ position: 'relative' }}>
          <img src={projects_bg} alt="projects background" className="projects_bg" />
          
          {/* Outer Column Container */}
          <div className="two-column-container" style={{ 
            position: 'absolute', 
            top: '50%', // Center vertically
            left: '50%', // Center horizontally
            transform: 'translate(-50%, -50%)', // Adjust position based on its size
            width: '80%', // Adjust width as necessary
            display: 'flex', // Display flex for two columns
            justifyContent: 'space-around' // Space between columns
          }}>
            {/* Left Column */}
            <div className="left-column" style={{ flex: '1', margin: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image1} alt="Image 1" style={{ width: '50%', height: 'auto' }} />
                <div style={{ padding: '10px' }}>
                  <h5>Description for Image 1</h5>
                  <p>This is a description for the first image. It gives details about the content shown in the image.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image2} alt="Image 2" style={{ width: '50%', height: 'auto' }} />
                <div style={{ padding: '10px' }}>
                  <h5>Description for Image 2</h5>
                  <p>This is a description for the second image. It adds context to what the image represents.</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column" style={{ flex: '1', margin: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image3} alt="Image 3" style={{ width: '50%', height: 'auto' }} />
                <div style={{ padding: '10px' }}>
                  <h5>Description for Image 3</h5>
                  <p>This description is associated with the third image, providing insight into the image.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image4} alt="Image 4" style={{ width: '50%', height: 'auto' }} />
                <div style={{ padding: '10px' }}>
                  <h5>Description for Image 4</h5>
                  <p>Details about the fourth image can be explained here, giving more depth to the visual content.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Section>
  );
};

export default Service;