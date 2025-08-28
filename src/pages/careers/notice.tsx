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
        //subtitle={lang === "KOR" ? "인재채용" : "Recruit"}
        backgroundImage="/images/sub_banner/careers_hero.png"
      />

      <BreadcrumbSection
        path={
          lang === "KOR"
            ? "인재채용 > 채용공고"
            : "Recruitment > Recruit Notice"
        }
      />

      {/* 🔽 Platform Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <hr className="my-12 border-navy-200 w-full" />
        {/* ✅ Download Link Section RIGHT AFTER 3 Cards */}
        <RecruitmentDownloadBanner />
      </div>
      <hr className="my-6 border-gray-200 w-full" />
    </Layout>
  );
};

// 📎 Download Banner Section (KOR/ENG Support)
const RecruitmentDownloadBanner: React.FC = () => {
  const lang = useLangStore((state) => state.lang) || "KOR";

  const label =
    lang === "KOR"
      ? " [채용공고]PLC 제어 부문 신입 및 경력직 채용(게시일 2025.00.00)"
      : " [Recruitment Notice] Entry-Level and Experienced Positions in PLC Control (Posted on 2025.00.00)";

  return (
    <section className="bg-white mt-2 px-4">
      <div className="max-w-7xl mx-auto">
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#1D3762]" />
            <a
              href="/images/PLC제어 부문 신입 및 경력직 채용 공고문_2025.00.00.docx"
              download
              className="text-[#1D3762] text-[18px] hover:underline"
            >
              {label}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

// 💼 Recruitment Card Component
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

export default RecruitmentBoard;
