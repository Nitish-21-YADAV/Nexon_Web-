import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 transform bg-white shadow-lg
          w-64 p-5
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-2xl font-bold mb-8">My Sidebar</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-indigo-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-indigo-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header with hamburger */}
        <header className="flex items-center bg-white shadow p-4 md:hidden">
          <button
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle sidebar"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
          <p>This is your main content area.</p>
        </main>
      </div>
    </div>
  );
}