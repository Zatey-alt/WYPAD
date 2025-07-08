'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Home, Users, MessageCircle, Bell, Grid3X3, BaggageClaim, Briefcase, BriefcaseBusiness, Menu, X, User, HelpCircle, FileText, Lock, LogOut } from 'lucide-react';

export default function HeaderNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && event.target && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white border-b fixed w-full border-gray-200 px-4 py-2 z-50 md:block hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col leading-tight">
              <Link href="/" className="flex items-center">
                <span className="text-lg font-bold text-gray-900">WYPAD</span>
              </Link>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Explore
              </Link>
              <Link href="/opportunities" className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                <BriefcaseBusiness className="w-4 h-4 mr-1" />
                Opportunities
              </Link>
            </nav>

            {/* Notifications */}
            <a href="/notifications" className="relative flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              <Bell className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </a>

            {/* User Profile with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={handleProfileClick}
                className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-900 hidden lg:inline">Ergad Baglag</span>
                <svg 
                  className={`w-4 h-4 text-gray-400 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <Link 
                    href="/profile" 
                    onClick={handleDropdownItemClick}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <User className="w-4 h-4 mr-3 text-gray-400" />
                    View Profile
                  </Link>
                  <Link 
                    href="/help" 
                    onClick={handleDropdownItemClick}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <HelpCircle className="w-4 h-4 mr-3 text-gray-400" />
                    Help & Support
                  </Link>
                  <Link 
                    href="/manage-posts" 
                    onClick={handleDropdownItemClick}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-3 text-gray-400" />
                    Manage Posts
                  </Link>
                  <Link 
                    href="/change-password" 
                    onClick={handleDropdownItemClick}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Lock className="w-4 h-4 mr-3 text-gray-400" />
                    Change Password
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button 
                    onClick={handleDropdownItemClick}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-3 text-red-500" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header with Search */}
      <header className="bg-white border-b fixed w-full border-gray-200 px-4 py-2 z-50 md:hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-gray-900">WYPAD</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Mobile Menu (Profile options) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              {/* Mobile User Profile with Dropdown Options */}
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center space-x-3 py-2 px-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-900">Ergad Baglag</span>
                </div>
                
                {/* Mobile Profile Menu Items */}
                <div className="space-y-1">
                  <Link href="/profile" className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <User className="w-4 h-4 mr-3" />
                    View Profile
                  </Link>
                  <Link href="/help" className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <HelpCircle className="w-4 h-4 mr-3" />
                    Help & Support
                  </Link>
                  <Link href="/manage-posts" className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <FileText className="w-4 h-4 mr-3" />
                    Manage Posts
                  </Link>
                  <Link href="/change-password" className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Lock className="w-4 h-4 mr-3" />
                    Change Password
                  </Link>
                  <button className="flex items-center w-full text-red-600 hover:text-red-700 text-sm font-medium py-2 px-2 rounded-lg hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex items-center justify-around max-w-7xl mx-auto">
          <Link href="/" className="flex flex-col items-center space-y-1 text-gray-600 hover:text-gray-900 transition-colors py-2">
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link href="/opportunities" className="flex flex-col items-center space-y-1 text-gray-600 hover:text-gray-900 transition-colors py-2">
            <BriefcaseBusiness className="w-5 h-5" />
            <span className="text-xs font-medium">Opportunities</span>
          </Link>
          <Link href="/notifications" className="relative flex flex-col items-center space-y-1 text-gray-600 hover:text-gray-900 transition-colors py-2">
            <Bell className="w-5 h-5" />
            <span className="text-xs font-medium">Notifications</span>
            <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center space-y-1 text-gray-600 hover:text-gray-900 transition-colors py-2">
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
}