import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-teal-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Syed Aamir Nazir</h1>
        <p className="text-xl md:text-2xl mb-8">Senior Software Engineer</p>
        <a href="#contact" className="bg-white text-teal-600 hover:bg-teal-100 font-bold py-2 px-4 rounded">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;