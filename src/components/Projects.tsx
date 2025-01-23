const Projects = () => {
    const projects = [
      {
        title: "Project One",
        description: "A full-stack web application built with React and Node.js",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Project Two",
        description: "E-commerce platform with real-time inventory management",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        tags: ["Next.js", "TypeScript", "Stripe"],
      },
      {
        title: "Project Three",
        description: "Mobile-first social media dashboard",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        tags: ["React", "Firebase", "Tailwind"],
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-portfolio-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-portfolio-primary mb-12">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-portfolio-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-portfolio-secondary rounded-full text-portfolio-primary text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;