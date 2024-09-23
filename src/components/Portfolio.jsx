import './Portfolio.css';

function Portfolio() {
    const projects = [
      { title: 'My Projects', img:  'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200', link: '#' },
      { title: 'My Goals ', img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200', link: '#' },
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
  
  