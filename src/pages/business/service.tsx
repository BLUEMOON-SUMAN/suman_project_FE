import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { serviceContent } from "@/data/service";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";
// Import the required icons from Lucide React
import { 
  Users, 
  FileText, 
  XCircle, 
  Settings, 
  Package, 
  ArrowLeft, 
  Truck, 
  RotateCcw 
} from "lucide-react";

export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);
  const { lang } = useLangStore();
  const { equipmentList, measurementEquipmentList} =
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
        <title>{lang === "KOR" ? "기술소개 | 수만" : "Technology | SUMAN"}</title>
      </Head>
      <Layout>
        <HeroSection
          title={lang === "KOR" ? "기술 소개" : "Technology"}
          subtitle="SUMAN"
          backgroundImage="/images/sub_banner/business_hero.png"
        />

        <BreadcrumbSection
          path={lang === "KOR" ? "사업분야 > 기술소개" : "Business > Technology"}
        />

        {/* 1. Main Equipment Section */}
        <div className="bg-white py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mb-6 md:mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={leftAlignTextVariants}
            >
              Main Equipment
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={leftAlignTextVariants}
            >
              {section?.maintitle}
              <br />
              {section?.mainsubtitle}
            </motion.p>
          </div>
        </div>

        {/* 2. 생산가공 / 측정장비 Section */}
        <div className="relative z-0 bg-[#000B24] pt-12 md:pt-20 pb-40 md:pb-60 px-4">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/business/layer.png"
              alt="배경 이미지"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              className={`relative transition-all duration-500 ease-in-out ${
                showAllEquipment
                  ? "max-h-[5000px] overflow-visible"
                  : "max-h-[530px] overflow-hidden"
              }`}
            >
              {/* 생산가공 / 조립 */}
              <motion.button
                className="text-base sm:text-lg bg-[#505050]/40 text-white rounded-full px-6 py-1 mb-10 md:mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={leftAlignTextVariants}
              >
                {section?.production}
              </motion.button>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {equipmentList.map((equipment, index) => (
                  <motion.div
                    key={`prod-${index}`}
                    className="relative bg-white/10 rounded-lg whitespace-pre-line overflow-hidden shadow-lg w-full h-40 md:h-50 p-2 border-2 border-gray-400/10"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="w-full h-20 md:h-28 relative mb-2">
                      {equipment.image && (
                        <Image
                          src={equipment.image}
                          alt={equipment.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-[10px]"
                        />
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#434343]/30 text-center py-1 md:py-2 flex items-center justify-center border border-gray-500/10">
                      <p className="text-xs md:text-base font-medium text-white text-center">
                        {equipment.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 신뢰성 (측정 / 분석) */}
              <button className="text-base sm:text-lg bg-[#505050]/40 text-white rounded-full px-6 py-1 mb-10 md:mb-16 mt-16 md:mt-28">
                {section?.measurement}
              </button>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {measurementEquipmentList.map((equipment, index) => (
                  <motion.div
                    key={`meas-${index}`}
                    className="relative bg-white/10 rounded-lg whitespace-pre-line overflow-hidden shadow-lg w-full h-40 md:h-50 p-2 border-2 border-gray-400/10"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="w-full h-20 md:h-28 relative mb-2">
                      {equipment.image && (
                        <Image
                          src={equipment.image}
                          alt={equipment.name}
                          fill
                          className="object-cover rounded-[10px]"
                        />
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#434343]/30 text-center py-1 md:py-2 flex items-center justify-center border border-gray-500/10">
                      <p className="text-xs md:text-base font-medium text-white text-center">
                        {equipment.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {equipmentList.length + measurementEquipmentList.length > initialDisplayCount && (
              <div className="mt-8 md:mt-10 mb-8 md:mb-10 text-right">
                <button
                  onClick={() => setShowAllEquipment(!showAllEquipment)}
                  className="text-base md:text-lg text-gray-200 hover:text-white font-md cursor-pointer"
                >
                  {showAllEquipment ? "간략히 보기" : "전체 설비 보기"} →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Process Section - Detailed Flowchart */}
        <div className="bg-white py-12 md:py-20 px-4 md:px-8 text-black rounded-t-[40px] md:rounded-[60px] mt-[-180px] md:mt-[-220px] relative z-10 pb-[60px] md:pb-[100px]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mt-6 md:mt-10 mb-6 md:mb-10">
              Process
            </h2>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3] mb-10 md:mb-16">
              체계적인 생산 프로세스
              <br />
              품질 보증 시스템
            </p>

            {/* Detailed Manufacturing Process Flowchart */}
            <div className="relative mt-12 md:mt-20">
              {/* Customer */}
              <div className="flex justify-center mb-8 md:mb-12">
                <div className="bg-[#000B24] text-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <Users className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-base md:text-lg font-semibold">Customer</span>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-[#000B24] rounded-full"></div>
              </div>

              {/* Concept Design Row */}
              <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-8 flex-wrap lg:flex-nowrap">
                <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">Concept 설계</div>
                      <div className="text-xs md:text-sm text-gray-600">Initial Design</div>
                    </div>
                  </div>
                </div>
                
                {/* D/R Decision */}
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                    <span className="transform -rotate-45 text-white font-semibold text-xs">D/R</span>
                  </div>
                  {/* NG Arrow */}
                  <div className="absolute -right-16 md:-right-20 lg:-right-24 top-5 md:top-7 flex items-center gap-2 bg-red-50 px-2 md:px-3 py-1 rounded-full">
                    <XCircle className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                    <span className="text-red-600 font-medium text-xs md:text-sm">NG</span>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-[#000B24] rounded-full"></div>
              </div>

              {/* Development Design Row */}
              <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-8 flex-wrap lg:flex-nowrap">
                <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">개발/가공 설계</div>
                      <div className="text-xs md:text-sm text-gray-600">Development Design</div>
                    </div>
                  </div>
                </div>
                
                {/* Review Approval Decision */}
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                    <span className="transform -rotate-45 text-white font-semibold text-[10px] md:text-xs text-center leading-tight">검토<br/>승인</span>
                  </div>
                  {/* NG Arrow */}
                  <div className="absolute -right-16 md:-right-20 lg:-right-24 top-7 md:top-9 flex items-center gap-2 bg-red-50 px-2 md:px-3 py-1 rounded-full">
                    <XCircle className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                    <span className="text-red-600 font-medium text-xs md:text-sm">NG</span>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-[#000B24] rounded-full"></div>
              </div>

              {/* Ordering Row */}
              <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-8 flex-wrap lg:flex-nowrap">
                {/* Partner Company */}
                <div className="relative bg-[#000B24] text-white rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-full p-1 md:p-2">
                      <Package className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="text-sm md:font-semibold">협력사</span>
                  </div>
                  <div className="absolute -bottom-6 md:-bottom-8 left-4 md:left-6 flex items-center gap-2 bg-red-50 px-2 md:px-3 py-1 rounded-full">
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                    <span className="text-red-600 font-medium text-xs md:text-sm">NG</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Package className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">발주(소재/부품)</div>
                      <div className="text-xs md:text-sm text-gray-600">Material Ordering</div>
                    </div>
                  </div>
                </div>
                
                {/* Incoming Inspection Decision */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                  <span className="transform -rotate-45 text-white font-semibold text-[10px] md:text-xs text-center leading-tight">수입<br/>검사</span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-[#000B24] rounded-full"></div>
              </div>

              {/* Manufacturing Row */}
              <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-8 flex-wrap lg:flex-nowrap">
                <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">가공/제작</div>
                      <div className="text-xs md:text-sm text-gray-600">Manufacturing</div>
                    </div>
                  </div>
                </div>
                
                {/* NG Arrow */}
                <div className="flex items-center gap-2 bg-red-50 px-3 md:px-4 py-1 md:py-2 rounded-full shadow-sm">
                  <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                  <span className="text-red-600 font-medium text-sm md:text-base">NG</span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-[#000B24] rounded-full"></div>
              </div>

              {/* Final Inspection Row */}
              <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-8 flex-wrap lg:flex-nowrap">
                <div className="relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                    <span className="transform -rotate-45 text-white font-semibold text-[10px] md:text-xs text-center leading-tight">출하 및<br/>조립/측정<br/>검사</span>
                  </div>
                  {/* NG Arrow */}
                  <div className="absolute -right-16 md:-right-20 lg:-right-24 top-8 md:top-11 flex items-center gap-2 bg-red-50 px-2 md:px-3 py-1 rounded-full">
                    <XCircle className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                    <span className="text-red-600 font-medium text-xs md:text-sm">NG</span>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-[#000B24] rounded-full"></div>
              </div>

              {/* Packaging */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Package className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">포장</div>
                      <div className="text-xs md:text-sm text-gray-600">Packaging</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-[#000B24] rounded-full"></div>
              </div>

              {/* Customer Delivery */}
              <div className="flex justify-center mb-8 md:mb-12">
                <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">고객사 납품</div>
                      <div className="text-xs md:text-sm text-gray-600">Customer Delivery</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Loop */}
              <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 relative flex-wrap lg:flex-nowrap">
                <div className="bg-[#000B24] text-white rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <RotateCcw className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold">Re-Order 개선/반영</div>
                      <div className="text-xs md:text-sm opacity-90">Continuous Improvement</div>
                    </div>
                  </div>
                </div>
                
                {/* Customer Feedback Decision */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                  <span className="transform -rotate-45 text-white font-semibold text-[10px] md:text-xs text-center leading-tight">고객<br/>Feedback</span>
                </div>

                {/* Feedback Loop Arrow - Hidden on mobile */}
                <div className="absolute -left-20 md:-left-32 top-8 md:top-12 hidden lg:block">
                  <svg width="150" height="300" className="absolute" viewBox="0 0 200 400">
                    <defs>
                      <linearGradient id="feedbackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#000B24" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#000B24" stopOpacity="0.6"/>
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 20 50 Q 20 200 60 350" 
                      stroke="url(#feedbackGradient)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeDasharray="8,4"
                      className="animate-pulse"
                    />
                    <polygon 
                      points="55,340 65,340 60,350" 
                      fill="#000B24"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2">SUMAM Co., Ltd.</h3>
                <p className="text-sm text-gray-300">
                  Address: 105, Mungyeongtao-ro TYboro-gil, Daedeok-gu, Daejeon, Republic of Korea
                </p>
                <p className="text-sm text-gray-300">Biz Reg No.: 318-81-00161</p>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-300">
                  Tel: <a href="tel:+82-42-934-1517" className="hover:text-blue-300 transition-colors">+82-42-934-1517</a>
                </p>
                <p className="text-sm text-gray-300">
                  Fax: +82-42-934-1516
                </p>
                <p className="text-sm text-gray-300">
                  Email: <a href="mailto:sumam20140419@sumam.co.kr" className="hover:text-blue-300 transition-colors">sumam20140419@sumam.co.kr</a>
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Email Collection Refusal
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-6 pt-6 text-center">
              <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} SUMAM Co., Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  );
}