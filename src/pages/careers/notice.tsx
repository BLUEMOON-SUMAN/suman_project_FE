import React from "react";
import Layout from "@/components/Layout";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

const RecruitmentBoard: React.FC = () => {
  const lang = useLangStore((state) => state.lang) || "KOR";

  return (
    <Layout>
      <Head>
        <title>{lang === "KOR" ? "채용공고 | 수만" : "Recruit Notice | SUMAN"}</title>
      </Head>

      <HeroSection
        title={lang === "KOR" ? "채용공고" : "Recruit Notice"}
        subtitle={lang === "KOR" ? "인재채용" : "Recruit"}
        backgroundImage="/images/sub_banner/careers_hero.png"
      />

      <BreadcrumbSection
        path={
          lang === "KOR"
            ? "인재채용 > 채용공고"
            : "Recruitment > Recruit Notice"
        }
      />
      {/* ✅ Recruitment Notice Banner (full width + downloadable) */}
      <RecruitmentNotice />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Job Platform Cards */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
              {lang === "KOR" ? "채용공고" : "Recruit Notice"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <RecruitmentCard
                title="Saramin"
                link="https://m.saramin.co.kr/job-search/company-info-view/recruit?csn=ZDVyVitYUjJKUno3Y2NmWXl6K0pWQT09&t_ref_content=generic"
              />
              <RecruitmentCard
                title="JOB KOREA"
                link="https://www.jobkorea.co.kr/net/company/45215125/Recruit"
                highlight="blue-600"
              />
              <RecruitmentCard
                title="고용24"
                link="https://www.work24.go.kr"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-8 border-gray-200 w-full" />
      </div>


    </Layout>
  );
};

// 💡 Recruitment Card Component
const RecruitmentCard: React.FC<{
  title: string;
  link: string;
  highlight?: string;
}> = ({ title, link, highlight = "gray-800" }) => {
  const lang = useLangStore((state) => state.lang) || "KOR";

  return (
    <div className="flex flex-col bg-[#0A1633] rounded-xl p-6 md:p-8 text-white min-h-[220px]">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-6">
          {lang === "KOR" ? "지금 바로 지원해 보세요" : "Apply now"}
        </p>
      </div>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-lg flex items-center justify-between font-semibold hover:bg-gray-100 transition-colors"
      >
        <span className={`text-xl font-bold text-${highlight}`}>{title}</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </Link>
    </div>
  );
};

// 📎 Download Banner Component
const RecruitmentNotice: React.FC = () => {
  const lang = useLangStore((state) => state.lang) || "KOR";

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-none border-t border-gray-300 mx-auto">
        <div className="w-full bg-white border border-gray-200 shadow-sm text-center py-10">
          <h2 className="text-base md:text-lg font-semibold text-gray-700 tracking-wide mb-4">
            {lang === "KOR" ? "채용공고 다운로드" : "Download Recruitment Notice"}
          </h2>

          {/* Full-width underline */}
          <div className="w-full border-t-2 border-[#1D3762] mb-6 mx-auto" />

          <a
            href="\public\images\careers\philosophy\PLC제어 부문 신입 및 경력직 채용 공고문_2025.00.00.docx"
            download="PLC제어 부문 신입 및 경력직 채용 공고문_2025.00.00.docx"
            className="text-2xl md:text-3xl font-bold text-[#1D3762] hover:underline transition duration-150"
          >
            {lang === "KOR"
              ? "[채용공고]PLC제어 부문 신입 및 경력직 채용 공고문"
              : "[Recruitment Notice] PLC Control Division Entry and Experienced Recruitment Notice"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentBoard;
