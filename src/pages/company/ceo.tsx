"use client";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import { ceoText } from "@/data/ceo";
import { useLangStore } from "@/stores/langStore";

// Text animations
const slideInLeft = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" } as Transition,
  },
};

const slideInRight = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" } as Transition,
  },
};

export default function CeoPage() {
  const lang = useLangStore((state) => state.lang);
  const { intro, body, closing } = ceoText[lang];

  // Match rnd.tsx: hero title/subtitle + breadcrumb directly under it
  const heroTitle = lang === "KOR" ? "CEO 인사말" : "CEO Message";
  const heroSubtitle =
    lang === "KOR"
      ? "신뢰와 혁신으로 미래를 열겠습니다"
      : "Opening the future with trust and innovation";

  return (
    <Layout>
      <Head>
        <title>{lang === "KOR" ? "CEO 인사말 | 수만" : "CEO Message | SUMAN"}</title>
      </Head>

      {/* === Hero (same layout/size pattern as rnd.tsx) === */}
      <main className="min-h-screen bg-white text-slate-900" style={{ paddingTop: "90px" }}>
        <HeroSection
          title={heroTitle}
          subtitle={heroSubtitle}
          backgroundImage="/images/sub_banner/ceo_hero.png"
        />

        {/* === Breadcrumb (same placement as rnd.tsx, directly below Hero) === */}
        <BreadcrumbSection
          path={lang === "KOR" ? "회사 소개 > CEO 인사말" : "Company > CEO Message"}
        />

        {/* === CEO Content === */}
        <section className="content-wrapper py-16 px-4 sm:px-6 lg:px-8 bg-white flex justify-center">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Message */}
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
                    <br />
                    <span className="text-black font-bold tracking-wide">
                      찾아주신 여러분, 반갑습니다.
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
                (주) 수만 대표이사 <strong className="ml-4">임태형</strong>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 self-stretch" />

            {/* CEO Image */}
            <motion.div
              className="md:w-1/2 flex items-center justify-center"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: "auto",
                  maxHeight: "550px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/company/ceo/ceo.jpeg"
                  alt="SUMAN CEO"
                  className="w-full h-full object-cover rounded-lg"
                  width={700}
                  height={500}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="my-6 border-gray-200 w-full" />
      </main>
    </Layout>
  );
}
