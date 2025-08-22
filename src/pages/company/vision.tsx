import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { useLangStore } from "@/stores/langStore";
import {
  visionHeroText,
  visionMainText,
  visionMilestones,
  visionStrategyText,
  visionCoreValue,
  visionRndText,
} from "@/data/vision";

/** ----------------------- Helpers ----------------------- */
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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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

/** Small inline arrow (white) used inside the milestone cards */
const ArrowSVG = ({
  x,
  y,
  className,
  arrowLength = 70,
}: {
  x: number;
  y: number;
  className?: string;
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
    <line x1="0" y1="10" x2={arrowLength} y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <polyline
      points={`${arrowLength - 5},5 ${arrowLength},10 ${arrowLength - 5},15`}
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** The animated orange loop/connectors like in the slides */
const AnimatedConnectors = () => (
  <g id="neo-loop-animated" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      {/* warm orange gradient similar to the slide */}
      <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#f59e0b" />
        <stop offset="1" stopColor="#ef7d00" />
      </linearGradient>
      <marker id="arrowHeadA" markerWidth="12" markerHeight="12" refX="7" refY="3.5" orient="auto">
        <path d="M0,0 L0,7 L7,3.5 z" fill="#ef7d00" />
      </marker>
    </defs>

    {/* left → top (curves up) */}
    <motion.path
      d="M 190 465 C 260 420, 340 370, 485 360"
      stroke="url(#loopGrad)"
      strokeWidth="6"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />

    {/* top → right (curves down) */}
    <motion.path
      d="M 560 360 C 705 370, 790 420, 860 465"
      stroke="url(#loopGrad)"
      strokeWidth="6"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.25, ease: "easeInOut" }}
    />

    {/* short arrows pointing outward to each side oval */}
    <motion.path
      d="M 470 360 L 560 360"
      stroke="#ef7d00"
      strokeWidth="6"
      markerEnd="url(#arrowHeadA)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    />
    <motion.path
      d="M 275 465 L 190 465"
      stroke="#ef7d00"
      strokeWidth="6"
      markerEnd="url(#arrowHeadA)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.7 }}
    />
    <motion.path
      d="M 775 465 L 860 465"
      stroke="#ef7d00"
      strokeWidth="6"
      markerEnd="url(#arrowHeadA)"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.9 }}
    />

    {/* optional bottom smooth connector under the three bubbles */}
    <motion.path
      d="M 240 625 Q 525 650 810 625"
      stroke="url(#loopGrad)"
      strokeWidth="5"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, delay: 0.4 }}
    />
  </g>
);

