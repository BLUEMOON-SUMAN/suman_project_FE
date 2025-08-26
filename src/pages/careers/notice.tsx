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
        // REMOVE the className prop since it's not accepted by HeroSection
      />

      <BreadcrumbSection
        path={
          lang === "KOR"
            ? "인재채용 > 채용공고"
            : "Recruitment > Recruit Notice"
        }
      />

      {/* 채용 안내 섹션 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Notice Board (Static) */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {lang === "KOR" ? "공지사항" : "Notice Board"}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
            <li>{lang === "KOR" ? "2025년 상반기 신입/경력 채용 안내" : "2025 First Half Recruitment Information"}</li>
            <li>{lang === "KOR" ? "지원 마감일: 3월 31일" : "Application Deadline: March 31"}</li>
            <li>{lang === "KOR" ? "온라인 지원만 가능합니다" : "Only online applications are accepted"}</li>
          </ul>
        </div>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
              {lang === "KOR" ? "채용공고" : "Recruit Notice"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 사람인 카드 */}
              <div className="flex flex-col bg-[#0A1633] rounded-xl p-6 md:p-8 text-white min-h-[220px]">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">
                    {lang === "KOR" ? "Saramin" : "Saramin"}
                  </h3>
                  <p className="text-sm text-gray-300 mb-6">
                    {lang === "KOR" ? "지금 바로 지원해 보세요" : "Apply now"}
                  </p>
                </div>
                <Link
                  href="https://m.saramin.co.kr/job-search/company-info-view/recruit?csn=ZDVyVitYUjJKUno3Y2NmWXl6K0pWQT09&t_ref_content=generic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-lg flex items-center justify-between font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl font-bold text-gray-800">Saramin</span>
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

              {/* 잡코리아 카드 */}
              <div className="flex flex-col bg-[#0A1633] rounded-xl p-6 md:p-8 text-white min-h-[220px]">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">
                    {lang === "KOR" ? "JOB KOREA" : "JOB KOREA"}
                  </h3>
                  <p className="text-sm text-gray-300 mb-6">
                    {lang === "KOR" ? "지금 바로 지원해 보세요" : "Apply now"}
                  </p>
                </div>
                <Link
                  href="https://www.jobkorea.co.kr/net/company/45215125/Recruit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-lg flex items-center justify-between font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl font-bold text-blue-600">JOBKOREA</span>
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

              {/* 고용24 카드 */}
              <div className="flex flex-col bg-[#0A1633] rounded-xl p-6 md:p-8 text-white min-h-[220px]">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">
                    {lang === "KOR" ? "고용24" : "Work24"}
                  </h3>
                  <p className="text-sm text-gray-300 mb-6">
                    {lang === "KOR" ? "지금 바로 지원해 보세요" : "Apply now"}
                  </p>
                </div>
                <Link
                  href="https://www.work24.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-lg flex items-center justify-between font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl font-bold flex items-center gap-2">
                    {lang === "KOR" ? "고용24" : "Work24"}
                  </span>
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
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200 w-full" />
      </div>
      {/* 🔧 FIX: close the wrapper div that starts above (was missing) */}
    </Layout>
  );
};

export default RecruitmentBoard;
