"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLangStore } from "@/stores/langStore";

// -----------------------------------
//               Nav_KOR
// -----------------------------------
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

// -----------------------------------
//               Nav_ENG
// -----------------------------------
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
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHovered = hoveredIndex !== null;
  const { lang } = useLangStore();
  const NAV_ITEMS = lang === "KOR" ? navItemsKor : navItemsEng; // LangStore의 값이 KOR이면, Nav_Items의 값은 navItemsKor.

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

const isVisible = true; // Always visible
const isSolid = true;   // Always white background


  const bgColor = isSolid ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)";
  const textColor = isSolid ? "text-black" : "text-white";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full z-50"
        onMouseLeave={() => setHoveredIndex(null)}
        initial={false}
        animate={{
          y: isVisible ? 0 : -100,
          backgroundColor: bgColor,
          height: isHovered ? 120 : 64,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* 메인 메뉴 영역 */}
        <div
          className={`w-full mx-auto px-6 md:px-[60px] lg:px-[120px] py-3 flex justify-between items-center text-lg font-medium ${textColor}`}
        >
          {/* 로고 */}
          <div className="flex-none">
            <Link href="/">
              <Image
                src="/images/logo_suman.png"
                alt="회사 로고"
                width={70}
                height={70}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* 메인 메뉴 (데스크탑) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-12 lg:space-x-24 xl:space-x-40 tracking-wide">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                className="hover:font-semibold"
              >
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </nav>

          {/* 햄버거 버튼 (모바일) */}
          <div className="md:hidden">
            <button
              className="text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* 언어 변경 */}
          <div className="hidden md:flex flex-none items-center h-full">
            <LanguageSwitcher />
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-0 right-0 w-[65%] h-screen bg-white text-black px-6 py-6 space-y-4 shadow-lg z-50"
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="/">
                  <Image
                    src="/images/logo_suman.png"
                    alt="회사 로고"
                    width={70}
                    height={70}
                    className="cursor-pointer"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl"
                >
                  ✕
                </button>
              </div>
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-1 text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block pl-1 py-1 text-sm text-gray-700"
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

        {/* 서브 메뉴 (데스크탑 전용) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="submenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="hidden md:block w-full border-t border-gray-200 bg-white z-40"
            >
              <div className="max-w-full mx-auto px-6 md:px-[120px] lg:px-[120px] py-4 flex justify-between items-start">
                <div className="w-[120px]" />

                <div className="flex justify-center flex-1 space-x-0 lg:space-x-4 xl:space-x-19 md:text-sm lg:text-base text-gray-600 tracking-wide">
                  {NAV_ITEMS.map((mainItem) => (
                    <div
                      key={mainItem.label}
                      className="flex flex-col items-start min-w-[150px]"
                    >
                      {mainItem.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="hover:font-medium py-1"
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
      </motion.div>
    </AnimatePresence>
  );
}
