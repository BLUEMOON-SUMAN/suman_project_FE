import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { useLangStore } from "@/stores/langStore";
import Image from "next/image";
import Head from "next/head";


// --- Icon Mapping ---
const iconMap = {
  dormitory: 'Home',
  commuterBus: 'BusFront',
  carpool: 'Car',
  lounge: 'Coffee',
  resort: 'Tent',
  club: 'Users',
  health: 'HeartPulse',
  insurance: 'ShieldPlus',
  award: 'Award',
  anniversary: 'Gift',
  congratulations: 'HeartHandshake',
  alumni: 'Handshake',
} as const;

// Define a type for the icon keys to use in other types
type IconKey = keyof typeof iconMap;

// --- Wellness Data ---
interface WellnessItem {
  title: string;
  description: string;
  iconKey: IconKey;
}

interface WellnessSection {
  key: string;
  title: string;
  subtitle: string;
  heroImage: string;
  items: WellnessItem[];
}

interface WellnessData {
  hero: {
    title: string;
    subtitle: string;
    path: string;
    heroImage: string;
  };
  sections: WellnessSection[];
}

const wellnessData: Record<string, WellnessData> = {
  KOR: {
    hero: {
      title: "복리후생",
      subtitle: "일과 생활의 균형, 즐거운 일터를 만들기 위하여 다양한 복지제도를 시행 중입니다",
      path: "회사소개 > 복리후생",
      heroImage: "https://placehold.co/1920x400/1e40af/ffffff?text=Wellness+and+Benefits",
    },
    sections: [
      {
        key: "office-life",
        title: "Office Life",
        subtitle: "회사생활",
        heroImage: "https://placehold.co/1920x400/155e75/ffffff?text=Office+Life",
        items: [
          { title: "기숙사 운영", description: "원거리 거주지 지원", iconKey: "dormitory" },
          { title: "통근버스 운영", description: "오산, 동탄", iconKey: "commuterBus" },
          { title: "카풀제도", description: "카풀 이용직원 지원금 지급", iconKey: "carpool" },
          { title: "휴게실 운영", description: "안마기, 휴게실, 샤워실", iconKey: "lounge" },
        ],
      },
      {
        key: "leisure-culture-health",
        title: "Leisure / Culture / Health",
        subtitle: "여가 / 문화 / 건강",
        heroImage: "https://placehold.co/1920x400/065f46/ffffff?text=Leisure+Culture+Health",
        items: [
          { title: "휴양시설 운영", description: "제주도, 강원도 등", iconKey: "resort" },
          { title: "동호회 지원", description: "활동비 지원", iconKey: "club" },
          { title: "건강검진", description: "연1회 검진 가입", iconKey: "health" },
          { title: "단체보험", description: "단체 상해보험 가입", iconKey: "insurance" },
        ],
      },
    ],
  },
  ENG: {
    hero: {
      title: "EMPLOYEE WELLNESS",
      subtitle: "To create a balance between work and life, we are implementing various welfare programs.",
      path: "About Us > Employee Wellness",
      heroImage: "https://placehold.co/1920x400/1e40af/ffffff?text=Wellness+and+Benefits",
    },
    sections: [
      {
        key: "office-life",
        title: "Office Life",
        subtitle: "Office Life",
        heroImage: "https://placehold.co/1920x400/155e75/ffffff?text=Office+Life",
        items: [
          { title: "Dormitory Operation", description: "Support for long-distance residents", iconKey: "dormitory" },
          { title: "Commuter Bus Operation", description: "Osan, Dongtan", iconKey: "commuterBus" },
          { title: "Carpooling System", description: "Subsidy for carpool employees", iconKey: "carpool" },
          { title: "Lounge Operation", description: "Massage chairs, lounges, showers", iconKey: "lounge" },
        ],
      },
      {
        key: "leisure-culture-health",
        title: "Leisure / Culture / Health",
        subtitle: "Leisure / Culture / Health",
        heroImage: "https://placehold.co/1920x400/065f46/ffffff?text=Leisure+Culture+Health",
        items: [
          { title: "Resort Facilities Operation", description: "Jeju Island, Gangwon-do, etc.", iconKey: "resort" },
          { title: "Club Support", description: "Support for activity expenses", iconKey: "club" },
          { title: "Health Checkups", description: "Annual health checkup subscription", iconKey: "health" },
          { title: "Group Insurance", description: "Group injury insurance subscription", iconKey: "insurance" },
        ],
      },
    ],
  },
};

// --- Wellness Card Component ---
const WellnessCard = ({ item }: { item: WellnessItem }) => {
  const iconName = iconMap[item.iconKey];
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
    >
      <div className="w-20 h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-blue-500">
        {IconComponent && <IconComponent className="w-12 h-12" />}
      </div>
      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.description}</p>
    </motion.div>
  );
};

// --- Main Wellness Page ---
const WellnessPage = () => {
  const { lang } = useLangStore();
  const currentData = wellnessData[lang] || wellnessData.KOR;

  return (
    <Layout>
      <HeroSection
        title={currentData.hero.title}
        subtitle={currentData.hero.subtitle}
        backgroundImage={currentData.hero.heroImage}
      />
      <BreadcrumbSection path={currentData.hero.path} />

      <div className="content-wrapper bg-gray-50 py-20 px-4 md:px-8">
        {currentData.sections.map((section) => (
          <div key={section.key} className="mb-20">
            {/* Section Hero */}
            <div className="relative h-64 overflow-hidden mb-12 rounded-lg shadow-lg">
              <Image
                src={section.heroImage}
                alt={section.title}
                fill
                className="w-full h-full object-cover object-center brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{section.title}</h2>
                <p className="text-lg font-light">{section.subtitle}</p>
              </div>
            </div>

            {/* Items Grid */}
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
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <WellnessCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WellnessPage;