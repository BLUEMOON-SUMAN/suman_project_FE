import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { Herotext, traits as traitData } from "@/data/philosophy";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";
import Link from "next/link";

// TalentCard component
function TalentCard({
  traitData,
  bgImage,
  className = "",
}: {
  traitData: { title: string; desc: string };
  bgImage: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative flex flex-col justify-end rounded-2xl overflow-hidden shadow-xl group ${className}`}
      style={{ aspectRatio: "1/1" }}
    >
      <Image
        src={bgImage}
        alt={traitData.title}
        fill
        className="object-cover object-center absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 brightness-110 contrast-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
      <div className="relative z-20 p-4 sm:p-5 text-white">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 whitespace-pre-line drop-shadow-md">
          {traitData.title}
        </h3>
        <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed text-white/90 drop-shadow-sm">
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
        <title>{lang === "KOR" ? "인재상" : "Talent Philosophy "}</title>
        <meta
          name="description"
          content={
            lang === "KOR"
              ? "수만의 인재상과 핵심 가치를 확인해보세요"
              : "Discover SUMAN's talent philosophy and core values"
          }
        />
      </Head>
      <Layout>
        <HeroSection
          title={lang === "KOR" ? "인재상" : "Talent Philosophy"}
          //subtitle={lang === "KOR" ? "우리의 인재상" : "Our Talent Values"}
          backgroundImage="/images/sub_banner/careers_hero.png"
        />

        <BreadcrumbSection
          path={lang === "KOR" ? "인재 채용 > 인재상" : "Careers > Talent Philosophy"}
        />

        <div className="content-wrapper py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* ====================== UPDATED: Header title & subtitle match rnd.tsx ====================== */}
            <motion.div
              className="text-center mb-12 sm:mb-16 md:mb-20 w-full"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentText.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentText.desc}
              </p>
            </motion.div>
            {/* ====================== END UPDATED ========================================================= */}

            {/* REMOVED: card-styled header block with icon/line/CTA so it matches rnd.tsx simplicity
                (ikon roket, garis gradient, chips & Apply button) */}

            {/* Enlarged card grid for better visibility across devices */}
            <div className="w-full max-w-7xl mx-auto">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 md:gap-7 justify-items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainerVariants}
              >
                {traits.map((trait) => (
                  <motion.div
                    key={trait.key}
                    className="flex justify-center w-full"
                    variants={itemRiseVariants}
                  >
                    <TalentCard
                      traitData={{ title: trait.title, desc: trait.desc }}
                      bgImage={trait.bgImage}
                      className="w-full max-w-[308px] sm:max-w-[330px] md:max-w-[352px] xl:max-w-[374px]"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 w-full" />
      </Layout>
    </>
  );
}
