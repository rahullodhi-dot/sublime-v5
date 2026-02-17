import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isLooseTeaOpen, setIsLooseTeaOpen] = React.useState(false);

  return (
    <>
      {/* Overlay - Shows on both mobile and desktop when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#e8f5e9] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button - Shows on both mobile and desktop */}
          <div className="flex justify-between items-center p-4 border-b border-[#316763]/20">
            <h2 className="text-lg font-semibold text-[#316763]">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 text-[#316763] hover:text-[#285853] transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto pb-4 pt-8">
            <ul className="space-y-1 px-4">
              {/* Loose Tea with Dropdown */}
              <li>
                <button
                  onClick={() => setIsLooseTeaOpen(!isLooseTeaOpen)}
                  className="w-full flex items-center justify-between text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  <span>Loose Tea</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${isLooseTeaOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Submenu */}
                {isLooseTeaOpen && (
                  <ul className="ml-4 mt-1 space-y-1 border-l-2 border-[#316763]/30 pl-4">
                    <li>
                      <Link
                        to="/products?category=green-tea"
                        onClick={onClose}
                        className="block text-[#285853] hover:text-[#316763] py-2 px-3 text-sm transition-colors"
                      >
                        • Green Tea
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products?category=black-tea"
                        onClick={onClose}
                        className="block text-[#285853] hover:text-[#316763] py-2 px-3 text-sm transition-colors"
                      >
                        • Black Tea
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products?category=herbal-tea"
                        onClick={onClose}
                        className="block text-[#285853] hover:text-[#316763] py-2 px-3 text-sm transition-colors"
                      >
                        • Herbal Tea
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products?category=white-tea"
                        onClick={onClose}
                        className="block text-[#285853] hover:text-[#316763] py-2 px-3 text-sm transition-colors"
                      >
                        • White Tea
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Shop All */}
              <li>
                <Link
                  to="/products"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Shop All
                </Link>
              </li>

              {/* Teaware */}
              <li>
                <Link
                  to="/products?category=teaware"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Teaware
                </Link>
              </li>

              {/* Accessories */}
              <li>
                <Link
                  to="/products?category=accessories"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Accessories
                </Link>
              </li>

              {/* Honey */}
              <li>
                <Link
                  to="/products?category=honey"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Honey
                </Link>
              </li>

              {/* Spices */}
              <li>
                <Link
                  to="/products?category=spices"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Spices
                </Link>
              </li>

              {/* Dry Fruits */}
              <li>
                <Link
                  to="/products?category=dry-fruits"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Dry Fruits
                </Link>
              </li>

              {/* Gifting */}
              <li>
                <Link
                  to="/products?category=gifting"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Gifting
                </Link>
              </li>

              {/* About Sublime */}
              <li>
                <Link
                  to="/about"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  About Sublime
                </Link>
              </li>

              {/* Blogs */}
              <li>
                <Link
                  to="/blogs"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Blogs
                </Link>
              </li>

              {/* Get In Touch */}
              <li>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block text-[#316763] hover:text-[#285853] py-3 px-3 text-sm font-medium transition-colors"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

