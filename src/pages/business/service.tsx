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
  const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } as Transition },
};
    const content = {
    KOR: {
      image: "/images/business/process/gambarKorean.png",
      alt: "조직도",
      pageTitle: "조직도 | 수만"
    },
    ENG: {
      image: "/images/business/process/gambarEng.png",
      alt: "Organization Chart",
      pageTitle: "Organization | SUMAN"
    }
  };

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
  const currentContent = content[lang];
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
        {/* 3. Process Section */}
        <div className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            className="w-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-auto overflow-hidden rounded-lg px-[7.5%] md:px-[15%] lg:px-[20%]">
              <Image
                src={currentContent.image}
                alt={currentContent.alt}
                width={1200}
                height={800}
                layout="responsive"
                objectFit="contain"
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
        </div>
        {/* Process Section - Simplified Flowchart */}
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

            {/* Simplified Manufacturing Process Flowchart */}
            <div className="relative mt-12 md:mt-20">
              {/* Vertical Process Flow */}
              <div className="flex flex-col items-center space-y-8">
                
                {/* Customer */}
                <div className="bg-[#000B24] text-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <Users className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-base md:text-lg font-semibold">Customer</span>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Concept Design */}
                <div className="bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">Concept 설계</div>
                      <div className="text-xs md:text-sm text-gray-600">Initial Design</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Development Design */}
                <div className="bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">개발/가공 설계</div>
                      <div className="text-xs md:text-sm text-gray-600">Development Design</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Material Ordering */}
                <div className="bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Package className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">발주(소재/부품)</div>
                      <div className="text-xs md:text-sm text-gray-600">Material Ordering</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Manufacturing */}
                <div className="bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">가공/제작</div>
                      <div className="text-xs md:text-sm text-gray-600">Manufacturing</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Final Inspection */}
                <div className="bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Package className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">출하 및 조립/측정 검사</div>
                      <div className="text-xs md:text-sm text-gray-600">Final Inspection</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Packaging */}
                <div className="bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Package className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">포장</div>
                      <div className="text-xs md:text-sm text-gray-600">Packaging</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Customer Delivery */}
                <div className="bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-[#000B24]/10 w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-[#000B24]/10 rounded-full p-2 md:p-3">
                      <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#000B24]" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-[#000B24]">고객사 납품</div>
                      <div className="text-xs md:text-sm text-gray-600">Customer Delivery</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>

                {/* Feedback Loop */}
                <div className="bg-[#000B24] text-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg w-full max-w-md text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <RotateCcw className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold">Re-Order 개선/반영</div>
                      <div className="text-xs md:text-sm opacity-90">Continuous Improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 w-full" />
      </Layout>
    </>
  );
}