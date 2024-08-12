import React from 'react';

const SkillSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4 text-teal-700">{title}</h3>
    <div className="flex flex-wrap -mx-2">
      {items.map((item, index) => (
        <div key={index} className="px-2 mb-4">
          <span className="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-700">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skills = [
    "JavaScript", "TypeScript", "ReactJs","NextJs", "Redux", "HTML5/CSS3",
    "Material UI", "Bootstrap", "Java", "Spring MVC", "SQL", "Prompt Engineering"
  ];

  const tools = [
    "VS Code", "IntelliJ IDEA", "JIRA", "Oracle SQL Developer", 
    "Jenkins", "Git (Gitlab, Github, Gitea)", "Github Copilot"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-teal-600">Skills & Tools</h2>
        <SkillSection title="Skills" items={skills} />
        <SkillSection title="Tools" items={tools} />
      </div>
    </section>
  );
};

export default Skills;