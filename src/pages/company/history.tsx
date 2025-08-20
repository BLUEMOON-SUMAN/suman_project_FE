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
          title={<span className="text-5xl font-bold tracking-wide">{content.title}</span>}
          subtitle={<span className="text-xl font-bold tracking-wide px-2">{content.subtitle}</span>}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection path={content.breadcrumb} />

        <section className="relative w-full h-[700px]">
          <div
            className="absolute inset-0 bg-cover z-0"
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
          </div>
          {/* Arrow section has been completely removed */}
        </section>

        <div className="content-wrapper">
          <section className="main-history-timeline py-20 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto text-left">
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-black mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.timelineTitle}
              </motion.h2>
              
              <div className="relative">
                {/* Vertical timeline line */}
                <motion.div
                  className="absolute left-4 md:left-6 top-8 h-[90%] border-l-2 border-dashed border-gray-400"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "90%" }}
                  transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
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
                    <motion.div 
                      key={index} 
                      variants={fadeInRiseVariants} 
                      className="relative mb-12 last:mb-0"
                    >
                      <div className="flex items-start">
                        {/* Year section */}
                        <div className="w-20 md:w-24 flex-shrink-0">
                          <h3 className="text-2xl md:text-3xl font-bold text-black">
                            {entry.year}
                          </h3>
                        </div>
                        
                        {/* Dot connector */}
                        <div className="absolute left-4 md:left-6 top-2.5 transform -translate-x-1/2 z-10">
                          <motion.div
                            className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>

                        {/* Content section */}
                        <div className="flex-1 ml-10 md:ml-12">
                          {/* Label box */}
                          <div className="bg-blue-50 p-4 md:p-5 rounded-xl border border-blue-100 shadow-sm mb-3">
                            <p className="text-lg md:text-xl font-bold text-blue-800">
                              {entry.label}
                            </p>
                          </div>
                          
                          {/* Timeline items */}
                          <div className="space-y-2 pl-2">
                            {entry.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: idx * 0.05,
                                  ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                              >
                                <p className={`text-sm md:text-base ${
                                  item.includes("⦁") || item.startsWith("-")
                                    ? "text-gray-800 font-medium"
                                    : item.includes("➔")
                                    ? "text-gray-600"
                                    : "text-gray-700"
                                }`}>
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
        <hr className="my-8 border-gray-200" />
      </Layout>
    </>
  );
}