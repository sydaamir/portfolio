import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-teal-600">Contact Me</h2>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src="/images/saamir.jpg" // Replace with your actual photo path
              alt="Syed Aamir Nazir"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h3 className="text-xl font-bold mb-4 text-teal-600">Syed Aamir Nazir</h3>
            <p className="mb-2 text-gray-700">Senior Software Engineer</p>
            <p className="mb-2 text-gray-700">Bangalore Karnataka, 560076 (India)</p>
            {/* <p className="mb-4 text-gray-700">Contact: (+91) 9149757771</p> */}
            <div className="flex space-x-4">
              <a href="mailto:syedaamirsan@gmail.com" className="text-black-500 hover:text-teal-600">
                <i className="fas fa-envelope"></i> Email
              </a>
              <a href="https://www.linkedin.com/in/syed-aamir-nazir" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:text-teal-600">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/sydaamir" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:text-teal-600">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;