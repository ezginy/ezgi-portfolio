import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">

        {/* NAVIGATION BAR */}
        <nav className="fixed w-full z-50 flex justify-between py-5 px-8">

          {/* Logo Area */}
          <div className="text-fuchsia-600 text-2xl font-bold">
            Ezgi.
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-stone-600 font-medium">
            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">About</li>
            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">Skills</li>
            <li className="hover:text-fuchsia-500 transition-colors cursor-pointer">Contact</li>
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
        <section id="about" className="px-8 py-32">
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
        <section id="projects" className="px-8 py-32 bg-white">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          {/* Project Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1: Container Main Grid*/}
            <div className="bg-fuchsia-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">
                MindCare App
              </h3>
              <p className="mt-4 text-stone-600">
                A simple mental health check-in web app that helps users reflect on their mood and needs, and provides supportive responses.
              </p>

              {/* Badges Container 1 */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">HTML5</span>
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">CSS3</span>
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">JavaScript</span>
              </div>
            </div>

            {/* CARD 2: Container Main Grid*/}
            <div className="bg-fuchsia-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">
                Focusly
              </h3>
              <p className="mt-4 text-stone-600">
                A modern productivity dashboard. Focusly is a responsive Pomodoro and task management application designed to help users stay focused and organized.
              </p>
              {/* Badges Container 2 */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">HTML5</span>
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">CSS3</span>
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">JavaScript</span>
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">LocalStorage</span>
              </div>
            </div>

            {/* CARD 3: Container Main Grid*/}
            <div className="bg-fuchsia-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">
                Sudoku Validator
              </h3>
              <p className="mt-4 text-stone-600">
                A C++ program that validates Sudoku solutions using file handling and multidimensional arrays.
              </p>
              {/* Badges Container 3 */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">C++</span>
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">File I/O</span>
                <span className="px-3 py-1 text-sm text-fuchsia-700 bg-fuchsia-100 rounded-full">Arrays</span>
              </div>
              
            </div>

          </div>
        </section>

    </div>
  )
}

export default App