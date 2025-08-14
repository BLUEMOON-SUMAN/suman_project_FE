import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection"; // Added import
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { Herotext, traits as traitData } from "@/data/philosophy";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";
import Link from "next/link";

// TalentCard 컴포넌트
function TalentCard({
  traitData,
  bgImage,
}: {
  traitData: { title: string; desc: string };
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex flex-col justify-end min-h-[450px] rounded-2xl overflow-hidden shadow-xl group"
    >
      {/* 배경 이미지 */}
      <Image
        src={bgImage}
        alt={traitData.title}
        fill
        className="object-cover object-center absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 brightness-110 contrast-110"
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

      {/* 텍스트 내용 */}
      <div className="relative z-20 p-6 text-white">
        <h3 className="text-3xl font-bold mb-2 whitespace-pre-line drop-shadow-md">
          {traitData.title}
        </h3>
        <p className="text-base whitespace-pre-line leading-relaxed text-white/90 drop-shadow-sm">
          {traitData.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function TalentPage() {
  const lang = useLangStore((state) => state.lang);
  const currentText = Herotext[lang];
  const traits = traitData[lang];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
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

  return (
    <>
    <Head>
      <title>인재상 | 수만</title>
    </Head>
    <Layout>

      <HeroSection
        title="인재상"
        subtitle="Our Talent"
        backgroundImage="/images/sub_banner/careers_hero.png"
      />

      {/* Replaced the manual breadcrumb section with BreadcrumbSection component */}
      <BreadcrumbSection path="인재 채용 > 인재상" />

      <div className="content-wrapper py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 w-full max-w-7xl">
          <div 
            className={`group relative max-w-6xl w-full mx-auto px-12 py-16 bg-white`}
            style={{
              background: 'white',
              border: 'white'
            }}
          >
            {/* 배경 장식 요소 */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
              <div className="absolute -top-40 -right-40 w-80 h-80"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                {currentText.title}
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-light">
                {currentText.desc}
              </p>

              {/* 인터랙티브 요소들 */}
              <div className="flex justify-center items-center gap-8 mt-12">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>{currentText.state}</span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{currentText.position}</span>
                </div>
              </div>
              <div className="mt-12">
                <Link
                  href="/careers/notice"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200"
                >
                  <span>{lang === 'KOR' ? '지원하기' : 'Apply Now'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
        </div>
      </div>

          {/* 카드 그리드 */}
          <motion.div
            className="grid grid-cols-12 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            {/* 위 3개 카드 */}
            {traits.slice(0, 3).map((trait) => (
              <motion.div
                key={trait.key}
                className="col-span-12 md:col-span-4"
                variants={itemRiseVariants}
              >
                <TalentCard
                  traitData={{ title: trait.title, desc: trait.desc }}
                  bgImage={trait.bgImage}
                />
              </motion.div>
            ))}

            {/* 아래 2개 카드 (중앙 정렬 교차 배치) */}
            <motion.div
              className="col-span-12 md:col-start-3 md:col-span-4"
              variants={itemRiseVariants}
            >
              <TalentCard
                traitData={{ title: traits[3].title, desc: traits[3].desc }}
                bgImage={traits[3].bgImage}
              />
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-4"
              variants={itemRiseVariants}
            >
              <TalentCard
                traitData={{ title: traits[4].title, desc: traits[4].desc }}
                bgImage={traits[4].bgImage}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
    </>
  );
}
