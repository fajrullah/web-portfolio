const About = () => {
    const skills = [
      "React", "TypeScript", "Node.js", "Tailwind CSS",
      "Next.js", "GraphQL", "Git", "AWS"
    ];
  
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-portfolio-primary mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful and functional web applications. With years of experience in modern web technologies, I help businesses bring their ideas to life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
              </p>
            </div>
            <div className="bg-portfolio-secondary/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-full text-portfolio-primary text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;