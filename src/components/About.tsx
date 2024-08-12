import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-teal-600">About Me</h2>
        <p className="text-lg mb-4 text-gray-700">
        I am a skilled React UI Developer with over 5 years of experience in creating dynamic and user-friendly web applications. 
        My expertise spans front-end development with React, complemented by a strong foundation in Java and Spring MVC, which I&apos;ve specialized in over the past two years. 
        
        </p>
        <p className="text-lg text-gray-700">
        With a Master&apos;s degree in Computer Applications (MCA), I bring a deep understanding of software development principles,
        enabling me to build seamless, efficient, and scalable applications. I am dedicated to writing clean, maintainable code and continuously exploring new technologies to deliver high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default About;