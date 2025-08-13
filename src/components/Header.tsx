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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(
    null
  );
  const { lang } = useLangStore();
  const NAV_ITEMS = lang === "KOR" ? navItemsKor : navItemsEng;

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <motion.header
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      {/* Main Nav Container */}
      <div
        className="w-full mx-auto max-w-screen-xl px-4 md:px-10 flex justify-between items-center text-sm md:text-base font-medium text-black"
        style={{ height: "90px" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/images/logo_suman.png"
            alt="회사 로고"
            width={100}
            height={100}
            priority
            className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10 lg:space-x-16 tracking-wide ml-24">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className="relative group cursor-pointer h-full flex items-center"
            >
              <Link
                href={item.href}
                className={`hover:font-semibold transition-colors duration-200`}
              >
                {item.label}
              </Link>
              {/* Submenu */}
              {item.submenu && item.submenu.length > 0 && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg rounded-b-md py-2 px-4 whitespace-nowrap"
                  >
                    <ul className="space-y-1 text-sm">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block text-gray-800 hover:text-blue-500 transition-colors duration-200"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              )}
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

      {/* Mobile Menu (remains unchanged) */}
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
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl"
                aria-label="Close mobile menu"
              >
                ✕
              </button>
            </div>
            {NAV_ITEMS.map((item, index) => (
              <div key={item.label}>
                <div
                  className="flex justify-between items-center py-2 text-lg font-medium cursor-pointer"
                  onClick={() =>
                    setExpandedMobileIndex(
                      expandedMobileIndex === index ? null : index
                    )
                  }
                >
                  <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                  {item.submenu.length > 0 && (
                    <span>{expandedMobileIndex === index ? "−" : "+"}</span>
                  )}
                </div>
                {expandedMobileIndex === index && (
                  <div className="pl-4">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block py-1 text-sm text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pl-4">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}