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

  return (
    <>
      <Head>
        <title>{lang === "KOR" ? "연혁 | 수만" : "History | SUMAN"}</title>
      </Head>
      <Layout>
        <HeroSection
          title={<span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">{content.title}</span>}
          subtitle={<span className="text-base md:text-lg lg:text-xl font-bold tracking-wide px-2">{content.subtitle}</span>}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection path={content.breadcrumb} />

        <section className="relative w-full h-auto md:h-[700px]">
          <div
            className="absolute inset-0 bg-cover z-0 min-h-[500px] md:min-h-full"
            style={{
              backgroundImage: "url('/images/company/history/history_suman.png')",
              backgroundPosition: "center 70%",
            }}
          >
            <div className="absolute inset-0 bg-[#020c23]/85 z-10" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 xl:px-0 py-12 md:py-24 text-white"
            >
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold mb-3 tracking-wide whitespace-pre-line">
                {content.summaryTitle}
              </h2>
              <ul className="text-base md:text-xl flex-col items-start space-y-4 md:space-y-6 mt-5 md:mt-7 tracking-wide">
                {content.bulletList.map((text, index) => (
                  <motion.li
                    key={index}
                    className="relative w-full md:w-fit bg-white/15 text-white font-medium py-2.5 md:py-3.5 px-4 md:px-6 rounded-full z-10 text-sm md:text-base"
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
              className="absolute bottom-4 md:bottom-auto md:top-[620px] right-4 md:right-[360px] z-20 text-right text-xs md:text-sm text-gray-400 drop-shadow-md space-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>{content.sales}</p>
              <p>{content.staff}</p>
            </motion.div>
          </div>
          <svg
            className="absolute inset-0 mx-auto my-auto z-20 opacity-80 pointer-events-none hidden md:block"
            viewBox="0 0 700 300"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 150 233 Q 460 243, 555 138"
              stroke="url(#arrow-gradient)"
              strokeWidth="6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 563 123 L 562 145 L 542 137 Z"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.1 }}
            />
          </svg>
        </section>

        <div className="content-wrapper">
          <section className="main-history-timeline py-16 md:py-28 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-left">
              <motion.h2
                className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-16 md:mb-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.timelineTitle}
              </motion.h2>
              <div className="max-w-5xl mx-auto relative pl-0 md:pl-26 lg:pl-36">
                <motion.div
                  className="absolute left-[20px] md:left-[150px] top-12 h-full border-l-2 border-dashed border-gray-300 hidden md:block"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
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
                      <div className="timeline-entry mt-10 md:mt-16 mb-6 md:mb-10 relative">
                        <div className="flex items-center absolute -left-2 md:-left-2 top-[18px] ml-[-24px]">
                          <h3 className="timeline-year text-2xl md:text-3xl font-bold text-black bg-white pr-2 md:pr-4 z-10 -translate-x-full">
                            {entry.year}
                          </h3>
                        </div>
                        <div className="bg-gray-100 p-4 md:p-6 rounded-[20px] md:rounded-[30px] w-full ml-0 md:ml-[60px] lg:ml-[100px]">
                          <p className="text-lg md:text-xl lg:text-2xl font-bold text-black tracking-wide ml-0 md:ml-4">{entry.label}</p>
                        </div>
                      </div>
                      {entry.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="timeline-item mb-3 relative ml-0 md:ml-[90px] lg:ml-[155px]"
                          initial={{ opacity: 0, x: -30, y: -10 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: idx * 0.05,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >
                          <p className={`text-sm md:text-base lg:text-lg font-semibold tracking-wide ${
                            item.includes("⦁")
                              ? "text-black font-bold"
                              : item.includes("➔")
                              ? "text-[#8C8C8C] text-xs md:text-base"
                              : "text-[#4C4C4C]"
                          }`}>
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>

                {/* 점들 - hanya ditampilkan di desktop */}
                <motion.div className="absolute left-0 top-[1%] w-8 h-8 md:w-12 md:h-12 bg-[#0f172a] rounded-full border-[8px] md:border-[12px] border-gray-200 ml-8 md:ml-32 hidden md:block" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }} viewport={{ once: true }} />
                <motion.div className="absolute left-0 top-[47.3%] w-8 h-8 md:w-12 md:h-12 bg-[#0f172a] rounded-full border-[8px] md:border-[12px] border-gray-200 ml-8 md:ml-32 hidden md:block" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }} viewport={{ once: true }} />
                <motion.div className="absolute left-0 top-[86%] w-8 h-8 md:w-12 md:h-12 bg-[#0f172a] rounded-full border-[8px] md:border-[12px] border-gray-200 ml-8 md:ml-32 hidden md:block" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} viewport={{ once: true }} />
              </div>
            </div>
          </section>
        </div>
        <hr className="my-8 border-gray-200" />
      </Layout>
    </>
  );
}