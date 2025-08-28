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

export default function OrgPage() {
  const { lang } = useLangStore();
  
  // Define content based on language
  const content = {
    KOR: {
      title: "조직도",
      //subtitle: "Organization Chart",
      breadcrumb: "회사소개 > 조직도",
      image: "/images/company/organization/organization_suman_korean.png",
      alt: "조직도",
      pageTitle: "조직도 | 수만"
    },
    ENG: {
      title: "Organization Chart",
      //subtitle: "조직도",
      breadcrumb: "Company > Organization",
      image: "/images/company/organization/organization_suman_english.png",
      alt: "Organization Chart",
      pageTitle: "Organization | SUMAN"
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
            <div className="relative w-full h-auto overflow-hidden rounded-lg px-[7.5%] md:px-[15%] lg:px-[20%]">
              <Image
                src={currentContent.image}
                alt={currentContent.alt}
                width={1500}
                height={1100}
                layout="responsive"
                objectFit="contain"
                className="w-full h-auto"
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