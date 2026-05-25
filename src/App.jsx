import React, { useState } from 'react';
import { projectInfo, skillInfo } from "./data";
import { FolderGit2, Cpu, Send, Sparkles } from 'lucide-react';

function App() {

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4C1D3D] via-[#A33757] to-[#FFBB94]/30 text-slate-800">

        {/* NAVIGATION BAR */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex justify-between items-center z-50 shadow-lg">

          {/* Logo Area */}
          <div className="text-[#FFBB94] text-2xl font-bold">
            <a href="#">Ezgi.</a>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-white/90 font-medium text-sm">

            <li className="hover:text-[#FFBB94] transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#FFBB94] transition-colors cursor-pointer">
              <a href="#projects">Projects</a> 
            </li>
            <li className="hover:text-[#FFBB94] transition-colors cursor-pointer">
              <a href="#skills">Skills</a> 
            </li>
            <li className="hover:text-[#FFBB94] transition-colors cursor-pointer">
              <a href="#contact">Contact</a> 
            </li>

          </ul>

        </nav>

        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">

          {/* Welcome Badge */}
          <div className="mb-6 px-4 py-1.5 font-semibold text-sm text-[#FFBB94] bg-[#4C1D3D]/50 border border-white/10 rounded-full flex items-center gap-2 shadow-sm backdrop-blur-sm animate-pulse">
            <Sparkles className="w-4 h-4 text-[#FB9590]" />
            <span>👋 Welcome to my portfolio!</span>
            <Sparkles className="w-4 h-4 text-[#FB9590]" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight max-w-4xl leading-tight">
            Hi, I'm Ezgi. <br/>
            <span>Crafting Clean & Colorful Interfaces.</span>
          </h1>

          {/* Short Bio */}
          <p className="mt-8 text-[#FFBB94]/80 font-medium max-w-2xl mx-auto text-base md:text-lg">
            A software development student focused on creating intuitive web experiences. 
            I love combining robust logic with elegant, user-friendly designs.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-[#4C1D3D] text-[#FFBB94] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#852E4E] transition-all duration-200 active:scale-95 hover:scale-[1.02]">
              View Projects
            </button>
            <button className="text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white/10 transition-all duration-200 active:scale-95 hover:scale-[1.02]">
              Contact Me
            </button>
          </div>

        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-8 py-32 bg-transparent text-white">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#FFBB94]/80 font-medium leading-relaxed mb-6 text-base md:text-lg">
              Hello! I'm Ezgi, a passionate software development student. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for aesthetics to create beautiful, functional products.
            </p>
            <p className="text-[#FFBB94]/80 font-medium leading-relaxed text-base md:text-lg">
              My goal is to build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. When I'm not coding, I love exploring new design trends and continuously learning new technologies.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="px-8 py-32 bg-transparent">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-white">
            <FolderGit2 className="w-9 h-9 text-[#FFBB94]" />
            Featured Projects
          </h2>

          {/* Project Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {projectInfo.map((project, index) => (
              <div key={index} className="bg-white text-[#4C1D3D] overflow-hidden p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              {/* Container Main Grid */}
              
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-4 text-stone-600 font-medium text-sm md:text-base">{project.description}</p>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 mt-6">

                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 text-xs font-bold text-[#4C1D3D] bg-[#FFBB94]/40 rounded-full border border-[#4C1D3D]/10">
                    {tech}
                  </span>
                ))}

              </div>
            </div>
            ))}

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="px-8 py-32 bg-transparent">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-white">
            <Cpu className="w-9 h-9 text-[#FFBB94]" />
            Skills & Technologies
          </h2>

          {/* Main Skills Container */}
          <div className="max-w-4xl mx-auto flex flex-col gap-8 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
            
            {/* Cycles of Categories */}
            {["Frontend", "Backend", "Tools", "Other"].map((cat, catIndex) => ( 
              <div key={catIndex} className="flex flex-col md:flex-row border-b border-white/10 pb-6 last:border-0 last:pb-0">
              
                {/* Left Side: Category Titles */}
                <div className="md:w-1/4 font-bold text-lg text-[#FFBB94] mb-3 md:mb-0">
                  {cat}
                </div>

                {/* Right Side: Floating Badges */}
                <div className="md:w-3/4 flex flex-wrap gap-2">
                  {skillInfo
                    .filter((skill) => skill.category === cat)
                    .map((skill, skillIndex) => ( 
                      <span key={skillIndex} className="px-3 py-1.5 text-xs md:text-sm text-white bg-white/10 rounded-xl font-semibold border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#852E4E] hover:shadow-md cursor-pointer">
                        {skill.name}
                      </span>
                    ))}
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-8 py-32 bg-transparent flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Get In Touch
          </h2>

          {/* STEP 1: Icons & Quick Links */}
          <div className="flex justify-center gap-4 mb-12 w-full max-w-sm md:max-w-md">

            {/* Github Button */}
            <a 
              href="#" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm border border-white/10 text-[#FFBB94] hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>Github</span>
            </a>
            
            {/* LinkedIn Button */}
            <a 
              href="#" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm border border-white/10 text-[#FFBB94] hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            {/* Email Button */}
            <a 
              href="#" 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl shadow-sm border border-white/10 text-[#FFBB94] hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email</span>
            </a>
          </div>

          {/* STEP 2: Interaction Form */}
          <h3 className="flex justify-center font-bold text-[#FFBB94] mx-3 mb-5">
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
              className="w-full p-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#FFBB94] bg-white/10 backdrop-blur-sm text-white placeholder-white/60 font-medium" 
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email ..." 
              className="w-full p-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#FFBB94] bg-white/10 backdrop-blur-sm text-white placeholder-white/60 font-medium" 
            />
            <textarea 
              name="message"
              required
              placeholder="Your Message ..." 
              rows="4" 
              className="w-full p-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#FFBB94] bg-white/10 backdrop-blur-sm text-white placeholder-white/60 font-medium"
            ></textarea>
  
            <button type="submit" className="bg-[#4C1D3D] text-[#FFBB94] px-6 py-3 rounded-xl font-bold hover:bg-[#852E4E] transition-all duration-200 shadow-lg active:scale-95 hover:scale-[1.02] flex items-center justify-center gap-2 border border-white/10">
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

            {/* STEP 3 : Comprehensive Contact Card */}
          <div className="w-full max-w-sm md:max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white/20 text-center shadow-xl">
            <h3 className="text-xl font-bold mb-3 text-[#FFBB94]">
              Current Status 🎯
            </h3>
            <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">
              I am currently looking for software development internship opportunities and open-source collaborations. If you have a project or just want to say hi, feel free to reach out!
            </p>
          </div>

          

        </section>

    </div>
  )
}

export default App