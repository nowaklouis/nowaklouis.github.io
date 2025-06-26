import React from "react";

export default function Hard() {
  const skillsGroup1 = [
    { name: "react", label: "React" },
    { name: "nodejs", label: "Node.js" },
    { name: "mysql", label: "MySQL" },
    { name: "html5", label: "HTML5" },
    { name: "github", label: "GitHub" },
  ];

  const skillsGroup2 = [
    { name: "nextjs", label: "Next.js" },
    { name: "expressjs", label: "Express.js" },
    { name: "sequelize", label: "Sequelize" },
    { name: "css", label: "CSS / MUI" },
    { name: "agile", label: "Méthode Agile" },
  ];

  const renderCheckboxes = (skills) =>
    skills.map(({ name, label }) => (
      <label
        key={name}
        className="flex items-center space-x-3 text-cyan-400 cursor-pointer"
      >
        <input
          type="checkbox"
          name={name}
          defaultChecked
          className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400"
          readOnly
        />
        <span>{label}</span>
      </label>
    ));

  return (
    <div className="flex justify-center space-x-12 p-6">
      <div className="flex flex-col space-y-4">
        {renderCheckboxes(skillsGroup1)}
      </div>
      <div className="flex flex-col space-y-4">
        {renderCheckboxes(skillsGroup2)}
      </div>
    </div>
  );
}
