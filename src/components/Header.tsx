import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth.service';
import DarkLogo from '../assets/images/newWhiteLogo.png';


interface HeaderProps {
  onSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  // const [user, setUser] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLooseTeaDropdownOpen, setIsLooseTeaDropdownOpen] = useState(false);
  const [cartCount] = useState(2); // TODO: Get from cart context/state
const user = JSON.parse(localStorage.getItem("authUser") || "null");

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(isAuthenticated());
      // setUser(getCurrentUser());
    };
    
    checkAuth();
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchClick = () => {
    // TODO: Open search modal or navigate to search page
    console.log('Search clicked');
  };

  const handleWishlistClick = () => {
    // TODO: Navigate to wishlist page
    navigate('/wishlist');
  };

  const handleCartClick = () => {
    // TODO: Navigate to cart page
    navigate('/cart');
  };

  const handleProfileClick = () => {
    if (!user) {
      // TODO: Open profile dropdown or navigate to profile
      navigate('/login');
    } else {
      navigate('/profile');
    }
  };

  return (
    <header   className={` bg-[#316763]   top-0 
  
     sticky z-[100] transition-all duration-300 ${isScrolled ? '' : ''}`}>
      <nav className="max-w-[1600px] bg-transparent mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Left Section - Hamburger Menu + Navigation */}
          <div className="flex text-black items-center space-x-2 sm:space-x-4 lg:space-x-6">
            {/* Hamburger Menu - Toggle Sidebar */}
            <button
              onClick={onSidebarToggle}
              className="p-1.5 sm:p-2 text-[#F6F1E8]  transition-colors"
              aria-label="Toggle sidebar menu"
            >
              <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              {/* Loose Tea with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsLooseTeaDropdownOpen(true)}
                onMouseLeave={() => setIsLooseTeaDropdownOpen(false)}
              >
                <Link
                  to="/categories"
                  className="flex items-center text-[#F6F1E8] hover:text-[#F6F1E8] transition-colors"
                  style={{
                    fontFamily: "'gotham-book', sans-serif",
                    fontWeight: 100,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                >
                  Loose Tea
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                {isLooseTeaDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white font-gotham rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <Link  style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,
                fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}     to="/categories" className="block font-gotham-book px-4 py-2 text-sm font-gotham text-gray-700 hover:bg-gray-50 hover:text-[#316763]">
                      Green Tea
                    </Link>
                    <Link  style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,
                fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}     to="/categories" className="block px-4 py-2 text-sm font-gotham-book text-gray-700 hover:bg-gray-50 hover:text-[#316763]">
                      Black Tea
                    </Link>
                    <Link   style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,
                 fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}    to="/categories" className="block px-4 py-2 text-sm font-gotham-book text-gray-700 hover:bg-gray-50 hover:text-[#316763]">
                      Herbal Tea
                    </Link>
                    <Link  style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontSize: '14px', 
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/products?category=oolong-tea" className="block px-4 py-2 text-sm font-gotham-book text-gray-700 hover:bg-gray-50 hover:text-[#316763]">
                      Oolong Tea
                    </Link>
                  </div>
                )}
              </div>

              <Link
                 to="/categories"
                className="text-[#F6F1E8] hover:text-[#F6F1E8] transition-colors"
                style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Honey
              </Link>
              <Link
               to="/categories"
                className="text-[#F6F1E8] hover:text-[#F6F1E8]transition-colors"
                style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,
                   fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Spices
              </Link>
              <Link
             to="/categories"
                className="text-[#F6F1E8] hover:text-[#F6F1E8] transition-colors"
                style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Dry Fruits
              </Link>
            </div>
          </div>

          {/* Center Section - Logo */}
          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <Link 
              to="/" 
              className="flex flex-col items-center transition-opacity hover:opacity-80"
              aria-label="Sublime House Tea - Home"
            >
              <img 
                src={DarkLogo} 
                alt="Sublime House Tea" 
                className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain" 
              />
            </Link>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Search Icon - Hidden on smallest screens */}
            <button
              onClick={handleSearchClick}
              className="hidden xs:block p-1.5 sm:p-2 text-[#F6F1E8] hover:text-[#316763] transition-colors relative"
              aria-label="Search"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Wishlist Icon - Hidden on mobile */}
            <button
              onClick={handleWishlistClick}
              className="hidden sm:block p-1.5 sm:p-2 text-[#F6F1E8] transition-colors relative"
              aria-label="Wishlist"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Cart Icon with Badge */}
            <button
              onClick={handleCartClick}
              className="p-1.5 sm:p-2 text-[#F6F1E8]  transition-colors relative"
              aria-label="Shopping Cart"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 h-4 w-4 sm:h-5 sm:w-5 bg-[#d04b4b] text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile Icon/Picture */}
            <button
              onClick={handleProfileClick}
              className="p-0.5 sm:p-1 rounded-full border-2 border-gray-300 hover:border-[#316763] transition-colors"
              aria-label="Profile"
            >
              {isAuth && user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.username || 'User'}
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover"
                />
              ) : (
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