/** ----------------------- Page ----------------------- */
export default function VisionPage() {
  const { lang } = useLangStore();
  const hero = visionHeroText[lang];
  const main = visionMainText[lang];
  const milestones = visionMilestones[lang];
  const strategy = visionStrategyText[lang];
  const coreValues = visionCoreValue[lang];
  const rnd = visionRndText[lang];

  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

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
        <BreadcrumbSection path={lang === "KOR" ? "회사소개 > 기업 비전" : "Company > Vision"} />

        {/* =============== VISION / SLIDE-STYLE GRAPHIC =============== */}
        <motion.section
          className="vision-section bg-white py-12 md:py-20 px-4 md:px-8"
          variants={fadeInRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-8 md:mb-16 tracking-wide">
              Vision
            </h2>

            <div className="mt-6 md:mt-10">
              {/* Title block above the graphic */}
              <div className="mb-6">
                <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 mb-2">
                  {main.topLabel}
                </p>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-navy-600 mb-2">
                  {main.blueTitle}
                </h3>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800">
                  {main.blackTitle}
                </h3>
              </div>

              {/* ---------- Infographic with animated connectors ---------- */}
              <div className="w-full max-w-5xl mx-auto aspect-video relative">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1047 900"
                  preserveAspectRatio="xMidYMid meet"
                  className="vision-infographic-svg"
                  style={{ transform: "scale(0.9)" }}
                >
                  {/* Orange animated loop + arrows */}
                  <AnimatedConnectors />

                  {/* Three milestone panels (left, bottom, right) */}
                  {isClient &&
                    milestones.map((milestone, idx) => (
                      <g
                        key={milestone.year}
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSection(milestone.year)}
                        onMouseLeave={() => setHoveredSection(null)}
                      >
                        {/* Use your prepared PNGs to replicate the slide shapes */}
                        <image
                          href={`/images/company/vision/vision_arrow${3 - idx}.png`}
                          x={idx === 0 ? "-6" : idx === 1 ? "79" : "486"}
                          y={idx === 0 ? "169" : idx === 1 ? "499" : "0"}
                          width={idx === 0 ? "270" : idx === 1 ? "470" : "578"}
                          height={idx === 0 ? "420" : idx === 1 ? "415" : "827"}
                          className="transition-all duration-300 group-hover:opacity-80 group-hover:scale-[1.02] filter brightness-50"
                        />

                        {/* Year text */}
                        <text
                          x={idx === 0 ? "110" : idx === 1 ? "310" : "750"}
                          y={idx === 0 ? "350" : idx === 1 ? "650" : "400"}
                          fill="white"
                          fontSize={idx === 2 ? "70" : idx === 1 ? "60" : "50"}
                          fontWeight="bold"
                          textAnchor="middle"
                          className="transition-all duration-300 group-hover:fill-gray-200"
                        >
                          {milestone.year}
                        </text>

                        {/* Small inline white arrow inside each panel */}
                        <ArrowSVG
                          x={idx === 0 ? 50 : idx === 1 ? 235 : 660}
                          y={(idx === 0 ? 380 : idx === 1 ? 680 : 430) - 10}
                          className={`transition-opacity duration-300 ${
                            hoveredSection === milestone.year ? "opacity-0" : "opacity-100"
                          }`}
                          arrowLength={idx === 0 ? 130 : idx === 1 ? 160 : 190}
                        />

                        {/* Hover text (shows description) */}
                        <foreignObject
                          x={idx === 0 ? "0" : idx === 1 ? "210" : "650"}
                          y={idx === 0 ? "380" : idx === 1 ? "670" : "420"}
                          width="260"
                          height="100"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === milestone.year ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="text-[16px] leading-snug text-center text-white whitespace-pre-line">
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

        {/* ================== STRATEGY / CORE VALUE / R&D ==================
            Keep your existing sections below unchanged, or include trimmed versions.
            The important part above is the animated connectors inside the SVG. */}

        {/* Strategy (trimmed, still animated containers) */}
        <motion.section
          className="strategy-section bg-gradient-to-br from-slate-50 to-navy-50 py-16 px-4 md:px-8"
          variants={fadeInRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-black mb-4">{strategy.subtitle}</h2>
            <p className="text-lg text-gray-600 mb-12">{strategy.title}</p>

            <div className="text-center mb-16">
              <h3 className="text-6xl font-bold text-navy-600 mb-6">{strategy.neoTitle}</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100 max-w-4xl mx-auto">
                <p className="text-xl text-gray-800 whitespace-pre-line leading-relaxed">{strategy.mainGoal}</p>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {strategy.strategicPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  variants={itemRiseVariants}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-gray-800 whitespace-pre-line">{point}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-navy-50 rounded-xl p-6 border border-navy-200">
                <h5 className="text-lg font-semibold text-navy-800 mb-3">R&BD / Development</h5>
                <p className="text-gray-700 whitespace-pre-line text-sm">{strategy.businessAreas.development}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Manufacturing</h5>
                <p className="text-gray-700 whitespace-pre-line text-sm">{strategy.businessAreas.manufacturing}</p>
              </div>
            </div>

            <div className="bg-navy-600 rounded-xl p-6 text-white mb-8">
              <h5 className="text-lg font-semibold mb-3">Partnerships & Innovation</h5>
              <p className="whitespace-pre-line text-sm">{strategy.businessAreas.partnerships}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {strategy.businessAreas.sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm text-gray-800 whitespace-pre-line font-medium">{sector}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Core Value */}
        <section className="core-value-section bg-white py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-6 tracking-wide">Core Value</h2>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 mb-8 whitespace-pre-line">
              {lang === "KOR"
                ? "끊임없이 변화하는 시대\n우리는 유연함과 전문성으로 대응합니다"
                : "In a Constantly Changing Era\nWe Respond with Agility and Expertise"}
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-12 gap-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex flex-col justify-end p-4 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[320px] md:min-h-[380px]"
                  variants={itemRiseVariants}
                  style={{
                    backgroundImage: `url(/images/company/vision/vision_${["Flex", "pro", "tek", "rnbd"][idx]}.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath: "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-black opacity-40"
                    style={{ clipPath: "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)" }}
                  />
                  <div className="relative text-white flex flex-col flex-grow justify-start pt-48 md:pt-60">
                    <h3 className="text-[20px] md:text-[25px] font-semibold mb-2">{value.title}</h3>
                    <p className="text-[13px] md:text-[15px] whitespace-pre-line">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* R&D */}
        <motion.section
          className="rnd-section bg-[#010104] text-white py-12 md:py-20 px-4 md:px-8 rounded-t-3xl overflow-hidden relative"
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
            <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-white mb-10 tracking-wide">{rnd.title}</h2>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-8 md:mb-12 whitespace-pre-line tracking-wide">
              {rnd.subtitle}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="md:w-1/2 flex flex-col items-end">
                <motion.div className="bg-white/40 rounded-4xl p-3 mb-4 w-full max-w-72 h-20 md:h-23 backdrop-blur-sm" variants={rndBoxLeftInVariants}>
                  <p className="text-[20px] md:text-[25px] text-white font-semibold mb-2 flex items-center justify-center">
                    {rnd.leftBox1Title}
                  </p>
                  <p className="text-[13px] md:text-[15px] text-white flex items-center justify-center">{rnd.leftBox1Desc}</p>
                </motion.div>
                <motion.div className="bg-white/40 rounded-4xl p-3 mb-4 w-full max-w-72 h-20 md:h-23 backdrop-blur-sm" variants={rndBoxLeftInVariants}>
                  <p className="text-[20px] md:text-[25px] text-white font-semibold mb-2 flex items-center justify-center">
                    {rnd.leftBox2Title}
                  </p>
                  <p className="text-[13px] md:text-[15px] text-white flex items-center justify-center">{rnd.leftBox2Desc}</p>
                </motion.div>
              </div>

              <motion.div className="hidden md:flex flex-col justify-center items-center h-full" variants={processLineVariants}>
                <svg width="188" height="71" viewBox="0 0 188 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" style={{ maskType: "alpha" } as any} maskUnits="userSpaceOnUse" x="0" y="0" width="188" height="71">
                    <rect width="20" height="71" fill="black" />
                    <rect x="42" width="20" height="71" fill="black" />
                    <rect x="84" width="20" height="71" fill="black" />
                    <rect x="126" width="20" height="71" fill="black" />
                    <rect x="168" width="20" height="71" fill="black" />
                  </mask>
                  <g mask="url(#mask0)">
                    <rect x="-23" width="226" height="71" fill="url(#paint0_linear)" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear" x1="-23" y1="35.5" x2="203" y2="35.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <motion.div
                  className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                  style={{ backgroundImage: 'url("/images/company/vision/vision_dev.png")' }}
                  variants={rndBoxRightInVariants}
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/100 via-[79%] to-transparent p-4">
                    <p className="text-gray-300 text-[13px] md:text-[15px] mb-1">{rnd.rightBoxTop}</p>
                    <p className="text-[20px] md:text-[25px] font-semibold">{rnd.rightBoxTitle}</p>
                    <p className="text-[16px] md:text-[20px] text-gray-300">{rnd.rightBoxDesc}</p>
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
