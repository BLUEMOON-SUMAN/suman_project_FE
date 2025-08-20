import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { serviceContent } from "@/data/service";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";
interface sectionList {
  title: string;
  subtitle: string;
}

export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);
  const { lang } = useLangStore();
  const { equipmentList, measurementEquipmentList } =
    serviceContent[lang];
  const allEquipment = [...equipmentList, ...measurementEquipmentList];
  const section = serviceContent[lang].sectionList?.[0];

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
        <title>기술소개 | 수만</title>
      </Head>
      <Layout>
        <HeroSection
          title="기술 소개"
          subtitle="SUMAN"
          backgroundImage="/images/business_hero.png"
        />

        <BreadcrumbSection path="사업분야 > 기술소개" />

        <div className="bg-white py-20 px-4 md:px-8 flex justify-center items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              className="text-4xl font-bold mb-4 text-gray-800 text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={leftAlignTextVariants}
            >
              Main Equipment
            </motion.h2>
            <motion.p
              className="text-xl text-left text-gray-600"
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

        <div className="bg-gray-800 pt-20 pb-[250px] relative z-0 px-4 md:px-8 flex justify-center items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className={`transition-all duration-500 ease-in-out ${
                showAllEquipment
                  ? "max-h-[5000px] overflow-visible"
                  : "max-h-[400px] overflow-hidden"
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-8">
                {section?.production}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {equipmentList.map((equipment, index) => (
                  <motion.div
                    key={`prod-${index}`}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-4"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {equipment.image && (
                      <div className="w-full h-24 relative mb-2">
                        <Image
                          src={equipment.image}
                          alt={equipment.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded"
                        />
                      </div>
                    )}
                    <p className="text-md font-medium text-white text-center">
                      {equipment.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-12 mb-8">
                {section?.measurement}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {" "}
                {measurementEquipmentList.map((equipment, index) => (
                  <motion.div
                    key={`meas-${index}`}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-4"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {equipment.image && (
                      <div className="w-full h-24 relative mb-2">
                        {" "}
                        <Image
                          src={equipment.image}
                          alt={equipment.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded"
                        />
                      </div>
                    )}
                    <p className="text-md font-medium text-white text-center">
                      {equipment.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {allEquipment.length > initialDisplayCount && (
              <div className="mt-8 text-right">
                <button
                  onClick={() => setShowAllEquipment(!showAllEquipment)}
                  className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                >
                  {showAllEquipment ? "간략히 보기" : "전체 설비 보기"} →
                </button>
              </div>
            )}
          </div>
        </div>

        <motion.div
          className="bg-white py-20 px-4 md:px-8 text-black rounded-t-xl mt-[-200px] relative z-10 pb-[250px] flex justify-center items-center"
          initial={{ y: 300, opacity: 1 }}
          whileInView={{ y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-7xl mx-auto w-full">
            {" "}
            <h2 className="text-4xl font-bold mb-4">Process</h2>
            <p className="text-lg mb-8 leading-relaxed">
              {section?.process}
              <br />
              {section?.processsub}
            </p>
            <div className="mt-16 flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_design.png"
                      alt="컨셉 및 개발 / 가공설계"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">
                    컨셉 및 개발 / 가공설계
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_order.png"
                      alt="발주 (소재/부품)"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">
                    발주
                    <br />
                    (소재/부품)
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_product.png"
                      alt="가공/제작"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">가공/제작</p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_test.png"
                      alt="최종검사"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">최종검사</p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_deliver.png"
                      alt="납품 및 피드백"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">납품 및 피드백</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-800 py-20 px-4 md:px-8 text-white rounded-t-xl mt-[-200px] relative z-20 overflow-hidden flex justify-center items-center" // overflow-hidden 추가
          initial={{ y: 200, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="absolute inset-0"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/service_product_bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-90"></div>{" "}
          </div>
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            {" "}
            <h2 className="text-4xl font-bold mb-4">Products</h2>
            <p className="text-lg mb-12 leading-relaxed">
              {section?.production2}
              <br />
              {section?.production2sub}
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
            </motion.div>
          </div>{" "}
        </motion.div>
      </Layout>
    </>
  );
}
