import React, { useRef, useEffect, useMemo, useState } from 'react';
import './App.css';
import { projectInfo, skillInfo } from "./data";
import { FolderGit2, Cpu, Send, Sparkles, Sparkle } from 'lucide-react';
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import profilePicture from './assets/main-image-ezgi.jpeg';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function App() {

  // Floating Glow System 
  const [mousePosition, setMousePosition] = useState({
    x: 0, 
    y: 0
  });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  

  // Datas of Stars
  const stars = useMemo(() => {
    return [...Array(100)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random(),
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDuration: `${Math.random() * 5 + 2}s`
    }));
  }, []);

  // Progress Bar
  const { scrollYProgress } = useScroll();

  // Hero Fade & Scale
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(
    scrollY,
    [0, 700],
    [1, 0]
  );
  const heroScale = useTransform(
    scrollY,
    [0, 700],
    [1, 0.8]
  );
  
  // Scroll Tracking
  const [windowScrollY, setWindowScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setWindowScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Contact Form Feedback Loop: 
    - manages submission state 
    - triggers temporary user notifications 
    - resets input fields */
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Captures all form data at once
    const formData = new FormData(e.target);
    const response = await fetch('https://formspree.io/f/mpqnjkrq', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setIsSubmitted(true);
      e.target.reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
    alert("Oops! An error occurred, the message could not be sent.");
    }
  };

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      onMouseMove={handleMouseMove} 
      className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-x-hidden font-sans select-none">

        {/* Floating Glow */}
        <div 
          className="pointer-events-none fixed w-[60px] h-[60px] rounded-full blur-[20px] bg-[var(--color-secondary)] z-0 transition-all duration-300"
          style={{
            left: mousePosition.x - 30,
            top: mousePosition.y - 30
          }}
        />

        {/* Dynamic Star Background */}
        {stars.map((star, i) => (
          <div 
            key={i}
            className="pointer-events-none absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
              animation: `twinkle ${star.animationDuration} infinite`,
              ...star.style,
              y: windowScrollY * 0.2
            }}
          ></div>
        ))}

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] z-[9999] origin-left"
          style={{
            scaleX: scrollYProgress
          }}
        />

        {/* NAVIGATION BAR */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-4xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-white/20 px-4 py-3 rounded-full flex justify-between items-center z-50 shadow-lg">

          {/* Logo Area */}
          <div className="text-[var(--color-secondary)] text:xl md:text-2xl font-bold flex-shrink-0 md:ml-3">
            <a 
              onClick={() => window.scrollTo(0, 0)} 
              className="cursor-pointer">
                Ezgi.
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-3 md:gap-9 text-white/90 font-medium text-xs md:text-sm md:mr-2 overflow-x-auto hide-scrollbar whitespace-nowrap px-2">

            <li className="hover:text-[var(--color-text)] transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[var(--color-text)] transition-colors cursor-pointer">
              <a href="#skills">Skills</a> 
            </li>
            <li className="hover:text-[var(--color-text)] transition-colors cursor-pointer">
              <a href="#projects">Projects</a> 
            </li>
            <li className="hover:text-[var(--color-text)] transition-colors cursor-pointer">
              <a href="#contact">Contact</a> 
            </li>

          </ul>

        </nav>

        {/* HERO SECTION */}
        <section className="min-h-[100dvh] w-full flex flex-col justify-center items-center text-center px-4 pt-24 md:pt-0 pb-10 md:pb-0">
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale
          }}
          className="flex flex-col items-center text-center"
        >

          {/* Welcome Badge */}
          <div className="mb-2 px-4 py-1.5 font-semibold text-sm text-[var(--color-accent)] bg-[var(--color-surface)]/50 border border-white/10 rounded-full flex items-center gap-2 shadow-sm backdrop-blur-sm animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>👋 Welcome to my portfolio!</span>
            <Sparkles className="w-4 h-4" />
          </div>

          {/* Main Headline */}
          <div className="relative flex flex-col justify-center items-center select-none py-10">

            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className="text-6xl sm:text-7xl md:text-[11rem] font-black text-[var(--color-text)]/30 tracking-wider uppercase bg-clip-text leading-none"
            >
              Portfolio
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }} 
              className="absolute text-5xl sm:text-6xl md:text-8xl font-signature text-[var(--color-accent)]/85 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transform -rotate-3 mt-5 whitespace-nowrap top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              Ezgi Nur Yigit
            </motion.span>

          </div>

          <h2 className="text-xl md:text-3xl font-bold tracking-tight max-w-4xl leading-tight mt-4 text-[var(--color-accent)] text-center">
            Building Scalable Systems & Intuitive Interfaces.
          </h2>

          <p className="mt-6 text-[var(--color-secondary)] font-semibold text-lg md:text-xl min-h-[30px] flex justify-center items-center">
            <Sparkles className="w-4 h-4 text-[var(--color-secondary)] mr-2" />
            <Typewriter 
              words={[
                'Software Development Student',
                'Aspiring Software Engineer',
                'Frontend Developer',
                'Backend Developer',
                'Building Scalable Systems',
              ]}
              loop={0} cursor cursorStyle='|' typeSpeed={90} deleteSpeed={50} delaySpeed={2000} 
            />
          </p>

          {/* Short Bio */}
          <p className="mt-8 text-[var(--color-text)]/80 font-medium max-w-2xl mx-auto text-base md:text-lg">
            A software development student driven to build efficient, scalable backend architectures while maintaining a strong foundation in user-centric web experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-10">
            <a 
              href="#projects" 
              className="bg-[var(--color-primary)] text-[var(--color-bg)] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[var(--color-secondary)] transition-all duration-200 active:scale-95 hover:scale-[1.02]">
              View Projects
            </a>
            <a
              href="#contact" 
              className="text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white/10 transition-all duration-200 active:scale-95 hover:scale-[1.02]">
              Contact Me
            </a>
          </div>

        </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-8 py-32 bg-transparent text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }} 
            className="text-4xl font-bold text-center mb-16 text-[var(--color-accent)]"
          >
            About Me
          </motion.h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-12 items-center">
            
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex justify-center items-center relative h-[400px] w-full"
            >
              {/* My Picture */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--color-primary)]/30 shadow-2xl z-10 backdrop-blur-sm bg-[var(--color-surface)]">
                <img 
                  src={profilePicture}
                  alt="Ezgi Nur Yigit" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Middle Column */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-center md:text-left flex flex-col gap-6"
            >
              <h2 className="text-[var(--color-accent)] mb-4 font-bold text-xl md:text-2xl tracking-wide">
                Software Engineer focused on Scalable Backend Systems
              </h2>
              
              <p className="text-[var(--color-text)]/90 font-medium leading-relaxed text-base md:text-lg">
                Hi! I'm Ezgi, a passionate software development student. Having built a strong foundation in frontend development, I have now pivoted towards backend engineering with a focus on Java. I enjoy bridging the gap between user-centric design and robust, highly scalable server-side architectures.
              </p>
              <p className="text-[var(--color-text)]/90 font-medium leading-relaxed text-base md:text-lg">
                My goal is to design and build efficient systems capable of handling complex challenges. I am deeply interested in data structures, algorithms, OOP and the Java ecosystem. Currently, I am expanding my knowledge in RESTful APIs and distributed systems, striving to engineer impactful technologies that can perform flawlessly at scale.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="w-full max-w-sm p-6 m-8 mx-auto rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-bold text-[var(--color-accent)] mb-4">
                🎓 Education
              </h3>
              <p className="font-semibold text-[var(--color-text)]">
                Software Development
              </p>
              <p className="text-[var(--color-text)]/70 text-sm">
                Bulent Ecevit University
              </p>
              <p className="text-[var(--color-primary)]/80 text-xs mt-1">
                Expected 2029
              </p>
            </motion.div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="px-8 py-32 bg-transparent">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }} 
            className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-[var(--color-accent)]"
          >
            <Cpu className="w-9 h-9 text-[var(--color-accent)]" />
            Skills & Technologies
          </motion.h2>

          {/* Main Skills Container */}
          <div className="max-w-5xl mx-auto flex flex-col gap-8 p-8 bg-[var(--color-surface)]/60 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
            
            {/* Cycles of Categories */}
            {["Frontend", "Backend", "Tools", "Other"].map((cat, catIndex) => ( 
              <div key={catIndex} className="flex flex-col md:flex-row border-b border-white/10 pb-6 last:border-0 last:pb-0">
              
                {/* Left Side: Category Titles */}
                <div className="md:w-1/4 font-bold text-lg text-[var(--color-text)] mb-3 md:mb-0">
                  {cat}
                </div>

                {/* Right Side: Floating Badges */}
                <div className="md:w-3/4 flex flex-wrap gap-2">
                  {skillInfo
                    .filter((skill) => skill.category === cat)
                    .map((skill, skillIndex) => { 
                      const Icon = skill.icon;
                      return (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: skillIndex * 0.03
                          }} 
                          viewport={{ once: false }} 
                          key={skillIndex} 
                          className="flex items-center gap-2 px-3 py-1.5 text-xs md:text-sm text-[var(--color-text)] bg-white/5 rounded-xl font-semibold border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] hover:shadow-lg hover:shadow-[var(--color-secondary)]/20 cursor-pointer"
                        >
                          {Icon && <Icon />}
                          {skill.name}
                        </motion.span> 
                      );
                  })}
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* RADAR & CURRENTLY LEARNING SECTION */}
        <section id="radar" className="px-8 py-16 bg-transparent">
          <div className="max-w-4xl mx-auto bg-[var(--color-surface)]/80 backdrop-blur-md rounded-3xl border border-[var(--color-primary)]/20 p-8 shadow-xl flex flex-col md:flex-row items-center gap-8">
            
            {/* Left Part: Big Badge/Icon */}
            <div className="flex-shrink-0 bg-[var(--color-accent)]/10 p-5 rounded-2xl border border-[var(--color-accent)]/20 animate-pulse">
              <Sparkles className="w-12 h-12 text-[var(--color-accent)]" />
            </div>

            {/* Right Part: Content */}
            <div className="flex-grow text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-surface-hover)] px-3 py-1 rounded-full border border-[var(--color-accent)]/20">
                On My Radar 🎯
              </span>
              <h3 className="text-2xl font-bold text-[var(--color-text)] mt-4 mb-2">
                What Am I Working On Currently?
              </h3>
              <p className="text-[var(--color-text)]/80 font-medium leading-relaxed text-sm md:text-base">
                I am currently building a strong computer science foundation with <strong>Java</strong>. Focusing on <i>object-oriented programming, data structures, algorithms, and problem-solving</i> while preparing for future large-scale backend development. 
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="px-8 py-32 bg-transparent">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }} 
            className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-[var(--color-accent)]"
          >
            <FolderGit2 className="w-9 h-9 text-[var(--color-accent)]" />
            Featured Projects
          </motion.h2>

          {/* Project Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {projectInfo.map((project, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: false }} 
                key={index} 
                className="bg-[var(--color-surface)]/60 backdrop-blur-md text-[var(--color-text)] overflow-hidden p-8 rounded-2xl border border-[var(--color-primary)]/10 shadow-xl hover:shadow-[var(--color-primary)]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
              > {/* Container Main Grid */}
              
                {/* Projects' Preview */}
                {project.images ? (
                  <img
                    src={project.images}
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-xl mb-6"
                  />
                ) : (
                  <div className="w-full aspect-video rounded-xl mb-6 bg-[var(--color-surface-hover)]/50 border border-dashed border-[var(--color-accent)]/30 flex flex-col items-center justify-center">
                    <span className="text-3xl mb-2">🚧</span>
                    <p className="text-[var(--color-accent)] font-semibold">
                      {project.title}
                    </p>
                    <p className="text-white/50 text-sm">
                    Preview Coming Soon
                    </p>
                  </div>
                )}

                <h3 className="text-[var(--color-primary)] text-xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-4 text-[var(--color-text)]/80 font-medium text-sm md:text-base">
                  {project.description}
                </p>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-xs font-bold text-[var(--color-surface-hover)] bg-[var(--color-text)]/90 rounded-full">
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Link Buttons */}
                <div className="flex gap-3 mt-auto pt-6">  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-[var(--color-surface-hover)] font-bold text-sm hover:scale-105 transition-transform"
                    >
                      ​🌐 ​Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[var(--color-secondary)] text-[var(--color-surface-hover)] font-bold text-sm hover:scale-105 transition-transform"
                    >
                      💻 Source Code
                    </a>
                  )}

                  {project.comingSoon && (
                    <button
                      disabled
                      className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-surface-hover)] text-sm font-bold opacity-60 cursor-not-allowed"
                    >
                      🚧​ Coming Soon
                    </button>
                  )}
                </div>

            </motion.div>
            ))}

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-8 py-32 bg-transparent flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}  
            className="text-4xl font-bold text-center mb-16 text-[var(--color-accent)]"
          >
            Get In Touch
          </motion.h2>

          {/* STEP 1: Icons & Quick Links */}
          <div className="flex justify-center gap-4 mb-12 w-full max-w-sm md:max-w-md">

            {/* Github Link */}
            <a 
              href="https://github.com/ezginy"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-[var(--color-surface)]/60 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm border border-[var(--color-primary)]/20 text-[var(--color-accent)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>Github</span>
            </a>
            
            {/* LinkedIn Link */}
            <a 
              href="https://linkedin.com/in/ezginyi" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--color-surface)]/60 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm border border-[var(--color-primary)]/20 text-[var(--color-accent)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            {/* Email Link */}
            <a 
              href="mailto:ezginyi@outlook.com" 
              className="flex items-center gap-2 bg-[var(--color-surface)]/60 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm border border-[var(--color-primary)]/20 text-[var(--color-accent)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email</span>
            </a>
          </div>

          {/* STEP 2: Comprehensive Contact Card */}
          <div className="w-full max-w-sm md:max-w-md bg-[var(--color-surface)]/60 backdrop-blur-md p-8 mb-12 rounded-3xl shadow-xl border border-[var(--color-primary)]/20">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)] text-center">
              Current Status 🎯
            </h3>
            <div className="text-[var(--color-text)]/90 font-medium leading-relaxed text-sm md:text-base text-left space-y-2">
              <p>🎓 Software Development Undergraduate Student</p>
              <p>☕ Building a strong foundation with Java</p>
              <p>🧩 Studying OOP, Data Structures & Algorithms</p>
              <p>🔍 Actively seeking Software Development and Software Engineering Internship Opportunities</p> 
            </div>
          </div>

          {/* STEP 3: Interaction Form */}
          <h3 className="flex justify-center font-bold text-[var(--color-accent)] mx-3 mb-5">
            Contact Me Directly If You Wish
          </h3>

          {isSubmitted && (
            <div className="w-full max-w-sm md:max-w-md bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 p-4 rounded-xl mb-4 text-center font-semibold backdrop-blur-sm">
              ✅ Your message has been sent successfully!
            </div>
          )}
          <form
            onSubmit={handleSubmit} 
            className="flex flex-col gap-4 mb-16 w-full max-w-sm md:max-w-md">
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name ..."
              className="w-full p-3 rounded-xl border border-[var(--color-primary)]/20 focus:outline-none focus:border-[var(--color-accent)] bg-[var(--color-surface)]/60 backdrop-blur-sm text-[var(--color-text)] placeholder-[var(--color-text)]/50 font-medium" 
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email ..." 
              className="w-full p-3 rounded-xl border border-[var(--color-primary)]/20 focus:outline-none focus:border-[var(--color-accent)] bg-[var(--color-surface)]/60 backdrop-blur-sm text-[var(--color-text)] placeholder-[var(--color-text)]/50 font-medium" 
            />
            <textarea 
              name="message"
              required
              placeholder="Your Message ..." 
              rows="4" 
              className="w-full p-3 rounded-xl border border-[var(--color-primary)]/20 focus:outline-none focus:border-[var(--color-accent)] bg-[var(--color-surface)]/60 backdrop-blur-sm text-[var(--color-text)] placeholder-[var(--color-text)]/50 font-medium"
            ></textarea>
  
            <button type="submit" className="bg-[var(--color-secondary)] text-[var(--color-surface-hover)] px-6 py-3 rounded-xl font-bold hover:bg-[var(--color-primary)] transition-all duration-200 shadow-lg active:scale-95 hover:scale-[1.02] flex items-center justify-center gap-2">
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

        </section>

        {/* Footer Section */}
        <footer className="w-full py-8 mt-20 border-t border-[var(--color-primary)]/20 flex flex-col items-center justify-center gap-2">
          <p className="text-[var(--color-text)]/70 text-sm md:text-base font-medium tracking-wide flex items-center gap-1">
            Designed & Built by Ezgi 
            <Sparkles className="w-4 h-4 text-[var(--color-secondary)]" />
          </p>
          <p className="text-[var(--color-text)]/40 text-xs tracking-wider">
            © 2026 all rights reserved.
          </p>
        </footer>

    </div>
  )
}

export default App