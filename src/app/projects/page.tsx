export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of your first project goes here.',
      technologies: ['Python', 'Data Analysis'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of your second project goes here.',
      technologies: ['R', 'Visualization'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of your third project goes here.',
      technologies: ['Next.js', 'TypeScript'],
      link: '#',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
