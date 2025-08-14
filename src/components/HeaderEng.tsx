"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLangStore } from "@/stores/langStore";


const navItemsEng = [
  {
    label: "Company",
    href: "/eng/company/ceo",
    submenu: [
      { label: "CEO Message", href: "/eng/company/ceo" },
      { label: "Vision", href: "/eng/company/vision" },
      { label: "History", href: "/eng/company/history" },
      { label: "Organization", href: "/eng/company/org" },
      { label: "CI", href: "/eng/company/ci" },
      { label: "Location", href: "/eng/company/location" },
      { label: "Certifications", href: "/eng/company/certifications" },
    ],
  },
  {
    label: "Business",
    href: "/eng/business/service",
    submenu: [{ label: "Production", href: "/eng/business/service" }],
  },
  {
    label: "Careers",
    href: "/eng/careers/philosophy",
    submenu: [
      { label: "Talent Philosophy", href: "/eng/careers/philosophy" },
      { label: "Recruit Notice", href: "/eng/careers/notice" },
    ],
  },
  {
    label: "Support",
    href: "/eng/support/contact",
    submenu: [{ label: "Contact Us", href: "/eng/support/contact" }],
  },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(null);
  const { lang } = useLangStore();
  const NAV_ITEMS = navItemsEng;

  // Closes the mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 'lg' breakpoint
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevents body scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileIndex(null);
  };

  return (
    <AnimatePresence>
      <motion.header
        role="navigation"
        aria-label="Main Navigation"
        className="fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 shadow-md"
      >
        {/* Main Nav Container */}
        <div
          className="w-full mx-auto max-w-screen-2xl px-4 lg:px-20 flex justify-between items-center text-sm lg:text-base font-medium text-black"
          style={{ height: "90px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/images/logo_suman.png"
              alt="SUMAN CO., Ltd company logo"
              width={100}
              height={100}
              priority
              className="h-8 sm:h-10 lg:h-12 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation Container - Centered */}
          <div className="hidden lg:flex flex-grow justify-center items-center h-full">
            <nav className="flex items-center space-x-28 h-full">
              {NAV_ITEMS.map((item, index) => (
                <div
                  key={item.label}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative h-full flex items-center group cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className="lg:text-lg font-bold hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {hoveredIndex === index && item.submenu.length > 0 && (
                      <motion.div
                        className="absolute top-[90px] left-1/2 -translate-x-1/2 w-max bg-white text-black py-4 px-6 border-t border-gray-200 shadow-lg flex flex-col space-y-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="font-normal text-gray-700 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* Language Switcher Container */}
          <div className="hidden lg:flex items-center h-full">
            <LanguageSwitcher />
          </div>

          {/* Mobile Burger Menu Button - Hidden on large screens */}
          <button
            className="text-2xl lg:hidden text-black"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden fixed top-0 right-0 w-[75%] h-screen bg-white text-black px-6 py-6 space-y-4 shadow-lg z-50 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={closeMobileMenu}
                  className="text-xl"
                  aria-label="Close mobile menu"
                >
                  ✕
                </button>
                <LanguageSwitcher />
              </div>
              {NAV_ITEMS.map((item, index) => (
                <div key={item.label}>
                  <div
                    className="flex justify-between items-center py-2 text-lg font-medium cursor-pointer"
                    onClick={() =>
                      setExpandedMobileIndex(expandedMobileIndex === index ? null : index)
                    }
                  >
                    <Link href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                    {item.submenu.length > 0 && <span>{expandedMobileIndex === index ? "−" : "+"}</span>}
                  </div>
                  <AnimatePresence>
                    {expandedMobileIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 overflow-hidden"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block py-1 text-sm text-gray-700"
                            onClick={closeMobileMenu}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
