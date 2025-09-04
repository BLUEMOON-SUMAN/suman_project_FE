"use client";

// src/pages/careers/wellnessMain.tsx

import { motion } from "framer-motion";
import React from "react";
import * as LucideIcons from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { useLangStore } from "@/stores/langStore";
import Image from "next/image";
import Head from "next/head";
import { wellnessContent, iconMap, WellnessItem, WellnessData } from "@/data/wellnessData";

// --- Wellness Card Component (keep style & effect) ---
const WellnessCard = ({ item }: { item: WellnessItem }) => {
  const iconName = iconMap[item.iconKey];
  const IconComponent =
    LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  if (!IconComponent) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
      >
        <div className="w-20 h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
          <LucideIcons.Image className="w-12 h-12" />
        </div>
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-xs text-red-500 mt-2">Error: Icon not found</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
    >
      <div className="w-20 h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-blue-500">
        <IconComponent className="w-12 h-12" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.description}</p>
    </motion.div>
  );
};

// --- Main Wellness Page ---
export default function WellnessPage() {
  const { lang } = useLangStore();
  const currentData: WellnessData = wellnessContent[lang] || wellnessContent.KOR;

  return (
    <>
      <Head>
        <title>{lang === "KOR" ? "복리후생 | 수만" : "Employee Wellness | SUMAN"}</title>
        <meta
          name="description"
          content={
            lang === "KOR"
              ? "수만의 복리후생 프로그램을 확인해보세요"
              : "Explore SUMAN's employee wellness & benefits"
          }
        />
      </Head>

      <Layout>
        {/* Match rnd.tsx: main wrapper with offset, big hero, then breadcrumb */}
        <main className="min-h-screen bg-white text-slate-900" style={{ paddingTop: "90px" }}>
          <HeroSection
            title={lang === "KOR" ? "복리후생" : "Employee Wellness"}
            subtitle={lang === "KOR" ? "인재채용" : "Careers"}
            backgroundImage="/images/sub_banner/careers_hero.png"
          />

          <BreadcrumbSection
            path={lang === "KOR" ? "인재 채용 > 복리후생" : "Careers > Employee Wellness"}
          />

          {/* === PAGE CONTENT (unchanged styles & effects) === */}
          <motion.div
            className="relative z-10 bg-[#000B24] pt-20 pb-20 px-4 md:px-8 rounded-none mt-0 overflow-hidden"
          >
            {/* (Optional bg layer like product/rnd) */}
            <div
              className="absolute inset-0 pointer-events-none flex bg-no-repeat bg-top bg-contain"
              // style={{ backgroundImage: "url('/images/business/layer2.png')" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
              {currentData.sections.map((section, sectionIndex) => (
                <div key={section.key} className="mb-20">
                  {/* Section hero (kept) */}
                  <div className="relative h-64 overflow-hidden mb-12 rounded-lg shadow-lg">
                    <Image
                      src={section.heroImage}
                      alt={section.title}
                      fill
                      className="w-full h-full object-cover object-center brightness-75"
                      priority={sectionIndex === 0}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{section.title}</h2>
                      {/* <p className="text-lg font-light">{section.subtitle}</p> */}
                    </div>
                  </div>

                  {/* Grids & animations (kept) */}
                  {sectionIndex === 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {section.items.map((item: WellnessItem, idx) => (
                        <div key={idx}>
                          <WellnessCard item={item} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {section.items.map((item: WellnessItem, idx) => (
                        <motion.div
                          key={idx}
                          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                          <WellnessCard item={item} />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </main>
      </Layout>
    </>
  );
}
