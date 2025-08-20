import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Head from "next/head";
import { useLangStore } from "@/stores/langStore";
import { historyText } from "@/data/history";

// Arrow Component
const ArrowIcon = () => (
  <svg 
    width="60" 
    height="60" 
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    <path 
      d="M30 10V50M30 50L40 40M30 50L20 40" 
      stroke="#0f172a" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function HistoryPage() {
  const { lang } = useLangStore();
  const content = historyText[lang];

  const fadeInRiseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } as Transition,
    },
  };

  return (
    <>
      <Head>
        <title>{lang === "KOR" ? "연혁 | 수만" : "History | SUMAN"}</title>
      </Head>
      <Layout>
        <HeroSection
          title={<span className="text-5xl font-bold tracking-wide">{content.title}</span>}
          subtitle={<span className="text-xl font-bold tracking-wide px-2">{content.subtitle}</span>}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection path={content.breadcrumb} />

        <section className="relative w-full h-[700px]">
          <div
            className="absolute inset-0 bg-cover z-0"
            style={{
              backgroundImage: "url('/images/history_suman.png')",
              backgroundPosition: "center 70%",
            }}
          >
            <div className="absolute inset-0 bg-[#020c23]/85 z-10" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 xl:px-0 py-24 text-white"
            >
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 tracking-wide whitespace-pre-line">
                {content.summaryTitle}
              </h2>
              <ul className="text-xl flex-col items-start space-y-6 mt-7 tracking-wide">
                {content.bulletList.map((text, index) => (
                  <motion.li
                    key={index}
                    className="relative w-fit bg-white/15 text-white font-medium py-3.5 px-6 rounded-full z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="absolute top-[620px] right-[360px] z-20 text-right text-sm text-gray-400 drop-shadow-md space-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>{content.sales}</p>
              <p>{content.staff}</p>
            </motion.div>
            
            {/* Arrow Section */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.5
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowIcon />
                </motion.div>
                <p className="text-white text-sm mt-2 font-light tracking-wide">
                  {lang === "KOR" ? "아래로 스크롤" : "Scroll Down"}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="content-wrapper">
          <section className="main-history-timeline py-28 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-left">
              <motion.h2
                className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.timelineTitle}
              </motion.h2>
              <div className="max-w-5xl mx-auto relative pl-26 md:pl-36">
                <motion.div
                  className="absolute left-[150px] top-12 h-full border-l-2 border-dashed border-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Dot pertama di samping 2021 - 현재 */}
                <motion.div 
                  className="absolute left-[150px] top-[12%] w-12 h-12 bg-[#0f172a] rounded-full border-[12px] border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Dot kedua di samping 2015 - 2020 */}
                <motion.div 
                  className="absolute left-[150px] top-[38%] w-12 h-12 bg-[#0f172a] rounded-full border-[12px] border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Dot ketiga di samping 2014 - moved 10% lower */}
                <motion.div 
                  className="absolute left-[150px] top-[80%] w-12 h-12 bg-[#0f172a] rounded-full border-[12px] border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                <motion.div
                  className="timeline-container relative"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {content.timeline.map((entry, index) => (
                    <motion.div key={index} variants={fadeInRiseVariants}>
                      <div className="timeline-entry mt-16 mb-10 relative">
                        <div className="flex items-center absolute -left-2 top-[18px] ml-[-24px]">
                          <h3 className="timeline-year text-3xl md:text-3xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                            {entry.year}
                          </h3>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-[30px] w-full ml-[60px] md:ml-[100px]">
                          <p className="text-2xl font-bold text-black tracking-wide ml-4">{entry.label}</p>
                        </div>
                      </div>
                      {entry.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className={`timeline-item mb-3 relative ml-[90px] md:ml-[155px]`}
                          variants={timelineItemVariants}
                        >
                          <p
                            className={`text-lg font-semibold tracking-wide ${item.includes("⦁") ? "text-black font-bold" : item.includes("➔") ? "text-[#8C8C8C] text-base" : "text-[#4C4C4C]"}`}
                          >
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        <hr className="my-8 border-gray-200" />
      </Layout>
    </>
  );
}