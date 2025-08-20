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

        <section className="relative w-full h-[450px] sm:h-[540px] md:h-[630px]">
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
              className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 xl:px-0 py-10 sm:py-14 md:py-20 text-white"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 tracking-wide whitespace-pre-line">
                {content.summaryTitle}
              </h2>
              <ul className="text-base sm:text-lg md:text-xl flex-col items-start space-y-3 sm:space-y-4 md:space-y-5 mt-3 sm:mt-5 md:mt-6 tracking-wide">
                {content.bulletList.map((text, index) => (
                  <motion.li
                    key={index}
                    className="relative w-fit bg-white/15 text-white font-medium py-1.5 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 rounded-full z-10 text-sm sm:text-base md:text-lg"
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
              className="absolute bottom-4 right-3 sm:right-6 md:top-[558px] md:right-[324px] z-20 text-right text-xs sm:text-sm text-gray-400 drop-shadow-md space-y-0.5"
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
          <section className="main-history-timeline py-14 sm:py-18 md:py-24 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto text-left">
              <motion.h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-14 sm:mb-18 md:mb-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.timelineTitle}
              </motion.h2>
              <div className="max-w-4xl mx-auto relative pl-3 sm:pl-6 md:pl-10 lg:pl-16 xl:pl-32">
                {/* Timeline line */}
                <motion.div
                  className="absolute left-3 sm:left-5 md:left-7 lg:left-[135px] top-10 h-full border-l-2 border-dashed border-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Timeline dots */}
                <motion.div 
                  className="absolute left-3 sm:left-5 md:left-7 lg:left-[135px] top-[1%] w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-[#0f172a] rounded-full border-3 sm:border-5 md:border-7 lg:border-[10px] border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                <motion.div 
                  className="absolute left-3 sm:left-5 md:left-7 lg:left-[135px] top-[47.3%] w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-[#0f172a] rounded-full border-3 sm:border-5 md:border-7 lg:border-[10px] border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                <motion.div 
                  className="absolute left-3 sm:left-5 md:left-7 lg:left-[135px] top-[86%] w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-[#0f172a] rounded-full border-3 sm:border-5 md:border-7 lg:border-[10px] border-gray-200 transform -translate-x-1/2 z-10"
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
                      <div className="timeline-entry mt-10 sm:mt-12 md:mt-14 mb-6 sm:mb-8 md:mb-9 relative">
                        <div className="flex items-center absolute -left-1.5 sm:-left-3 top-[14px] sm:top-[16px] ml-[-10px] sm:ml-[-16px] md:ml-[-22px]">
                          <h3 className="timeline-year text-lg sm:text-xl md:text-2xl font-bold text-black bg-white pr-1.5 sm:pr-2.5 md:pr-3.5 z-10 -translate-x-full">
                            {entry.year}
                          </h3>
                        </div>
                        <div className="bg-gray-100 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl md:rounded-3xl w-full ml-[36px] sm:ml-[45px] md:ml-[54px] lg:ml-[72px] xl:ml-[90px]">
                          <p className="text-base sm:text-lg md:text-xl font-bold text-black tracking-wide ml-1.5 sm:ml-2.5 md:ml-3.5">{entry.label}</p>
                        </div>
                      </div>
                      {entry.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className={`timeline-item mb-2 sm:mb-2.5 md:mb-3 relative ml-[45px] sm:ml-[54px] md:ml-[63px] lg:ml-[81px] xl:ml-[140px]`}
                          variants={timelineItemVariants}
                        >
                          <p
                            className={`text-xs sm:text-sm md:text-base font-semibold tracking-wide ${item.includes("⦁") ? "text-black font-bold" : item.includes("➔") ? "text-[#8C8C8C] text-xs sm:text-sm md:text-base" : "text-[#4C4C4C]"}`}
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