import Header from "@/components/Header";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { ceoText } from "@/data/ceo";
import { useLangStore } from "@/stores/langStore";
import { useState } from "react";

// Ceo인사말 애니메이션
const slideInLeft = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" } as Transition,
  },
};
// Ceo 이미지 애니메이션
const slideInRight = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" } as Transition,
  },
};
// 대표이사 서명 애니메이션 (이 부분은 더 이상 개별적으로 사용되지 않으므로 필요 없음)
// const slideInLeftBottom = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" } as Transition,
//   },
// };

export default function CeoPage() {
  const lang = useLangStore((state) => state.lang);
  const { intro, body, closing } = ceoText[lang];

  return (
    <Layout>
      <Head>
        <title>{lang === "KOR" ? "CEO 인사말 " : "Recruit Notice | SUMAN"}</title>
      </Head>

      <Header />

      {/* "CEO 인사말" HeroSection */}
      <HeroSection
        title={lang === "KOR" ? "CEO 인사말" : "CEO Message"}
        backgroundImage="/images/sub_banner/ceo_hero.png"
      />

      {/* 서브 내비게이션 (Breadcrumb) 섹션 */}
        <BreadcrumbSection
          path={lang === "KOR" ? "회사 소개 > CEO 인사말" : " Company > CEO Message"}
        />
      {/* CEO 인사말 섹션 */}
      <main className="content-wrapper py-16 px-4 sm:px-6 lg:px-8 bg-white flex justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* 인사말 내용 */}
          <motion.div
            className="md:w-1/2 text-gray-700 leading-relaxed space-y-6"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              {lang === "KOR" ? (
                <>
                  <span className="text-blue-600 font-bold tracking-wide">SUMAN</span>
                  <span className="text-black font-bold tracking-wide">을</span>
                  <br />
                  <span className="text-black font-bold tracking-wide">
                    찾아주신 고객 여러분, 반갑습니다.
                  </span>
                </>
              ) : (
                <>
                  <span className="text-blue-600 font-bold tracking-wide">SUMAN</span>
                  <br />
                  <span className="text-black font-bold tracking-wide">
                    Welcome, dear customers,
                  </span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed">{intro}</p>
            {body.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg tracking-wide leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-base sm:text-lg tracking-wide leading-relaxed">{closing}</p>
            <div className="signature-area mt-10 text-base sm:text-lg text-gray-800">
              (주) 수만 대표이사 <strong className="ml-4"> 임태형</strong>
            </div>
          </motion.div>

          {/* 구분선 */}
          <div className="hidden md:block w-px bg-gray-200 self-stretch" />

          {/* CEO 이미지 */}
          <motion.div
            className="md:w-1/2 flex items-center justify-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="placeholder-image w-full flex items-center justify-center text-blue-500 font-bold text-2xl"
              style={{
                height: "auto",
                maxHeight: "550px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/company/ceo/ceo.jpeg"
                alt="SUMAN CEO"
                className="w-full h-full object-cover"
                width={700}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </main>
      <hr className="my-6 border-gray-200 w-full" />
    </Layout>
  );
}
