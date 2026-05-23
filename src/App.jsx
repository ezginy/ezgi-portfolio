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

    </div>
  )
}

export default App