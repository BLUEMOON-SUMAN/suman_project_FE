import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Head from "next/head";
import { useLangStore } from "@/stores/langStore";
import { historyText } from "@/data/history";

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
        <meta name="description" content={lang === "KOR" ? "수만의 성장 역사와 주요 연혁을 확인해보세요" : "Discover SUMAN's growth history and major milestones"} />
      </Head>
      <Layout>
        <HeroSection
          title={<span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">{content.title}</span>}
          subtitle={<span className="text-base sm:text-lg md:text-xl font-bold tracking-wide px-2">{content.subtitle}</span>}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection path={content.breadcrumb} />

        {/* Hero Content Section */}
        <section className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
          <div
            className="absolute inset-0 bg-cover z-0"
            style={{
              backgroundImage: "url('/images/history_suman.png')",
              backgroundPosition: "center 70%",
            }}
          >
            <div className="absolute inset-0 bg-[#020c23]/90 z-10" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-8 sm:py-12 md:py-16 lg:py-20 text-white"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 tracking-wide text-center sm:text-left leading-tight">
                {content.summaryTitle}
              </h2>
              <ul className="text-sm sm:text-base md:text-lg flex flex-col items-center sm:items-start space-y-3 sm:space-y-4 md:space-y-5 mt-4 sm:mt-5 md:mt-6 tracking-wide">
                {content.bulletList.map((text, index) => (
                  <motion.li
                    key={index}
                    className="relative w-fit bg-white/20 text-white font-medium py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-full z-10 text-xs sm:text-sm md:text-base backdrop-blur-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.2,
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
              className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 xl:top-auto xl:bottom-10 xl:right-10 z-20 text-right text-xs sm:text-sm text-gray-300 drop-shadow-md space-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="font-medium">{content.sales}</p>
              <p className="font-medium">{content.staff}</p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <div className="content-wrapper">
          <section className="main-history-timeline py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 sm:mb-16 md:mb-20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.timelineTitle}
              </motion.h2>
              
              {/* Mobile Timeline (stacked cards) */}
              <div className="lg:hidden">
                <motion.div
                  className="relative space-y-6 sm:space-y-8"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {content.timeline.map((entry, index) => (
                    <motion.div key={index} variants={fadeInRiseVariants}>
                      <div className="bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100">
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{entry.year}</h3>
                        </div>
                        <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 pl-6 border-l-2 border-blue-400">
                          {entry.label}
                        </p>
                        <div className="space-y-2 pl-6">
                          {entry.items.map((item, idx) => (
                            <motion.p
                              key={idx}
                              className={`text-sm sm:text-base font-medium tracking-wide ${
                                item.includes("⦁") 
                                  ? "text-gray-900 font-semibold" 
                                  : item.includes("➔") 
                                  ? "text-gray-600" 
                                  : "text-gray-700"
                              }`}
                              variants={timelineItemVariants}
                            >
                              {item}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Desktop Timeline (with vertical line) - Moved 20% to the right */}
              <div className="hidden lg:block max-w-5xl mx-auto relative pl-32 md:pl-40 lg:pl-48">
                {/* Vertical timeline line - Moved 20% to the right */}
                <motion.div
                  className="absolute left-24 md:left-28 lg:left-32 top-4 h-[calc(100%-2rem)] border-l-2 border-dashed border-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "calc(100% - 2rem)" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Timeline dots - Moved 20% to the right */}
                {[0, 1, 2].map((position) => (
                  <motion.div 
                    key={position}
                    className="absolute left-24 md:left-28 lg:left-32 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"
                    style={{
                      top: position === 0 ? '4%' : position === 1 ? '50%' : '96%'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + position * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                ))}
                
                <motion.div
                  className="relative space-y-16"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {content.timeline.map((entry, index) => (
                    <motion.div key={index} variants={fadeInRiseVariants}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-40 md:w-48">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bg-white pr-6">
                            {entry.year}
                          </h3>
                        </div>
                        <div className="flex-grow bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-md border border-gray-100 ml-8">
                          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                            {entry.label}
                          </p>
                          <div className="space-y-2">
                            {entry.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                className="timeline-item"
                                variants={timelineItemVariants}
                              >
                                <p
                                  className={`text-base md:text-lg font-medium tracking-wide ${
                                    item.includes("⦁") 
                                      ? "text-gray-900 font-semibold" 
                                      : item.includes("➔") 
                                      ? "text-gray-600" 
                                      : "text-gray-700"
                                  }`}
                                >
                                  {item}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Footer separator */}
        <div className="border-t border-gray-200 my-8 sm:my-12 md:my-16"></div>
      </Layout>
    </>
  );
}