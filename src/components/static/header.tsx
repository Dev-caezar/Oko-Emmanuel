import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/public/emmanuel.png";

interface NavItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "About me", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Left Section: Logo & Status */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Oko E. Logo"
              className="h-8 w-auto object-contain select-none"
            />
          </Link>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 bg-gray-50/80 border border-gray-100 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DD200] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4DD200]"></span>
            </span>
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Available for work
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-bold text-slate-900"
                    : "font-medium text-gray-400 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-bold rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200">
                Get in touch
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2.5 text-gray-700 hover:text-black focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            {/* Top Bar: Logo & Close Button */}
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img
                  src={logo}
                  alt="Oko E. Logo"
                  className="h-8 w-auto object-contain select-none"
                />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigation Menu"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Item List */}
            <nav className="my-auto py-8 flex flex-col">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-gray-100 group"
                  >
                    <span
                      className={`text-base font-semibold transition-colors ${
                        isActive ? "text-slate-900 font-bold" : "text-slate-800"
                      }`}
                    >
                      {item.label}
                    </span>
                    <ChevronRight
                      size={18}
                      className="text-slate-900 group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Full Width CTA Button */}
            <div className="pt-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white text-sm font-bold rounded-xl active:scale-[0.99] transition-all">
                  Get in touch
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
