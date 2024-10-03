import React, { useState } from 'react';
import './about.css'
const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to [Your Company Name]! We are committed to providing you with the best service and products. Our mission
        is to offer exceptional customer service and quality goods, tailored to meet your needs.
      </p>
      <p>
        Our team is passionate about making your experience as seamless and enjoyable as possible. Thank you for choosing us!
      </p>
      
      {/* Conditionally render more content */}
      {isExpanded && (
        <div className="expanded-content">
          <p>
            Founded in [Year], we have been consistently striving to innovate and deliver top-notch services across various domains.
            Our company values integrity, innovation, and customer satisfaction above all.
          </p>
          <p>
            Over the years, we have expanded our offerings to meet the ever-growing needs of our customers, with a focus on
            leveraging cutting-edge technology to enhance our services. Our commitment to excellence drives everything we do.
          </p>
          <p>
            At [Your Company Name], we believe in building long-term relationships with our customers, ensuring that we provide 
            personalized support and solutions that suit their unique requirements.
          </p>
        </div>
      )}

      {/* Toggle button */}
      <button className="toggle-button" onClick={toggleExpand}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </section>
  );
};

export default AboutUs;
