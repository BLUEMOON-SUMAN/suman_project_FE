import Header from "@/components/Header";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } as Transition },
};

export default function OrgPage() {
  return (
    <Layout>
      <Head>
        <title>조직도 | 수만</title>
      </Head>

      <Header />

      <HeroSection
        title="조직도"
        subtitle="Organization Chart"
        backgroundImage="/images/sub_banner/company_banner.png"
      />

      <BreadcrumbSection path="회사소개 > 조직도" />

      <main className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            className="w-full max-w-7xl" // Changed from max-w-4xl to max-w-7xl
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-auto overflow-hidden rounded-lg">
              <Image
                src="/images/company/organization/organization_suman.png"
                alt="조직도"
                width={1200}
                height={800}
                layout="responsive"
                objectFit="contain"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </main>
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
}
