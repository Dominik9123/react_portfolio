import "./About.css";

const About = () => {
    return (
      <section className="about">
        <div className="about-content">
          <h1>--- About Me ---</h1>
          
          <div className="about-section">
            <h2>Education</h2>
            <p>I am currently studying at WSEI Kraków in my first year of Applied Computer Science.</p>
          </div>
  
          <div className="about-section">
            <h2>Passion & Interests</h2>
            <p>Most of my free time is spent learning programming and exploring new technologies.</p>
            <p>I love creating websites and discovering innovative tools that enhance my work.</p>
          </div>
  
          <div className="about-section">
            <h2>Design Philosophy</h2>
            <p className="about-subtitle">I focus on modern styles and clean design, ensuring users can easily navigate my projects.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  