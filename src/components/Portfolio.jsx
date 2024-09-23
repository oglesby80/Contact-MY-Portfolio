function Portfolio() {
    const projects = [
      { title: 'Winter Lookbook 2018', img: '/path/to/img1.jpg', link: '#' },
      { title: 'Visual Journey', img: '/path/to/img2.jpg', link: '#' },
      { title: 'Journal', img: '/path/to/img3.jpg', link: '#' },
      { title: 'Shop', img: '/path/to/img4.jpg', link: '#' }
    ];
  
    return (
      <section className="portfolio">
        <h2>My Work</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;
  
  