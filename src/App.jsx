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
    </div>
  )
}

export default App