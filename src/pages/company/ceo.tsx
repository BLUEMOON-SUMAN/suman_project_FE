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
        <title>CEO인사말 | 수만</title>
      </Head>

      <Header />

      {/* "CEO 인사말" HeroSection */}
      <HeroSection
        title="CEO 인사말"
        subtitle="CEO Message"
        backgroundImage="/images/sub_banner/ceo_hero.png"
      />

      {/* 서브 내비게이션 (Breadcrumb) 섹션 */}
      <BreadcrumbSection path="회사소개 > CEO 인사말" />

      {/* CEO 인사말 섹션 */}
      <main className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
          {/* 인사말 내용과 서명 섹션을 하나의 motion.div로 묶음 */}
          <motion.div
            className="ceo-text-column md:w-[48%] text-gray-700 leading-relaxed"
            variants={slideInLeft} // 상위 요소의 애니메이션 사용
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
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
            <p className="mb-4 text-lg tracking-wide leading-[2]">{intro}</p>
            <p className="mb-4 text-lg whitespace-pre-line tracking-wide leading-[1.7]">{body}</p>
            <p className="mb-4 text-lg tracking-wide leading-[2]">{closing}</p>
            {/* 서명 영역 - 이제 별도의 motion.div가 아님 */}
            <div className="signature-area text-lg  text-gray-800 mt-14 tracking-wide">
              (주) 수만 대표이사 <strong className="ml-4"> 임태형</strong>{" "}
              {/* <Image
                src="/images/signature.png"
                alt="대표이사 서명"
                className="w-40 h-auto inline-block align-middle ml-2"
                width={100}
                height={100}
              /> */}
            </div>
          </motion.div>

          {/*Ceo 인사말과 Ceo이미지 사이 회색 실선 */}
          <div className="hidden md:block w-px min-h-[700px] bg-gray-200 self-stretch mr-8" />

          {/* 이미지 플레이스홀더 */}
          <motion.div
            className="ceo-image-column md:w-[48%] flex items-center justify-center"
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
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
}
