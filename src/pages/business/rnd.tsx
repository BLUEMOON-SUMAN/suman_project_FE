import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import { useLangStore } from "@/stores/langStore";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } as Transition },
};

export default function ServicePage() {
  const { lang } = useLangStore();
  
  // Define content based on language
  const content = {
    KOR: {
      title: "연구분야",
      //subtitle: "Organization Chart",
      breadcrumb: "회사소개 > 연구분야",
      image: "/images/company/organization/organization_suman_koreann.png",
      alt: "연구분야",
      pageTitle: "연구분야"
    },
    ENG: {
      title: "Research Field",
      //subtitle: "조직도",
      breadcrumb: "Company > Research Field",
      image: "/images/company/organization/organization_suman_englishh.png",
      alt: "Research Field",
      pageTitle: "Research Field | SUMAN"
    }
  };

  const currentContent = content[lang];

  return (
    <Layout>
      <Head>
        <title>{currentContent.pageTitle}</title>
      </Head>

      <HeroSection
        title={currentContent.title}
        //subtitle={currentContent.subtitle}
        backgroundImage="/images/sub_banner/company_banner.png"
      />

      <BreadcrumbSection path={currentContent.breadcrumb} />

      <main className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            className="w-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* <-- DIBESARKAN ~20%: kurangi padding kiri/kanan */}
            <div className="relative w-full h-auto overflow-hidden rounded-lg px-0 md:px-[8%] lg:px-[14%]">
              <Image
                src={currentContent.image}
                alt={currentContent.alt}
                width={1200}
                height={800}
                layout="responsive"
                objectFit="contain"
                className="w-full h-auto"
                sizes="(min-width:1024px) 72vw, (min-width:768px) 84vw, 94vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </main>
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
}
