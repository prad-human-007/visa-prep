'use client';
import { useEffect } from "react";

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, {useState} from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Visa Interview Prep",
//   description: "This app helps you prepare for the US visa interview process",
// };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // State to control sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // State to check if the sidebar state has been initialized
  const [isInitialized, setIsInitialized] = useState(false);

  // Load the sidebar state from local storage when the component mounts
  useEffect(() => {
    const savedSidebarState = localStorage.getItem('isSidebarOpen');
    if (savedSidebarState !== null) {
      setSidebarOpen(savedSidebarState === 'true'); // Restore the state
    }
    setIsInitialized(true); // Mark as initialized
  }, []);

  // Toggle the sidebar and save the state to local storage
  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem('isSidebarOpen', newState.toString()); // Save the state
  };

  if (!isInitialized) {
    // While initializing, return nothing or a loading state to avoid animation
    return null; // You could also return a loading spinner if needed
  }

  return (
    <html lang="en">
      <body>
        {/* Top bar */}
        <div className={`top-bar bg-blue-500 text-white h-12 flex items-center px-4 relative z-50`}>
          <button onClick={toggleSidebar} className="text-xl">
            ☰ {/* Hamburger icon for sidebar toggle */}
          </button>
          <h1 className="ml-4">My App</h1>
        </div>

        {/* Sidebar and content grid container */}
        <div className="grid  transition-all duration-300" style={{ height: 'calc(100vh - 3rem)' }}>
          {/* Sidebar */}
          <div
            className={`sidebar bg-gray-800 text-white h-full p-4 fixed top-12 left-0 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            style={{ width: '12rem' }} // Set a specific width for the sidebar
          >
            <h2 className="text-lg mb-4">Sidebar Menu</h2>
            <ul>
              <li><a href="/" className="block py-2">Home</a></li>
              <li><a href="/posts" className="block py-2">Post</a></li>
              <li><a href="/posts/68" className="block py-2">Post/68</a></li>
              <li><a href="/doesNotExtst" className="block py-2"> Does not exist </a></li>
            </ul>
          </div>

          {/* Main content area */}
          <div className={`content transition-all duration-300 ${isSidebarOpen ? 'ml-48' : 'ml-0'} p-4`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
