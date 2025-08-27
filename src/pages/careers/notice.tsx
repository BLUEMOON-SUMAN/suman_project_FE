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

      {/* ✅ RecruitmentNotice moved here — still inside <Layout> */}
      <RecruitmentNotice />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Static Notice */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {lang === "KOR" ? "공지사항" : "Notice Board"}
          </h3>
          <div className="flex justify-end mt-4">
            <a
              href="/images/careers/philosophy/PLC제어 부문 신입 및 경력직 채용 공고문_2025.00.00.docx"
              download="SUMAN PLC제어 부문 신입 및 경력직 채용 공고문.docx"
              className="text-sm sm:text-base font-medium bg-white text-black px-3 py-0.3 rounded-full border-2 border-gray-300 
                hover:bg-gray-300 hover:text-black transition duration-200 tracking-wide"
            >
              RECRUITMENT NOTICE ↓
            </a>
          </div>
        </div>

        {/* Job Platform Cards */}
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

        <hr className="my-8 border-gray-200 w-full" />
      </div>
    </Layout>
  );
};

const RecruitmentNotice: React.FC = () => {
  const lang = useLangStore((state) => state.lang) || "KOR";
  const fileName = "SUMAN PLC제어 부문 신입 및 경력직 채용 공고문.docx";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "#";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-navy-100">
        <div className="bg-gradient-to-r from-navy-600 to-navy-700 px-8 py-6">
          <h1 className="text-2xl font-semibold text-white text-center">
            {lang === "KOR" ? "대학공지" : "University Notice"}
          </h1>
        </div>

        <div className="p-8">
          <div className="w-20 h-1 bg-gradient-to-r from-navy-500 to-navy-600 mx-auto mb-8 rounded-full" />

          <div className="text-center">
            <button
              onClick={handleDownload}
              className="group inline-block text-navy-700 hover:text-navy-900 transition-all duration-300 cursor-pointer p-4 rounded-lg hover:bg-navy-50 border-2 border-transparent hover:border-navy-200"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-navy-500 rounded-full group-hover:animate-pulse" />
                <span className="text-sm font-medium text-navy-500 uppercase tracking-wide">
                  {lang === "KOR"
                    ? "채용공고 다운로드"
                    : "Download Recruitment Notice"}
                </span>
                <div className="w-2 h-2 bg-navy-500 rounded-full group-hover:animate-pulse" />
              </div>
              <div className="text-lg font-medium group-hover:underline decoration-navy-500 decoration-2 underline-offset-4">
                {lang === "KOR"
                  ? "SUMAN PLC제어 부문 신입 및 경력직 채용 공고문"
                  : "SUMAN PLC Control New & Experienced Recruitment Notice"}
              </div>
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-navy-300 rounded-full" />
              <div className="w-3 h-3 bg-navy-500 rounded-full" />
              <div className="w-3 h-3 bg-navy-700 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
