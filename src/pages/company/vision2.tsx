"use client";

import Head from "next/head";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import { useState, useEffect } from "react";
// OPTIONAL: if you have a global language store, uncomment the next line
// import { useLangStore } from "@/stores/langStore";
import {
  visionHeroText,
  visionStrategyText,
  visionCoreValue,
  visionRndText,
} from "@/data/vision2";

type Lang = "KOR" | "ENG";

export default function Vision2Page() {
  /* -------- OPTION A: local page state (works immediately) -------- */
  const [lang, setLang] = useState<Lang>("KOR");

  /* -------- OPTION B: global store (uncomment if you have it) -----
  const { lang, setLang } = useLangStore();
  ------------------------------------------------------------------ */

  const hero = visionHeroText[lang];
  const strategy = visionStrategyText[lang];
  const coreValues = visionCoreValue[lang];
  const rnd = visionRndText[lang];

  const fadeIn: Record<"hidden" | "visible", any> = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as Transition },
  };

  const itemRiseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } as Transition },
  };

  const rndSectionRiseVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut", when: "beforeChildren" } as Transition,
    },
  };

  const rndBoxLeftInVariants = {
    hidden: { opacity: 0, x: -100, backgroundColor: "rgba(255,255,255,0)" },
    visible: {
      opacity: 1,
      x: 0,
      backgroundColor: "rgba(255,255,255,0.4)",
      transition: { duration: 0.4, ease: "easeOut", when: "beforeChildren" } as Transition,
    },
  };

  const rndBoxRightInVariants = {
    hidden: { opacity: 0, x: 100, backgroundColor: "rgba(0,0,0,0)" },
    visible: {
      opacity: 1,
      x: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      transition: { duration: 0.4, ease: "easeOut", when: "beforeChildren" } as Transition,
    },
  };

  const processLineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } as Transition },
  };

  const AnimatedCounter = ({
    end,
    duration = 2,
    suffix = "",
  }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
      if (!seen) return;
      let startTs = 0;
      const step = (ts: number) => {
        if (!startTs) startTs = ts;
        const p = Math.min((ts - startTs) / (duration * 1000), 1);
        setCount(Math.floor(p * end));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [seen, end, duration]);

    return (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => setSeen(true)}
        className="inline-flex items-baseline gap-2"
      >
        <span className="text-5xl md:text-6xl font-extrabold tracking-tight">{count}</span>
        {suffix ? <span className="text-lg md:text-xl font-semibold opacity-70">{suffix}</span> : null}
      </motion.span>
    );
  };

  return (
    <>
      <Head>
        <title>{lang === "KOR" ? "비전 | 수만" : "Vision | SUMAN"}</title>
      </Head>

      <Layout>
        {/* Simple language toggle button */}
        <div className="fixed right-4 top-20 z-40">
          <button
            onClick={() => setLang((prev) => (prev === "KOR" ? "ENG" : "KOR"))}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow hover:bg-slate-50"
          >
            {lang === "KOR" ? "English" : "한국어"}
          </button>
        </div>

        <main className="min-h-screen bg-white text-slate-900">
          <HeroSection
            title={hero.title}
            subtitle={hero.subtitle}
            backgroundImage="/images/sub_banner/company_banner.png"
          />
          <BreadcrumbSection path={lang === "KOR" ? "회사소개 > 기업 비전" : "Company > Vision"} />

          {/* STRATEGY */}
          <motion.section
            className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">{strategy.subtitle}</h2>
              <p className="text-slate-600 mb-8">{strategy.title}</p>

              <div className="text-center mb-10">
                <h3 className="text-4xl md:text-6xl font-black mb-6">{strategy.neoTitle}</h3>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
                  <p className="text-lg md:text-xl whitespace-pre-line leading-relaxed">
                    {strategy.mainGoal}
                  </p>
                </div>
              </div>

              {/* KPI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="rounded-2xl border p-6">
                  <p className="text-center opacity-70 mb-3">
                    {lang === "KOR" ? "목표 매출액" : "Target Revenue"}
                  </p>
                  <div className="flex justify-center">
                    <AnimatedCounter end={600} suffix={lang === "KOR" ? "억원" : "B KRW"} />
                  </div>
                </div>
                <div className="rounded-2xl border p-6">
                  <p className="text-center opacity-70 mb-3">
                    {lang === "KOR" ? "목표 순이익" : "Target Net Profit"}
                  </p>
                  <div className="flex justify-center">
                    <AnimatedCounter end={150} suffix={lang === "KOR" ? "억원" : "B KRW"} />
                  </div>
                </div>
              </div>

              {/* Roadmap */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {strategy.strategicPoints.map((point: string, i: number) => (
                  <motion.div key={i} className="rounded-xl border p-6 text-center" variants={itemVariants}>
                    <div className="text-4xl md:text-5xl font-extrabold mb-2">
                      {["2024", "2026", "2028"][i] ?? ""}
                    </div>
                    <p className="whitespace-pre-line opacity-80">{point}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* CORE VALUES */}
          <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">
                {lang === "KOR" ? "핵심 가치" : "Core Values"}
              </h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {coreValues.map((cv: { title: string; desc: string }, idx: number) => (
                  <motion.div key={idx} className="rounded-xl p-5 border shadow-sm" variants={itemVariants}>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">{cv.title}</h4>
                    <p className="text-sm whitespace-pre-line opacity-80">{cv.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* BIZ MODEL */}
          <section className="py-12 md:py-16 px-4 md:px-8 bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{strategy.bizModelTitle}</h3>
              <p className="text-slate-700 whitespace-pre-line mb-8">{strategy.bizModelSubtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="rounded-xl p-5 border bg-white">
                  <h5 className="font-semibold mb-2">R&BD / Development</h5>
                  <p className="text-sm whitespace-pre-line opacity-80">
                    {strategy.businessAreas.development}
                  </p>
                </div>
                <div className="rounded-xl p-5 border bg-white">
                  <h5 className="font-semibold mb-2">Manufacturing</h5>
                  <p className="text-sm whitespace-pre-line opacity-80">
                    {strategy.businessAreas.manufacturing}
                  </p>
                </div>
                <div className="rounded-xl p-5 border bg-white">
                  <h5 className="font-semibold mb-2">Partnerships</h5>
                  <p className="text-sm whitespace-pre-line opacity-80">
                    {strategy.businessAreas.partnerships}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {strategy.businessAreas.sectors.map((s: string, i: number) => (
                  <div key={i} className="rounded-lg border p-4 bg-white text-center">
                    <p className="text-sm whitespace-pre-line">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Secondary Core Value section with images (kept from your code) */}
          <section className="core-value-section bg-white py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-4 text-left tracking-wide">
                Core Value
              </h2>
              <br />
              <br />
              <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 mb-2 whitespace-pre-line">
                {lang === "KOR"
                  ? "끊임없이 변화하는 시대\n우리는 유연함과 전문성으로 대응합니다"
                  : "In a Constantly Changing Era\nWe Respond with Agility and Expertise"}
              </p>
              <br />
              <br />
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-12 gap-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {coreValues.map((value, idx) => (
                  <motion.div
                    key={idx}
                    className="relative flex flex-col justify-end p-4 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[320px] md:min-h-[380px]"
                    variants={itemRiseVariants}
                    style={{
                      backgroundImage: `url(/images/company/vision/vision_${["Flex", "pro", "tek", "rnbd"][idx]}.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      clipPath:
                        "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-black opacity-40"
                      style={{
                        clipPath:
                          "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                      }}
                    />
                    <div className="relative text-white flex flex-col flex-grow justify-start pt-48 md:pt-60">
                      <h3 className="text-[20px] md:text-[25px] font-semibold mb-2">{value.title}</h3>
                      <p className="text-[13px] md:text-[15px] whitespace-pre-line">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* R&D */}
          <motion.section
            className="rnd-section bg-[#010104] text-white py-12 md:py-20 px-4 md:px-8 rounded-t-3xl overflow-hidden relative"
            variants={rndSectionRiseVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{
              backgroundImage: 'url("/images/company/vision/vision_R&D_bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center 245px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="max-w-7xl mx-auto relative z-10">
              <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-white mb-12 md:mb-18 text-left tracking-wide ">
                {rnd.title}
              </h2>
              <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-8 md:mb-12 text-left whitespace-pre-line tracking-wide">
                {rnd.subtitle}
              </p>
              <div className="rnd-content flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="md:w-1/2 flex flex-col items-end pr-0">
                  <motion.div className="bg-white/40 rounded-4xl p-3 mb-4 w-full max-w-72 h-20 md:h-23 backdrop-blur-sm" variants={rndBoxLeftInVariants}>
                    <p className="text-[20px] md:text-[25px] text-white font-semibold mb-2 flex items-center justify-center">
                      {rnd.leftBox1Title}
                    </p>
                    <p className="text-[13px] md:text-[15px] text-white flex items-center justify-center">
                      {rnd.leftBox1Desc}
                    </p>
                  </motion.div>
                  <motion.div className="bg-white/40 rounded-4xl p-3 mb-4 w-full max-w-72 h-20 md:h-23 backdrop-blur-sm" variants={rndBoxLeftInVariants}>
                    <p className="text-[20px] md:text-[25px] text-white font-semibold mb-2 flex items-center justify-center">
                      {rnd.leftBox2Title}
                    </p>
                    <p className="text-[13px] md:text-[15px] text-white flex items-center justify-center">
                      {rnd.leftBox2Desc}
                    </p>
                  </motion.div>
                </div>
                <motion.div className="hidden md:flex flex-col justify-center items-center h-full" variants={processLineVariants}>
                  <svg width="188" height="71" viewBox="0 0 188 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id={`mask0_${lang}`} style={{ maskType: "alpha" } as any} maskUnits="userSpaceOnUse" x="0" y="0" width="188" height="71">
                      <rect width="20" height="71" fill="black" />
                      <rect x="42" width="20" height="71" fill="black" />
                      <rect x="84" width="20" height="71" fill="black" />
                      <rect x="126" width="20" height="71" fill="black" />
                      <rect x="168" width="20" height="71" fill="black" />
                    </mask>
                    <g mask={`url(#mask0_${lang})`}>
                      <rect x="-23" width="226" height="71" fill={`url(#paint0_linear_${lang})`} />
                    </g>
                    <defs>
                      <linearGradient id={`paint0_linear_${lang}`} x1="-23" y1="35.5" x2="203" y2="35.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                <div className="md:w-1/2 flex flex-col justify-center pl-0">
                  <motion.div
                    className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                    style={{ backgroundImage: 'url("/images/company/vision/vision_dev.png")' }}
                    variants={rndBoxRightInVariants}
                  >
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/100 via-[79%] to-transparent p-4">
                      <p className="text-gray-300 text-[13px] md:text-[15px] mb-1">{rnd.rightBoxTop}</p>
                      <p className="text-[20px] md:text-[25px] font-semibold">{rnd.rightBoxTitle}</p>
                      <p className="text-[16px] md:text-[20px] text-gray-300">{rnd.rightBoxDesc}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </Layout>
    </>
  );
}
