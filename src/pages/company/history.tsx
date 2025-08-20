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
          <svg
            className="absolute inset-0 mx-auto my-auto z-20 opacity-95 pointer-events-none"
            viewBox="0 0 700 300"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: '-50px' }}
          >
            <defs>
              {/* Gradient untuk panah putih */}
              <linearGradient id="white-arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="white-arrowhead-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f0f0f0" />
              </linearGradient>
              {/* Filter untuk efek glow putih */}
              <filter id="white-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              {/* Shadow untuk membuat panah lebih terlihat di background gelap */}
              <filter id="white-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.5"/>
              </filter>
            </defs>
            {/* Path panah putih */}
            <motion.path
              d="M 150 250 Q 350 150, 555 100"
              stroke="url(#white-arrow-gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              filter="url(#white-shadow)" // Menambahkan shadow untuk kontras
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Arrowhead putih */}
            <motion.path
              d="M 555 100 L 540 85 L 545 100 L 540 115 Z"
              fill="url(#white-arrowhead-gradient)"
              stroke="#f0f0f0"
              strokeWidth="2"
              filter="url(#white-shadow)" // Menambahkan shadow untuk kontras
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.1 }}
            />
          </svg>
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
              <div className="max-w-5xl mx-auto relative">
                {/* Vertical timeline line - positioned absolutely */}
                <motion.div
                  className="absolute left-4 md:left-6 lg:left-8 xl:left-10 top-12 h-full border-l-2 border-dashed border-gray-300"
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
                    <motion.div key={index} variants={fadeInRiseVariants} className="relative">
                      <div className="timeline-entry mt-16 mb-10 flex flex-col md:flex-row">
                        {/* Year section - fixed width for alignment */}
                        <div className="w-24 md:w-32 lg:w-40 flex-shrink-0 mb-4 md:mb-0">
                          <h3 className="timeline-year text-3xl md:text-4xl font-bold text-black">
                            {entry.year}
                          </h3>
                        </div>
                        
                        {/* Dot connector - aligned with the vertical line */}
                        <div className="absolute left-4 md:left-6 lg:left-8 xl:left-10 top-9 transform -translate-x-1/2 z-10">
                          <motion.div
                            className="w-8 h-8 bg-[#0f172a] rounded-full border-8 border-gray-200"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>

                        {/* Content section */}
                        <div className="flex-1 ml-8 md:ml-12 lg:ml-16">
                          {/* Label box */}
                          <div className="bg-gray-100 p-6 rounded-[30px]">
                            <p className="text-xl md:text-2xl font-bold text-black tracking-wide">
                              {entry.label}
                            </p>
                          </div>
                          
                          {/* Timeline items */}
                          <div className="mt-4">
                            {entry.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                className="timeline-item mb-3"
                                initial={{ opacity: 0, x: -30, y: -10 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{
                                  duration: 0.25,
                                  delay: idx * 0.05,
                                  ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                              >
                                <p className={`text-base md:text-lg font-semibold tracking-wide ${
                                  item.includes("⦁")
                                    ? "text-black font-bold"
                                    : item.includes("➔")
                                    ? "text-[#8C8C8C]"
                                    : "text-[#4C4C4C]"
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