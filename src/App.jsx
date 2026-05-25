import React, { useState } from 'react';

function App() {

  /* Contact Form Feedback Loop: 
    - manages submission state 
    - triggers temporary user notifications 
    - resets input fields */
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Captures all form data at once
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Prints the form values to the browser console
    console.log(data);

    setIsSubmitted(true);
    e.target.reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">

        {/* NAVIGATION BAR */}
        <nav className="fixed w-full z-50 flex justify-between py-5 px-8">

          {/* Logo Area */}
          <div className="text-fuchsia-600 text-2xl font-bold">
            <a href="#">Ezgi.</a>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-stone-600 font-medium">

            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">
              <a href="#projects">Projects</a> 
            </li>
            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">
              <a href="#skills">Skills</a> 
            </li>
            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">
              <a href="#contact">Contact</a> 
            </li>

          </ul>

        </nav>

        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center items-center text-center">

          {/* Welcome Badge */}
          <div className="mb-6 px-4 py-1.5 font-semibold text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">
            👋 Welcome to my portfolio!
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl font-bold">
            Hi, I'm Ezgi. <br/>
            Crafting Clean & Colorful Interfaces.
          </h1>

          {/* Short Bio */}
          <p className="mt-8 text-stone-500 max-w-2xl mx-auto">
            A software development student focused on creating intuitive web experiences. I love combining robust logic with elegant, user-friendly designs.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-fuchsia-600 text-white px-8 py-3 rounded-full font-medium hover:bg-fuchsia-700 transition-colors">
              View Projects
            </button>
            <button className="text-fuchsia-600 border border-fuchsia-600 px-8 py-3 rounded-full font-medium hover:bg-fuchsia-50 transition-colors">
              Contact Me
            </button>
          </div>

        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-8 py-32 bg-fuchsia-150">
          <h2 className="text-4xl font-bold text-center mb-16">
            About Me
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-stone-600 leading-relaxed mb-6">
              Hello! I'm Ezgi, a passionate software development student. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for aesthetics to create beautiful, functional products.
            </p>
            <p className="text-stone-600 leading-relaxed">
              My goal is to build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. When I'm not coding, I love exploring new design trends and continuously learning new technologies.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="px-8 py-32 bg-sky-50">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          {/* Project Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1: Container Main Grid*/}
            <div className="bg-sky-200 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">
                MindCare App
              </h3>
              <p className="mt-4 text-stone-600">
                A simple mental health check-in web app that helps users reflect on their mood and needs, and provides supportive responses.
              </p>

              {/* Badges Container 1 */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">HTML5</span>
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">CSS3</span>
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">JavaScript</span>
              </div>
            </div>

            {/* CARD 2: Container Main Grid*/}
            <div className="bg-sky-200 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">
                Focusly
              </h3>
              <p className="mt-4 text-stone-600">
                A modern productivity dashboard. Focusly is a responsive Pomodoro and task management application designed to help users stay focused and organized.
              </p>
              {/* Badges Container 2 */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">HTML5</span>
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">CSS3</span>
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">JavaScript</span>
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">LocalStorage</span>
              </div>
            </div>

            {/* CARD 3: Container Main Grid*/}
            <div className="bg-sky-200 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">
                Sudoku Validator
              </h3>
              <p className="mt-4 text-stone-600">
                A C++ program that validates Sudoku solutions using file handling and multidimensional arrays.
              </p>
              {/* Badges Container 3 */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">C++</span>
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">File I/O</span>
                <span className="px-3 py-1 text-sm text-sky-700 bg-sky-100 rounded-full">Arrays</span>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="px-8 py-32 bg-emerald-50">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>

          {/* Skill Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* PART 1: Container Main Grid*/}
            <div className="bg-emerald-200 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">
                Programming Languages
              </h3>

              {/* Badges Container 1 */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">JavaScript</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">C++</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">TypeScript (Beginner)</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">Python (Beginner)</span>
              </div>
            </div>

            {/* PART 2: Container Main Grid*/}
            <div className="bg-emerald-200 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">
                Web Technologies
              </h3>
              
              {/* Badges Container 2 */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">HTML5</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">CSS3</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">React</span>
              </div>
            </div>

            {/* PART 3: Container Main Grid*/}
            <div className="bg-emerald-200 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">
                Tools & Others
              </h3>
              
              {/* Badges Container 3 */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">VS Code</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">Git/Github</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">Terminal</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">API/Fetch</span>
                <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">JSON</span>              
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-8 py-32 bg-amber-50 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get In Touch
          </h2>

          {/* STEP 1: Icons & Quick Links */}
          <div className="flex justify-center gap-4 mb-12 w-full max-w-sm md:max-w-md">

            {/* Github Button */}
            <a 
              href="#" 
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm border border-stone-100 text-amber-700 hover:text-fuchsia-600 font-medium transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>Github</span>
            </a>
            
            {/* LinkedIn Button */}
            <a 
              href="#" 
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm border border-stone-100 text-amber-700 hover:text-fuchsia-600 font-medium transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            {/* Email Button */}
            <a 
              href="#" 
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm border border-stone-100 text-amber-700 hover:text-fuchsia-600 font-medium transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email</span>
            </a>
          </div>

          {/* STEP 2: Interaction Form */}
          <h3 className="flex justify-center font-medium text-amber-500 mx-3 mb-5">
            Contact Me Directly If You Wish
          </h3>

          {isSubmitted && (
            <div className="w-full max-w-sm md:max-w-md bg-emerald-100 text-emerald-800 p-4 rounded-xl mb-4 text-center font-medium">
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
              className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 bg-white" 
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email ..." 
              className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 bg-white" 
            />
            <textarea 
              name="message"
              required
              placeholder="Your Message ..." 
              rows="4" 
              className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-600 bg-white"
            ></textarea>
  
            <button type="submit" className="bg-amber-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-fuchsia-700 transition-colors">
              Send Message
            </button>
          </form>

            {/* STEP 3 : Comprehensive Contact Card */}
          <div className="w-full max-w-sm md:max-w-md bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
            <h3 className="text-xl font-semibold mb-3 text-amber-800">
              Current Status 🎯
            </h3>
            <p className="text-stone-600 leading-relaxed">
              I am currently looking for software development internship opportunities and open-source collaborations. If you have a project or just want to say hi, feel free to reach out!
            </p>
          </div>

          

        </section>

    </div>
  )
}

export default App