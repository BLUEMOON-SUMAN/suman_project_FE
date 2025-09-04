"use client";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import { useLangStore } from "@/stores/langStore";
import React, { useEffect } from "react";

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
      subtitle: "회사 조직 현황",
      breadcrumb: "회사소개 > 조직도",
      image: "/images/company/organization/organization_suman_korean.png",
      alt: "조직도",
      pageTitle: "조직도 | 수만",
      docTitle: "조직도",
    },
    ENG: {
      title: "Organization Chart",
      subtitle: "Organization Structure",
      breadcrumb: "Company > Organization",
      image: "/images/company/organization/organization_suman_english.png",
      alt: "Organization Chart",
      pageTitle: "Organization | SUMAN",
      docTitle: "Organization",
    },
  } as const;

  const currentContent = content[lang as "KOR" | "ENG"];

  // Match rnd.tsx behavior: set document title via useEffect
  useEffect(() => {
    document.title = currentContent.docTitle;
  }, [currentContent.docTitle]);

  return (
    <Layout>
      <Head>
        <title>{currentContent.pageTitle}</title>
      </Head>

      {/* Match rnd.tsx structure: big hero + breadcrumb inside main with top padding */}
      <main
        className="min-h-screen bg-white text-slate-900"
        style={{ paddingTop: "90px" }}
      >
        <HeroSection
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/images/sub_banner/company_banner.png"
        />

        <BreadcrumbSection path={currentContent.breadcrumb} />

        {/* Original content kept intact */}
        <div className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <motion.div
              className="w-full"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Enlarged ~20% by reducing side padding */}
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
        </div>

        <hr className="my-8 border-gray-200 w-full" />
      </main>
    </Layout>
  );
}
