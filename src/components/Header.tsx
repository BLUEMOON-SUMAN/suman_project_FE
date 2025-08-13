"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileIndex(null);
  };

  return (
    <motion.header
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300"
    >
      {/* Main Nav Container */}
      <div
        className="w-full mx-auto max-w-screen-xl px-4 lg:px-10 flex justify-between items-center text-sm lg:text-base font-medium text-black"
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
            className="h-8 sm:h-10 lg:h-12 w-auto cursor-pointer"
          />
        </Link>

        {/* Menu Button (always visible) */}
        <button
          className="text-2xl"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (now visible on all screens) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full sm:w-[40%] md:w-[20%] lg:w-[10%] min-h-screen bg-white text-black px-4 py-4 space-y-2 shadow-lg z-50 flex flex-col justify-start"
            style={{ height: 'auto', maxHeight: '100vh' }}

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
                  className="flex items-center py-2 text-lg font-medium cursor-pointer"
                  onClick={() =>
                    setExpandedMobileIndex(
                      expandedMobileIndex === index ? null : index
                    )
                  }
                >
                  <Link href={item.href} onClick={closeMobileMenu} className="flex-grow">
                    {item.label}
                  </Link>
                  {item.submenu.length > 0 && (
                    <span>{expandedMobileIndex === index ? "−" : "+"}</span>
                  )}
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
  );
}