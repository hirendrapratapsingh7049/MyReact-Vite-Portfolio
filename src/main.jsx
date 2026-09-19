import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    title: "Circle Pro",
    type: "Live Web Project",
    description:
      "A modern community-focused web experience with a clean, visual-first interface designed for responsive browsing and user interaction.",
    stack: ["React", "JavaScript", "Responsive UI"],
    live: "http://circle-pro-website-nxmd.vercel.app/",
    github: null,
    accent: "violet",
  },
  {
    title: "ITAMOTO Travel",
    type: "Live Travel Platform",
    description:
      "A travel platform for Arunachal Pradesh covering cab and bus ticket booking, tour packages, airport taxi, car rentals, hotels and homestays.",
    stack: ["HTML", "CSS", "JavaScript", "Travel Platform"],
    live: "https://itamoto.in/",
    github: null,
    accent: "cyan",
  },
  {
    title: "CharacterPicker",
    type: "React + Vite",
    description:
      "A utility app for generating and picking characters, special characters and numbers, built with React and Vite.",
    stack: ["React", "Vite", "JavaScript"],
    live: "https://character-picker-eta.vercel.app/",
    github: "https://github.com/hirendrapratapsingh7049/CharacterPicker",
    accent: "pink",
  },
  {
    title: "Oorja — The Bend",
    type: "React Project",
    description:
      "A React-based frontend project from the Oorja — The Bend repository, presented as a responsive component-based UI project.",
    stack: ["React", "JavaScript", "Responsive UI"],
    live: "https://lighthearted-peony-0887e5.netlify.app/",
    github: "https://github.com/hirendrapratapsingh7049/Oorja_the_bend_DEV/tree/DEV",
    accent: "orange",
  },
  {
    title: "My Portfolio",
    type: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing frontend skills, projects and professional information, deployed on Netlify.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    live: "https://myportlfolio.netlify.app/",
    github: "https://github.com/hirendrapratapsingh7049/portfolio",
    accent: "green",
  },
  {
    title: "Netflix Clone",
    type: "Frontend Project",
    description:
      "A responsive Netflix-inspired web application with navigation, banners and content rows, built to demonstrate reusable React components and responsive UI development.",
    stack: ["React", "HTML5", "CSS", "Bootstrap"],
    live: null,
    github: null,
    accent: "red",
  },
  {
    title: "Banking Account & Credit Card Manager",
    type: "Java Web Application",
    description:
      "A web-based banking management system for customer accounts and credit-card information, including account details, customer updates and transaction management.",
    stack: ["Java", "Servlet", "JSP", "JDBC", "Spring Boot"],
    live: null,
    github: null,
    accent: "blue",
  },
];

const skills = [
  "React JS", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Redux",
  "Webpack", "Vite", "Core PHP", "MySQL", "Java", "GitHub", "Docker", "MS Excel"
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="navbar">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">H</span>
          <span>Hirendra<span className="dot">.</span></span>
        </button>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
            <button key={item} onClick={() => go(item)}>{item}</button>
          ))}
          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☀" : "☾"}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> React JS Developer · Frontend</div>
            <h1>Hi, I'm <strong>Hirendra</strong><br />a <em>React JS Developer.</em></h1>
            <p className="hero-text">
              I build responsive, clean and user-focused web interfaces using React,
              JavaScript and modern frontend technologies.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>View My Work <span>↗</span></button>
              <button className="secondary" onClick={() => go("contact")}>Let's Connect</button>
            </div>
            <div className="quick-links">
              <a href="https://github.com/hirendrapratapsingh7049" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/hirendra-pratap-singh-206965167" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:hirendrapratapsingh981@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="profile-card">
              <div className="avatar">HPS</div>
              <h3>Hirendra Pratap Singh</h3>
              <p>React JS Developer</p>
              <div className="mini-tags"><span>React</span><span>JavaScript</span><span>Vite</span></div>
              <div className="code-window">
                <div><i></i><i></i><i></i></div>
                <code><span>const</span> developer = <span>"Hirendra"</span>;<br />
                  developer.<b>build</b>(<span>"great UI"</span>);</code>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div><p>ABOUT ME</p><h2>Building interfaces with purpose.</h2></div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a frontend-focused developer with hands-on experience in React, JavaScript, HTML, CSS and modern web development tools. My work includes responsive websites, reusable component-based interfaces and practical business projects.</p>
              <p>My professional journey also includes customer support and RF engineering, which strengthened my communication, troubleshooting and problem-solving skills.</p>
              <div className="stats">
                <div><strong>4+</strong><span>Years of professional experience</span></div>
                <div><strong>7</strong><span>Featured projects</span></div>
                <div><strong>React</strong><span>Primary frontend focus</span></div>
              </div>
            </div>
            <div className="about-panel">
              <div className="panel-line"><span>Location</span><b>Bhopal, Madhya Pradesh</b></div>
              <div className="panel-line"><span>Education</span><b>B.Tech — Electrical & Electronics</b></div>
              <div className="panel-line"><span>Languages</span><b>Hindi · English</b></div>
              <div className="panel-line"><span>Interests</span><b>Cricket · Traveling</b></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div><p>TECH STACK</p><h2>Tools I work with.</h2></div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => <div className="skill" key={skill}><span>{String(i + 1).padStart(2, "0")}</span>{skill}</div>)}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div><p>SELECTED WORK</p><h2>Projects that showcase my work.</h2></div>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-top">
                  <span className="project-type">{project.type}</span>
                  <span className="project-symbol">↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo ↗</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div><p>EXPERIENCE</p><h2>Professional journey.</h2></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">1 Year</span>
              <div><h3>React JS Developer · ProVenture</h3><p>Worked as a React JS Developer, building responsive frontend interfaces and working with React-based component development, JavaScript and modern web technologies.</p></div>
            </div>
            <div className="timeline-item">
              <span className="year">2023 — 2024</span>
              <div><h3>Customer Care Executive · Magnum</h3><p>Handled customer problems according to company policy and supported return/refund resolution based on customer issues.</p></div>
            </div>
            <div className="timeline-item">
              <span className="year">1 Year</span>
              <div><h3>RF Engineer · Escalate Pvt. Limited</h3><p>Monitored and optimized wireless network performance, conducted site surveys, analyzed signal strength and coverage, supported troubleshooting and maintained RF documentation.</p></div>
            </div>
            <div className="timeline-item">
              <span className="year">4 Months</span>
              <div><h3>Web Developer Intern · Maestro Infotech</h3><p>Worked with HTML, CSS, JavaScript and PHP and contributed to the live iTomoto travel-oriented website project.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <span className="section-number">05</span>
            <p>GET IN TOUCH</p>
            <h2>Let's build something<br /><em>useful together.</em></h2>
            <a className="email-link" href="mailto:hirendrapratapsingh981@gmail.com">hirendrapratapsingh981@gmail.com ↗</a>
            <div className="contact-meta">
              <span>8103571310</span>
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Hirendra Pratap Singh</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
