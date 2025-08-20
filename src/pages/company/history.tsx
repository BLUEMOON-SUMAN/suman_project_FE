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

        <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
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
              className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12 sm:py-16 md:py-20 lg:py-24 text-white"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 tracking-wide whitespace-pre-line text-center sm:text-left">
                {content.summaryTitle}
              </h2>
              <ul className="text-base sm:text-lg md:text-xl flex flex-col items-center sm:items-start space-y-4 sm:space-y-5 md:space-y-6 mt-4 sm:mt-5 md:mt-6 lg:mt-7 tracking-wide">
                {content.bulletList.map((text, index) => (
                  <motion.li
                    key={index}
                    className="relative w-fit bg-white/15 text-white font-medium py-2 sm:py-3 md:py-3.5 px-4 sm:px-5 md:px-6 rounded-full z-10 text-sm sm:text-base md:text-lg"
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
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:top-auto md:bottom-8 md:right-8 lg:top-[550px] lg:right-[300px] xl:top-[620px] xl:right-[360px] z-20 text-right text-xs sm:text-sm text-gray-400 drop-shadow-md space-y-1"
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
          <section className="main-history-timeline py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-left">
              <motion.h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-16 sm:mb-20 md:mb-24 lg:mb-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.timelineTitle}
              </motion.h2>
              <div className="max-w-5xl mx-auto relative pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-36">
                <motion.div
                  className="absolute left-12 sm:left-16 md:left-20 lg:left-24 xl:left-[150px] top-12 h-full border-l-2 border-dashed border-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Dot pertama di samping 2021 - 현재 */}
                <motion.div 
                  className="absolute left-12 sm:left-16 md:left-20 lg:left-24 xl:left-[150px] top-[1%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0f172a] rounded-full border-6 sm:border-8 md:border-10 lg:border-[12px] border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Dot kedua di samping 2015 - 2020 */}
                <motion.div 
                  className="absolute left-12 sm:left-16 md:left-20 lg:left-24 xl:left-[150px] top-[47.3%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0f172a] rounded-full border-6 sm:border-8 md:border-10 lg:border-[12px] border-gray-200 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                
                {/* Dot ketiga di samping 2014 */}
                <motion.div 
                  className="absolute left-12 sm:left-16 md:left-20 lg:left-24 xl:left-[150px] top-[86%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0f172a] rounded-full border-6 sm:border-8 md:border-10 lg:border-[12px] border-gray-200 transform -translate-x-1/2 z-10"
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
                      <div className="timeline-entry mt-12 sm:mt-14 md:mt-16 mb-8 sm:mb-9 md:mb-10 relative">
                        <div className="flex items-center absolute -left-2 sm:-left-3 top-[14px] sm:top-[16px] md:top-[18px] ml-[-16px] sm:ml-[-20px] md:ml-[-24px]">
                          <h3 className="timeline-year text-2xl sm:text-3xl md:text-3xl font-bold text-black bg-white pr-3 sm:pr-4 z-10 -translate-x-full">
                            {entry.year}
                          </h3>
                        </div>
                        <div className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl w-full ml-[40px] sm:ml-[50px] md:ml-[60px] lg:ml-[80px] xl:ml-[100px]">
                          <p className="text-xl sm:text-2xl font-bold text-black tracking-wide ml-3 sm:ml-4">{entry.label}</p>
                        </div>
                      </div>
                      {entry.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className={`timeline-item mb-2 sm:mb-3 relative ml-[50px] sm:ml-[60px] md:ml-[70px] lg:ml-[90px] xl:ml-[155px]`}
                          variants={timelineItemVariants}
                        >
                          <p
                            className={`text-base sm:text-lg font-semibold tracking-wide ${item.includes("⦁") ? "text-black font-bold" : item.includes("➔") ? "text-[#8C8C8C] text-sm sm:text-base" : "text-[#4C4C4C]"}`}
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