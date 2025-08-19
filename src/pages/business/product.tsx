import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// import { serviceContent } from "@/data/product"; // This line is likely the source of the issue.
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

// --- Mock Data Structure (REPLACE THIS WITH YOUR ACTUAL DATA) ---
const serviceContent = {
  KOR: {
    productCategories: [
      {
        label: "Secondary Battery",
        name: "이차전지",
        subtitle: "전기자동차 배터리 팩용 부품 및 제어시스템",
        image: "https://placehold.co/400x300/1e40af/ffffff?text=Battery",
      },
      {
        label: "Electrical & Electronics",
        name: "전기전자 부품",
        subtitle: "전자기기용 핵심 부품 개발",
        image: "https://placehold.co/400x300/155e75/ffffff?text=Electronics",
      },
      {
        label: "Semiconductor",
        name: "반도체",
        subtitle: "차세대 반도체 공정 장비용 부품",
        image: "https://placehold.co/400x300/065f46/ffffff?text=Semiconductor",
      },
      {
        label: "Mobility",
        name: "모빌리티",
        subtitle: "첨단 모빌리티 시스템용 부품",
        image: "https://placehold.co/400x300/9b2c2c/ffffff?text=Mobility",
      },
    ],
    sectionList: [
      {
        production2: "정밀 부품, 모듈, 자동화 장비까지",
        production2sub: "미래 산업에 필요한 핵심 솔루션을 제조합니다",
      },
    ],
    footerText: "기술과 미래를 연결하는 선두기업, 수만",
  },
  ENG: {
    productCategories: [
      {
        label: "Secondary Battery",
        name: "Secondary Battery",
        subtitle: "Components and control systems for electric vehicle battery packs",
        image: "https://placehold.co/400x300/1e40af/ffffff?text=Battery",
      },
      {
        label: "Electrical & Electronics",
        name: "Electrical & Electronics",
        subtitle: "Development of core components for electronic devices",
        image: "https://placehold.co/400x300/155e75/ffffff?text=Electronics",
      },
      {
        label: "Semiconductor",
        name: "Semiconductor",
        subtitle: "Components for next-generation semiconductor process equipment",
        image: "https://placehold.co/400x300/065f46/ffffff?text=Semiconductor",
      },
      {
        label: "Mobility",
        name: "Mobility",
        subtitle: "Components for advanced mobility systems",
        image: "https://placehold.co/400x300/9b2c2c/ffffff?text=Mobility",
      },
    ],
    sectionList: [
      {
        production2: "From precision parts and modules to automated equipment",
        production2sub: "We manufacture core solutions required for future industries",
      },
    ],
    footerText: "A leading company connecting technology with the future, SUMAN",
  },
};
// --- End of Mock Data ---


export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);
  const { lang } = useLangStore();
  
  // Destructure serviceContent directly from your imported data
  const { productCategories, footerText, sectionList } = serviceContent[lang];
  const section = sectionList?.[0];

  const processImages = [
    "/images/business/process/service_design.png",
    "/images/business/process/service_order.png",
    "/images/business/process/service_product.png",
    "/images/business/process/service_test.png",
    "/images/business/process/service_deliver.png",
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } as Transition,
    },
  };

  const leftAlignTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const initialDisplayCount = 10;

  return (
    <>
      <Head>
        <title>{lang === "KOR" ? "제품 기술 소개 | 수만" : "Production Technology | SUMAN"}</title>
      </Head>
      <Layout>
        <HeroSection
          title={lang === "KOR" ? "제품 기술 소개" : "Production Technology"}
          subtitle="SUMAN"
          backgroundImage="/images/sub_banner/business_hero.png"
        />

        <BreadcrumbSection
          path={lang === "KOR" ? "사업분야 > 제품소개" : "Business > Production Technology"}
        />
        
        {/* 4. Products Section */}
        {section && ( // This check ensures the section only renders if data is available
          <motion.div
            className="relative z-20 bg-[#000B24] pt-20 pb-35 px-4 md:px-8 rounded-t-[60px] mt-[-100px] overflow-hidden"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 pointer-events-none flex bg-no-repeat bg-top bg-contain" style={{ backgroundImage: "url('/images/business/layer2.png')" }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
              <h2 className="text-white text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mb-10">
                Products
              </h2>
              <p className="text-white text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3] mb-12">
                {section.production2}
                <br />
                {section.production2sub}
              </p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {productCategories.map((product, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#7E7E7E]/25 rounded-[30px] overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group mt-15 hover:bg-white"
                    variants={itemVariants}
                  >
                    <div className="relative w-full h-44 mx-auto mt-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-4">
                      {product.label && (
                        <span className="tracking-wide font-light text-[#CACACA] text-base transition-colors duration-300 group-hover:text-gray-700">
                          {product.label}
                        </span>
                      )}
                      <h3 className="tracking-wide text-2xl font-semibold text-white mb-1 mt-5 transition-colors duration-300 group-hover:text-black">
                          {product.name}
                      </h3>
                      <p className="tracking-wide font-light text-[#CACACA] text-sm mb-7 transition-colors duration-300 group-hover:text-gray-700">
                        {product.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-[#B2B2B2] font-light text-sm md:text-base mt-7 text-right tracking-wide"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
              >
                {footerText}
              </motion.p>
            </div>
          </motion.div>
        )}
      </Layout>
    </>
  );
}