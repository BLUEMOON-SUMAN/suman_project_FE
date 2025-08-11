"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLangStore } from "@/stores/langStore";

const navItemsKor = [
  {
    label: "회사소개",
    href: "/company/ceo",
    submenu: [
      { label: "CEO 인사말", href: "/company/ceo" },
      { label: "기업 비전", href: "/company/vision" },
      { label: "연혁", href: "/company/history" },
      { label: "조직도", href: "/company/org" },
      { label: "CI", href: "/company/ci" },
      { label: "오시는 길", href: "/company/location" },
      { label: "인증 현황", href: "/company/certifications" },
    ],
  },
  {
    label: "사업분야",
    href: "/business/service",
    submenu: [{ label: "기술 소개", href: "/business/service" }],
  },
  {
    label: "인재채용",
    href: "/careers/philosophy",
    submenu: [
      { label: "인재상", href: "/careers/philosophy" },
      { label: "채용공고", href: "/careers/notice" },
    ],
  },
  {
    label: "고객지원",
    href: "/support/faq",
    submenu: [{ label: "문의하기", href: "/support/contact" }],
  },
];

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
    href: "/eng/support/faq",
    submenu: [{ label: "Contact Us", href: "/eng/support/contact" }],
  },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLangStore();
  const NAV_ITEMS = lang === "KOR" ? navItemsKor : navItemsEng;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const isHovered = hoveredIndex !== null;
  const isSolid = scrollY > 0 || isHovered;
  const bgColor = isSolid ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)";
  const textColor = isSolid ? "text-black" : "text-white";

  return (
    <AnimatePresence>
      <motion.header
        role="navigation"
        aria-label="Main Navigation"
        className="fixed top-0 left-0 w-full z-50"
        onMouseLeave={() => setHoveredIndex(null)}
        initial={false}
        animate={{
          y: 0,
          backgroundColor: bgColor,
          height: isHovered ? 130 : 90,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Main Nav */}
        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center space-y-4">
          {/* Logo + SUMAN */}
          <div className="flex items-center space-x-4">
            <Image
            src="/images/logo_suman.png"
            alt="SUMAN Logo"
            width={60}
            height={60}
            className="h-12 w-auto"
            />
            <h1 className="text-3xl font-bold">SUMAN</h1>
            </div>
        {/*<div className={`w-full mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 h-[70px] md:h-[80px] flex justify-between items-center text-sm md:text-base font-medium ${textColor}`}>
           Logo 
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/images/logo_suman.png"
              alt="회사 로고"
              width={100}
              height={100}
              priority
              className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer"
            />
          </Link>*/}

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-16 xl:space-x-24 tracking-wide">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                className="hover:font-semibold transition-colors duration-200"
              >
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center h-full">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
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
              className="md:hidden fixed top-0 right-0 w-[75%] h-screen bg-white text-black px-6 py-6 space-y-4 shadow-lg z-50 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="/">
                  <Image
                    src="/images/logo_suman.png"
                    alt="회사 로고"
                    width={100}
                    height={100}
                    className="cursor-pointer"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl"
                  aria-label="Close mobile menu"
                >
                  ✕
                </button>
              </div>
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-1 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block pl-2 py-1 text-sm text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Submenu */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="submenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="hidden md:block w-full border-t border-gray-200 bg-white z-40 shadow-sm"
            >
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4 flex justify-between items-start">
                <div className="w-[120px]" />
                <div className="flex justify-center flex-1 space-x-4 text-gray-600 tracking-wide">
                  {NAV_ITEMS.map((mainItem) => (
                    <div
                      key={mainItem.label}
                      className="flex flex-col items-start min-w-[150px]"
                    >
                        {mainItem.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="hover:font-medium py-1 transition-colors duration-200"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="w-[60px]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Hero Section with Logo and Text */}
<div className="w-full bg-blue-900 text-white py-16 px-4">
  <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center space-y-4">
    {/* Logo + SUMAN */}
    <div className="flex items-center space-x-4">
      <Image
        src="/images/logo_suman.png"
        alt="SUMAN Logo"
        width={60}
        height={60}
        className="h-12 w-auto"
      />
      <h1 className="text-3xl font-bold">SUMAN</h1>
    </div>

    {/* Korean Text */}
    <div className="text-lg">
      <p>해당 홈페이지는</p>
      <p className="text-sm text-gray-200 mt-2">
        문의하기는 추후 정식 운영될 예정이며 현재는 미운영 중입니다.
      </p>
    </div>
  </div>
</div>

    </AnimatePresence>
  );
}
