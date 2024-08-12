import React from 'react';

const ProjectCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-xl font-bold mb-2 text-teal-600">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Shipment Scheduler Process",
      description: "This application lets a user create a shipment and attach samples to it. It allows shipping on daily, weekly, or monthly basis following criteria for each shipment."
    },
    {
      title: "Shipment Tracking",
      description: "This tool lets users upload shipments data in Excel format, which is then processed and sent to Parkour SC environment for real-time tracking. It also provides screens to check upload status and history."
    },
    {
      title: "Digital Trouble Ticket Management",
      description: "Developed for a telecommunication client, this application manages tickets for various categories such as Service request, Query, & Complaint."
    },
    {
      title: "Infoidol",
      description: "A social media platform where users can maintain profiles by uploading static content like videos, audios, pictures, and blogs."
    },
    {
      title: "Hotel Reservation System",
      description: "A web application for confirming reservations and accommodations, showing popular hotels in a list. It includes a dashboard with information on recent bookings, conversion rates, and more."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-teal-600">Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
};

export default Projects;