import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useLangStore } from "@/stores/langStore";
import {
  visionHeroText,
  visionMainText,
  visionMilestones,
  visionCoreValue,
  visionRndText,
} from "@/data/vision";

export default function VisionPage() {
  const { lang } = useLangStore();
  const hero = visionHeroText[lang];
  const main = visionMainText[lang];
  const milestones = visionMilestones[lang];
  const coreValues = visionCoreValue[lang];
  const rnd = visionRndText[lang];

  const fadeInRiseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" } as Transition,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemRiseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
    },
  };

  const rndSectionRiseVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const rndBoxLeftInVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      x: 0,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const rndBoxRightInVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      x: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const processLineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } as Transition,
    },
  };

  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const ArrowSVG = ({
    x,
    y,
    className,
    arrowLength = 70,
  }: {
    x: number;
    y: number;
    className: string;
    arrowLength?: number;
  }) => (
    <svg
      x={x}
      y={y}
      width={arrowLength + 10}
      height="20"
      viewBox={`0 0 ${arrowLength + 10} 20`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="0"
        y1="10"
        x2={arrowLength}
        y2="10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polyline
        points={`${arrowLength - 5},5 ${arrowLength},10 ${arrowLength - 5},15`}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <Head>
        <title>{lang === "KOR" ? "비전 | 수만" : "Vision | SUMAN"}</title>
      </Head>
      <Layout>
        <HeroSection
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection
          path={lang === "KOR" ? "회사소개 > 기업 비전" : "Company > Vision"}
        />

        {/* Vision Section */}
        <motion.section
          className="vision-section bg-white py-20 px-4 md:px-8"
          variants={fadeInRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-16 text-left tracking-wide">
              Vision
            </h2>
            <div className="vision-neo-area mt-12 flex flex-col items-center">
              <div className="w-full text-left">
                <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 mb-2">
                  {main.topLabel}
                </p>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-blue-600 mb-2">
                  {main.blueTitle}
                </h3>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 mb-2">
                  {main.blackTitle}
                </h3>
              </div>
              <div className="w-full flex justify-center relative mt-12">
                <svg
                  width="628.2px"
                  height="540px"
                  viewBox="0 0 1047 900"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="vision-infographic-svg"
                >
                  {isClient &&
                    milestones.map((milestone, idx) => (
                      <g
                        key={milestone.year}
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSection(milestone.year)}
                        onMouseLeave={() => setHoveredSection(null)}
                      >
                        <image
                          href={`/images/company/vision/vision_arrow${3 - idx}.png`}
                          x={idx === 0 ? "-3.6" : idx === 1 ? "47.4" : "291.6"}
                          y={idx === 0 ? "101.4" : idx === 1 ? "299.4" : "0"}
                          width={idx === 0 ? "162" : idx === 1 ? "282" : "346.8"}
                          height={idx === 0 ? "252" : idx === 1 ? "249" : "496.2"}
                          className="transition-all duration-300 group-hover:opacity-70 group-hover:scale-[1.02] filter brightness-50"
                        />
                        <text
                          x={idx === 0 ? "66" : idx === 1 ? "186" : "450"}
                          y={idx === 0 ? "210" : idx === 1 ? "390" : "240"}
                          fill="white"
                          fontSize={idx === 2 ? "42" : idx === 1 ? "36" : "30"}
                          fontWeight="bold"
                          textAnchor="middle"
                          className="transition-all duration-300 group-hover:fill-gray-200"
                        >
                          {milestone.year}
                        </text>
                        <ArrowSVG
                          x={idx === 0 ? 30 : idx === 1 ? 141 : 396}
                          y={(idx === 0 ? 228 : idx === 1 ? 408 : 258) - 6}
                          className={`transition-opacity duration-300 ${
                            hoveredSection === milestone.year
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                          arrowLength={idx === 0 ? 78 : idx === 1 ? 96 : 114}
                        />
                        <foreignObject
                          x={idx === 0 ? "0" : idx === 1 ? "126" : "390"}
                          y={idx === 0 ? "228" : idx === 1 ? "402" : "252"}
                          width="138"
                          height="48"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === milestone.year
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <div className="text-sm text-center text-white whitespace-pre-line">
                            {milestone.text}
                          </div>
                        </foreignObject>
                      </g>
                    ))}
                </svg>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Value Section */}
        <section className="core-value-section bg-white py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-4 text-left tracking-wide">
              Core Value
            </h2>
            <br />
            <br />
            <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 mb-2 whitespace-pre-line">
              {lang === "KOR"
                ? "끊임없이 변화하는 시대\n우리는 유연함과 전문성으로 대응합니다"
                : "In a Constantly Changing Era\nWe Respond with Agility and Expertise"}
            </p>
            <br />
            <br />
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex flex-col justify-end p-4 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[380px]"
                  variants={itemRiseVariants}
                  style={{
                    backgroundImage: `url(/images/company/vision/vision_${
                      ["Flex", "pro", "tek", "rnbd"][idx]
                    }.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath:
                      "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-black opacity-40"
                    style={{
                      clipPath:
                        "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                    }}
                  ></div>
                  <div className="relative text-white flex flex-col flex-grow justify-start pt-60">
                    {" "}
                    <h3 className="text-[25px] font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[15px] whitespace-pre-line">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* R&D Section */}
        <motion.section
          className="rnd-section bg-[#010104] text-white py-20 px-4 md:px-8 rounded-t-3xl overflow-hidden relative"
          variants={rndSectionRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{
            backgroundImage: 'url("/images/company/vision/vision_R&D_bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center 245px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-white mb-18 text-left tracking-wide ">
              {rnd.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-12 text-left whitespace-pre-line tracking-wide">
              {rnd.subtitle}
            </p>
            <div className="rnd-content flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 flex flex-col items-end pr-0">
                <motion.div
                  className="bg-white/40 rounded-4xl p-3 mb-4 w-72 h-23 backdrop-blur-sm"
                  variants={rndBoxLeftInVariants}
                >
                  <p className="text-[25px] text-white font-semibold mb-2 flex items-center justify-center">
                    {rnd.leftBox1Title}
                  </p>
                  <p className="text-[15px] text-white flex items-center justify-center">
                    {rnd.leftBox1Desc}
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white/40 rounded-4xl p-3 mb-4 w-72 h-23 backdrop-blur-sm"
                  variants={rndBoxLeftInVariants}
                >
                  <p className="text-[25px] text-white font-semibold mb-2 flex items-center justify-center">
                    {rnd.leftBox2Title}
                  </p>
                  <p className="text-[15px] text-white flex items-center justify-center">
                    {rnd.leftBox2Desc}
                  </p>
                </motion.div>
              </div>
              <motion.div
                className="hidden md:flex flex-col justify-center items-center h-full"
                variants={processLineVariants}
              >
                <svg
                  width="188"
                  height="71"
                  viewBox="0 0 188 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id={`mask0_${lang}`}
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="188"
                    height="71"
                  >
                    <rect width="20" height="71" fill="black" />
                    <rect x="42" width="20" height="71" fill="black" />
                    <rect x="84" width="20" height="71" fill="black" />
                    <rect x="126" width="20" height="71" fill="black" />
                    <rect x="168" width="20" height="71" fill="black" />
                  </mask>
                  <g mask={`url(#mask0_${lang})`}>
                    <rect
                      x="-23"
                      width="226"
                      height="71"
                      fill={`url(#paint0_linear_${lang})`}
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id={`paint0_linear_${lang}`}
                      x1="-23"
                      y1="35.5"
                      x2="203"
                      y2="35.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              <div className="md:w-1/2 flex flex-col justify-center pl-0">
                <motion.div
                  className="relative w-full h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                  style={{ backgroundImage: 'url("/images/company/vision/vision_dev.png")' }}
                  variants={rndBoxRightInVariants}
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/100 via-[79%] to-transparent p-4">
                    <p className="text-gray-300 text-[15px] mb-1">
                      {rnd.rightBoxTop}
                    </p>
                    <p className="text-[25px] font-semibold">
                      {rnd.rightBoxTitle}
                    </p>
                    <p className="text-[20px] text-gray-300">
                      {rnd.rightBoxDesc}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </Layout>
    </>
  );
}