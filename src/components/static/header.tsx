import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/public/emmanuel.png";

interface NavItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "About me", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
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

        {/* Right Section: Call to Action Button */}
        <div>
          <Link to="/contact">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-bold rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200">
              Get in touch
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
