"use client";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { useLangStore } from "@/stores/langStore";
import {
  visionHeroText,
  visionStrategyText,
  visionCoreValue,
  visionRndText,
} from "@/data/vision2";

export default function Vision2Page() {
  const { lang } = useLangStore();

  // Match rnd.tsx: set document title via useEffect
  useEffect(() => {
    document.title = lang === "KOR" ? "기업 비전" : "Vision";
  }, [lang]);

  const hero = visionHeroText[lang];
  const strategy = visionStrategyText[lang];
  const coreValues = visionCoreValue[lang];
  const rnd = visionRndText[lang];

  // --------- animations ----------
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

  // --------- small components ----------
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
    <Layout>
      <main className="min-h-screen bg-white text-slate-900" style={{ paddingTop: "90px" }}>
        {/* === Hero & Breadcrumb styled like rnd.tsx (content stays your own) === */}
        <HeroSection
          title={hero.title}
          //subtitle={hero.subtitle}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection path={lang === "KOR" ? "회사소개 > 기업 비전" : "Company > Vision"} />

        {/* ============ STRATEGY ============ */}
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

        {/* ============ CORE VALUE ============ */}
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

        {/* ============ BIZ MODEL ============ */}
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

        <hr className="my-8 border-gray-200 w-full" />
      </main>
    </Layout>
  );
}
