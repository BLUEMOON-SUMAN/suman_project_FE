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
      </Head>
      <Layout>
        <HeroSection
          title={<span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">{content.title}</span>}
          subtitle={<span className="text-base sm:text-lg md:text-xl font-bold tracking-wide px-2">{content.subtitle}</span>}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection path={content.breadcrumb} />

        <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
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
              className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 xl:px-0 py-8 sm:py-12 md:py-16 text-white"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 tracking-wide whitespace-pre-line text-center sm:text-left">
                {content.summaryTitle}
              </h2>
              <ul className="text-sm sm:text-base md:text-lg flex flex-col items-center sm:items-start space-y-2 sm:space-y-3 md:space-y-4 mt-3 sm:mt-4 md:mt-5 tracking-wide">
                {content.bulletList.map((text, index) => (
                  <motion.li
                    key={index}
                    className="relative w-fit bg-white/15 text-white font-medium py-1.5 sm:py-2 md:py-2.5 px-3 sm:px-4 md:px-5 rounded-full z-10 text-xs sm:text-sm md:text-base"
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
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:top-auto md:bottom-6 md:right-6 lg:top-[520px] lg:right-[300px] z-20 text-right text-xs sm:text-sm text-gray-400 drop-shadow-md space-y-0.5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>{content.sales}</p>
              <p>{content.staff}</p>
            </motion.div>
          </div>
        </section>

        <div className="content-wrapper">
          <section className="main-history-timeline py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto text-left">
              <motion.h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-12 sm:mb-16 md:mb-20 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.timelineTitle}
              </motion.h2>
              
              {/* Mobile Timeline (stacked) */}
              <div className="lg:hidden">
                <motion.div
                  className="relative"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {content.timeline.map((entry, index) => (
                    <motion.div key={index} variants={fadeInRiseVariants} className="mb-10">
                      <div className="bg-gray-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl w-full">
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">{entry.year}</h3>
                        <p className="text-lg sm:text-xl font-bold text-black tracking-wide mb-4">{entry.label}</p>
                        <div className="space-y-2">
                          {entry.items.map((item, idx) => (
                            <motion.p
                              key={idx}
                              className={`text-sm sm:text-base font-semibold tracking-wide ${item.includes("⦁") ? "text-black font-bold" : item.includes("➔") ? "text-[#8C8C8C]" : "text-[#4C4C4C]"}`}
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

              {/* Desktop Timeline (with line) */}
              <div className="hidden lg:block max-w-4xl mx-auto relative pl-16 md:pl-24 lg:pl-32">
                <motion.div
                  className="absolute left-8 md:left-12 lg:left-16 top-10 h-full border-l-2 border-dashed border-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Timeline dots */}
                <motion.div 
                  className="absolute left-8 md:left-12 lg:left-16 top-[1%] w-8 h-8 md:w-10 md:h-10 bg-[#0f172a] rounded-full border-6 md:border-8 border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                <motion.div 
                  className="absolute left-8 md:left-12 lg:left-16 top-[47.3%] w-8 h-8 md:w-10 md:h-10 bg-[#0f172a] rounded-full border-6 md:border-8 border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                <motion.div 
                  className="absolute left-8 md:left-12 lg:left-16 top-[86%] w-8 h-8 md:w-10 md:h-10 bg-[#0f172a] rounded-full border-6 md:border-8 border-gray-200 transform -translate-x-1/2 z-10"
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
                      <div className="timeline-entry mt-12 md:mt-14 mb-8 md:mb-10 relative">
                        <div className="flex items-center absolute -left-4 top-[18px] ml-[-20px]">
                          <h3 className="timeline-year text-2xl md:text-3xl font-bold text-black bg-white pr-3 md:pr-4 z-10 -translate-x-full">
                            {entry.year}
                          </h3>
                        </div>
                        <div className="bg-gray-100 p-5 md:p-6 rounded-2xl md:rounded-3xl w-full ml-[60px] md:ml-[80px]">
                          <p className="text-xl md:text-2xl font-bold text-black tracking-wide ml-3 md:ml-4">{entry.label}</p>
                        </div>
                      </div>
                      {entry.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className={`timeline-item mb-3 relative ml-[80px] md:ml-[100px]`}
                          variants={timelineItemVariants}
                        >
                          <p
                            className={`text-base md:text-lg font-semibold tracking-wide ${item.includes("⦁") ? "text-black font-bold" : item.includes("➔") ? "text-[#8C8C8C] text-sm md:text-base" : "text-[#4C4C4C]"}`}
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
        <hr className="my-6 sm:my-7 md:my-8 border-gray-200" />
      </Layout>
    </>
  );
}