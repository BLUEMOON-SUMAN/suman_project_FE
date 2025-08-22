"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { motion, type Transition } from "framer-motion";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { useLangStore } from "@/stores/langStore";
import {
  visionHeroText,
  visionStrategyText,
  visionCoreValue,
  visionRndText,
} from "@/data/vision2";

type Lang = "KOR" | "ENG";

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

const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
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

export default function Vision2Page({ lang = "KOR" as Lang }) {
  const hero = visionHeroText[lang];
  const strategy = visionStrategyText[lang];
  const coreValues = visionCoreValue[lang];
  const rnd = visionRndText[lang];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{hero.title}</h1>
          <p className="text-lg md:text-xl opacity-90">{hero.subtitle}</p>
        </div>
      </section>

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
              <p className="text-lg md:text-xl whitespace-pre-line leading-relaxed">{strategy.mainGoal}</p>
            </div>
          </div>

          {/* KPI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border p-6">
              <p className="text-center opacity-70 mb-3">{lang === "KOR" ? "목표 매출액" : "Target Revenue"}</p>
              <div className="flex justify-center">
                <AnimatedCounter end={600} suffix={lang === "KOR" ? "억원" : "B KRW"} />
              </div>
            </div>
            <div className="rounded-2xl border p-6">
              <p className="text-center opacity-70 mb-3">{lang === "KOR" ? "목표 순이익" : "Target Net Profit"}</p>
              <div className="flex justify-center">
                <AnimatedCounter end={150} suffix={lang === "KOR" ? "억원" : "B KRW"} />
              </div>
            </div>
          </div>

          {/* Roadmap (from strategicPoints) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {strategy.strategicPoints.map((point, i) => (
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

      {/* CORE VALUES (cards use visionCoreValue) */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">{lang === "KOR" ? "핵심 가치" : "Core Values"}</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((cv, idx) => (
              <motion.div key={idx} className="rounded-xl p-5 border shadow-sm" variants={itemVariants}>
                <h4 className="text-lg md:text-xl font-semibold mb-2">{cv.title}</h4>
                <p className="text-sm whitespace-pre-line opacity-80">{cv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BIZ MODEL (only from strategy.businessAreas + titles) */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{strategy.bizModelTitle}</h3>
          <p className="text-slate-700 whitespace-pre-line mb-8">{strategy.bizModelSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl p-5 border bg-white">
              <h5 className="font-semibold mb-2">R&BD / Development</h5>
              <p className="text-sm whitespace-pre-line opacity-80">{strategy.businessAreas.development}</p>
            </div>
            <div className="rounded-xl p-5 border bg-white">
              <h5 className="font-semibold mb-2">Manufacturing</h5>
              <p className="text-sm whitespace-pre-line opacity-80">{strategy.businessAreas.manufacturing}</p>
            </div>
            <div className="rounded-xl p-5 border bg-white">
              <h5 className="font-semibold mb-2">Partnerships</h5>
              <p className="text-sm whitespace-pre-line opacity-80">{strategy.businessAreas.partnerships}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {strategy.businessAreas.sectors.map((s, i) => (
              <div key={i} className="rounded-lg border p-4 bg-white text-center">
                <p className="text-sm whitespace-pre-line">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D */}
      <motion.section
        className="py-12 md:py-16 px-4 md:px-8 bg-slate-900 text-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">{rnd.title}</h3>
          <p className="text-xl md:text-2xl font-bold mb-10 whitespace-pre-line">{rnd.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-xl font-semibold">{rnd.leftBox1Title}</p>
                <p className="opacity-80 text-sm">{rnd.leftBox1Desc}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-xl font-semibold">{rnd.leftBox2Title}</p>
                <p className="opacity-80 text-sm">{rnd.leftBox2Desc}</p>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="opacity-80 text-xs mb-1">{rnd.rightBoxTop}</p>
              <p className="text-xl md:text-2xl font-semibold mb-1">{rnd.rightBoxTitle}</p>
              <p className="opacity-80">{rnd.rightBoxDesc}</p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}