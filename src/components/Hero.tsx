const Hero = () => {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-portfolio-secondary/50 to-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-portfolio-primary animate-fade-down">
            Hello, I'm <span className="text-portfolio-accent">Your Name</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto animate-fade-up">
            A passionate web developer crafting beautiful and functional digital experiences
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 px-8 py-3 bg-portfolio-accent text-white rounded-full hover:bg-portfolio-primary transition-colors animate-fade-up"
          >
            Get in Touch
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;