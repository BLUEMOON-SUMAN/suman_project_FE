"use client";

import Head from "next/head";
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
} from "@/data/vision2"

export default function Vision2Page() {
  // Mock language state since useLangStore is not available
  const [lang, setLang] = useState<"KOR" | "ENG">("KOR");

  const hero = visionHeroText[lang];
  const strategy = visionStrategyText[lang];
  const coreValues = visionCoreValue[lang];
  const rnd = visionRndText[lang];

  // Enhanced animations
  const fadeIn: Record<"hidden" | "visible", any> = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as Transition },
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

  // Enhanced Animated Counter
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => setSeen(true)}
        className="inline-flex items-baseline gap-2"
      >
        <span className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent tracking-tight">
          {count}
        </span>
        {suffix ? <span className="text-xl md:text-2xl font-bold text-slate-300">{suffix}</span> : null}
      </motion.span>
    );
  };

  // Simplified Tech Business Model Component
  const TechBusinessModel = ({ strategy }: { strategy: any }) => {
    return (
      <div className="relative w-full max-w-5xl mx-auto p-6 md:p-8">
        {/* Central Innovation Hub with Subtle Orbital Effects */}
        <div className="flex justify-center items-center mb-16 relative">
          {/* Subtle Orbital Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute border border-slate-400/10 rounded-full`}
                style={{
                  width: `${240 + i * 120}px`,
                  height: `${240 + i * 120}px`,
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 30 + i * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 5,
                }}
              />
            ))}
          </div>

          {/* Central Hub */}
          <motion.div
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center shadow-2xl z-10"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 10 }}
            style={{ 
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
              boxShadow: `
                0 0 60px rgba(15, 23, 42, 0.4),
                inset 0 0 40px rgba(148, 163, 184, 0.05)
              `
            }}
          >
            <div className="text-center text-white relative z-10">
              <div className="text-sm md:text-base font-bold mb-1 tracking-wider">OPEN</div>
              <div className="text-sm md:text-base font-bold tracking-wider">INNOVATION</div>
            </div>
          </motion.div>
        </div>

        {/* Business Areas with Clean Design */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { 
              title: "R&BD / Development", 
              content: strategy.businessAreas.development,
              icon: "🔬",
              gradient: "from-slate-800 via-slate-700 to-slate-900"
            },
            { 
              title: "Manufacturing", 
              content: strategy.businessAreas.manufacturing,
              icon: "⚙️",
              gradient: "from-slate-700 via-slate-600 to-slate-800"
            },
            { 
              title: "Partnerships", 
              content: strategy.businessAreas.partnerships,
              icon: "🤝",
              gradient: "from-slate-900 via-slate-800 to-black"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0, 
                  transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
                }
              }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: "1000px" }}
            >
              {/* Clean Tech Card */}
              <div className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl p-6 shadow-xl border border-slate-600/30 backdrop-blur-sm h-48`}>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <h5 className="text-base md:text-lg font-bold text-white tracking-wide">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {item.content.split('\n')[0]}
                  </p>

                  {/* Simple Accent Line */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-slate-400/40 via-slate-500/60 to-transparent rounded-full" />
                </div>

                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          onClick={() => setLang(lang === "KOR" ? "ENG" : "KOR")}
          className="bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl hover:bg-slate-800/90 transition-all duration-300 text-sm border border-slate-600/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang === "KOR" ? "English" : "한국어"}
        </motion.button>
      </div>

      <main className="min-h-screen bg-white text-slate-900">
        {/* Enhanced Hero Section with Background Image */}
        <section 
          className="relative h-80 md:h-96 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1618589166766-93188eeea911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZ5JTIwZGFyayUyMGFic3RyYWN0JTIwdGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNTU2MDg3Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Subtle floating elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                {hero.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90">{hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-gray-100 py-4 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-gray-600">
              {lang === "KOR" ? "회사소개 > 기업 비전" : "Company > Vision"}
            </p>
          </div>
        </section>

        {/* Enhanced Strategy Section with Background Image */}
        <motion.section
          className="relative py-16 md:py-20 px-4 md:px-8 overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1690035921522-d3a2120f7e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYmx1ZSUyMGNvcnBvcmF0ZSUyMGJ1c2luZXNzJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTYwODcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Subtle floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.5,
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Enhanced Section Header */}
            <div className="text-center mb-16">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent tracking-tight mb-4">
                  {strategy.subtitle}
                </h2>
                <div className="flex justify-center">
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full" />
                </div>
              </motion.div>
              
              <motion.p
                className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {strategy.title}
              </motion.p>
            </div>

            {/* NEO 2024 Showcase */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <div className="relative mb-12">
                <motion.h3
                  className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
                  animate={{ 
                    filter: [
                      "drop-shadow(0 0 20px rgba(148, 163, 184, 0.3))",
                      "drop-shadow(0 0 30px rgba(148, 163, 184, 0.5))",
                      "drop-shadow(0 0 20px rgba(148, 163, 184, 0.3))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {strategy.neoTitle}
                </motion.h3>
              </div>

              {/* Premium Goals Display */}
              <div className="relative">
                <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-600/40 shadow-2xl">
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-slate-100 mb-12 leading-relaxed font-light whitespace-pre-line">
                      {strategy.mainGoal}
                    </p>
                    
                    {/* Enhanced Financial Goals */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                      <motion.div 
                        className="text-center relative group"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.4, type: "spring" }}
                      >
                        <div className="relative p-8 rounded-2xl bg-slate-700/50 border border-slate-500/30 shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                          <div className="relative z-10">
                            <div className="text-lg md:text-xl text-slate-200 mb-6 font-medium">
                              {lang === "KOR" ? "목표 매출액" : "Target Revenue"}
                            </div>
                            <AnimatedCounter end={600} suffix={lang === "KOR" ? "억원" : "B KRW"} />
                            <div className="mt-6 flex justify-center">
                              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="text-center relative group"
                        whileHover={{ scale: 1.05, rotateY: -5 }}
                        transition={{ duration: 0.4, type: "spring" }}
                      >
                        <div className="relative p-8 rounded-2xl bg-slate-700/50 border border-slate-500/30 shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                          <div className="relative z-10">
                            <div className="text-lg md:text-xl text-slate-200 mb-6 font-medium">
                              {lang === "KOR" ? "목표 순이익" : "Target Net Profit"}
                            </div>
                            <AnimatedCounter end={150} suffix={lang === "KOR" ? "억원" : "B KRW"} />
                            <div className="mt-6 flex justify-center">
                              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Roadmap */}
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-2xl md:text-4xl font-bold text-center text-white mb-16">
                {lang === "KOR" ? "전략 로드맵" : "Strategic Roadmap"}
              </h4>
              
              <div className="relative max-w-5xl mx-auto">
                {/* Simplified Timeline */}
                <div className="hidden md:block absolute top-24 left-0 right-0">
                  <div className="w-full h-1 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 rounded-full opacity-60" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                  {strategy.strategicPoints.map((point: string, i: number) => (
                    <motion.div
                      key={i}
                      className="relative group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, rotateY: 5 }}
                      style={{ perspective: "1200px" }}
                    >
                      {/* Simplified Timeline Node */}
                      <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
                        <motion.div 
                          className="relative w-8 h-8 rounded-full shadow-xl bg-slate-700 border-2 border-slate-400"
                          whileHover={{ scale: 1.3 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {/* Clean Timeline Card */}
                      <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/40 shadow-xl md:mt-12 group-hover:shadow-2xl transition-all duration-500">
                        <div className="text-center relative z-10">
                          <motion.div 
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-6"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {["2024", "2026", "2028"][i] ?? ""}
                          </motion.div>
                          <p className="text-base text-slate-200 leading-relaxed whitespace-pre-line">
                            {point}
                          </p>
                        </div>

                        {/* Subtle Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Core Value Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-slate-900">
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
                <motion.div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-slate-600 to-slate-800 text-white shadow-xl hover:scale-105 transition-transform duration-300" 
                  variants={itemVariants}
                >
                  <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
                  <div className="relative z-10">
                    <h4 className="text-lg md:text-xl font-semibold mb-3">{cv.title}</h4>
                    <p className="text-sm whitespace-pre-line opacity-90 leading-relaxed">{cv.desc}</p>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Business Model Section with Background Image */}
        <section 
          className="py-16 px-4 md:px-8 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1617462279864-b6bc31bb5f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NjA4NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{strategy.bizModelTitle}</h3>
              <p className="text-lg text-slate-300 whitespace-pre-line leading-relaxed max-w-4xl mx-auto">
                {strategy.bizModelSubtitle}
              </p>
            </div>

            {/* Enhanced Business Model Container */}
            <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-600/40 shadow-2xl mb-16">
              <TechBusinessModel strategy={strategy} />
            </div>

            {/* Enhanced Business Sectors */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {strategy.businessAreas.sectors.map((s: string, i: number) => (
                <motion.div 
                  key={i} 
                  className="group relative overflow-hidden bg-slate-700/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-600/40 shadow-xl text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{ perspective: "1000px" }}
                >
                  <p className="text-sm md:text-base text-white font-medium whitespace-pre-line leading-relaxed relative z-10">
                    {s}
                  </p>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced R&D Section */}
        <motion.section
          className="bg-slate-900 text-white py-16 px-4 md:px-8 rounded-t-3xl overflow-hidden relative"
          variants={rndSectionRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-left tracking-wide">
              {rnd.title}
            </h2>
            <p className="text-2xl md:text-4xl font-bold mb-12 text-left whitespace-pre-line tracking-wide">
              {rnd.subtitle}
            </p>
            <div className="rnd-content flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex flex-col items-end">
                <motion.div
                  className="bg-white/30 rounded-2xl p-6 mb-4 w-full max-w-80 backdrop-blur-sm border border-white/20"
                  variants={rndBoxLeftInVariants}
                >
                  <p className="text-xl md:text-2xl text-white font-semibold mb-2 flex items-center justify-center">
                    {rnd.leftBox1Title}
                  </p>
                  <p className="text-sm text-white flex items-center justify-center text-center">
                    {rnd.leftBox1Desc}
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white/30 rounded-2xl p-6 mb-4 w-full max-w-80 backdrop-blur-sm border border-white/20"
                  variants={rndBoxLeftInVariants}
                >
                  <p className="text-xl md:text-2xl text-white font-semibold mb-2 flex items-center justify-center">
                    {rnd.leftBox2Title}
                  </p>
                  <p className="text-sm text-white flex items-center justify-center text-center">
                    {rnd.leftBox2Desc}
                  </p>
                </motion.div>
              </div>
              <motion.div
                className="hidden md:flex flex-col justify-center items-center h-full"
                variants={processLineVariants}
              >
                <div className="w-48 h-1 bg-gradient-to-r from-transparent via-white to-white rounded-full opacity-60"></div>
              </motion.div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <motion.div
                  className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl overflow-hidden shadow-xl"
                  variants={rndBoxRightInVariants}
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 via-[70%] to-transparent p-6">
                    <p className="text-gray-300 text-sm mb-1">{rnd.rightBoxTop}</p>
                    <p className="text-xl md:text-2xl font-semibold mb-2">{rnd.rightBoxTitle}</p>
                    <p className="text-base md:text-lg text-gray-300">{rnd.rightBoxDesc}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}