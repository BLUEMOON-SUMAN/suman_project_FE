import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { serviceContent } from "@/data/product";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);
  const { lang } = useLangStore();
  const { productCategories, footerText } =
    serviceContent[lang];
  const section = serviceContent[lang].sectionList?.[0];

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
        <title>{lang === "KOR" ? "제품 소개 " : "Product "}</title>
      </Head>
      <Layout>
        <HeroSection
          title={lang === "KOR" ? "제품 소개" : "Product"}
          backgroundImage="/images/sub_banner/business_hero.png"
        />

        <BreadcrumbSection
          path={lang === "KOR" ? "사업분야 > 제품소개" : "Business > Product"}
        />

        {/* 4. Products Section */}
        {section && (
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
        
        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4">SUMAM Co., Ltd.</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Address: 105, Mungyeongtao-ro TYboro-gil, Daedeok-gu, Daejeon, Republic of Korea
                </p>
                <p className="text-sm text-gray-300 mb-2">Biz Reg No.: 318-81-00161</p>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mb-4">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">
                      <span className="font-medium">Tel:</span> +82-42-934-1517
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-medium">Fax:</span> +82-42-934-1516
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">
                      <span className="font-medium">Email:</span> sumam20140419@sumam.co.kr
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} SUMAM Co., Ltd. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Email Collection Refusal
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  );
}