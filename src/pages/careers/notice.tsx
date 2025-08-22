import React from "react";
import Layout from "@/components/Layout";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

const RecruitmentBoard: React.FC = () => {
  const { lang } = useLangStore();

  return (
    <Layout>
      <Head>
        <title>채용공고 | 수만</title>
      </Head>
      <HeroSection
        title="채용공고"
        subtitle="Recruit"
        backgroundImage="/images/sub_banner/careers_hero.png"
      />
      <BreadcrumbSection path="인재채용 > 채용공고" />

      {/* -------------------------------------------------------- */}
      {/*                      채용 안내 섹션                        */}
      {/* -------------------------------------------------------- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-8">
            {lang === "KOR" ? <>지원하기</> : <>Apply for a Job</>}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 사람인 카드 */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  사람인 공고 지원
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  지금 바로 사람인을 통하여 지원해 보세요
                </p>
              </div>
              <Link
                href="https://m.saramin.co.kr/job-search/company-info-view/recruit?csn=ZDVyVitYUjJKUno3Y2NmWXl6K0pWQT09&t_ref_content=generic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E5E7EB] text-gray-700 px-4 py-3 rounded-lg flex items-center justify-between text-base font-semibold"
              >
                <span className="text-xl font-bold text-gray-700">
                  saramin
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

            {/* 잡코리아 카드 */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  잡코리아 공고 지원
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  지금 바로 잡코리아을 통하여 지원해 보세요
                </p>
              </div>
              <Link
                href="https://www.jobkorea.co.kr/net/company/45215125/Recruit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E5E7EB] text-gray-700 px-4 py-3 rounded-lg flex items-center justify-between text-base font-semibold"
              >
                <span className="text-xl font-bold text-blue-600">
                  JOBKOREA
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

            {/* 인크루트 카드 */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  인크루트 공고 지원
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  지금 바로 인크루트를 통하여 지원해 보세요
                </p>
              </div>
              <Link
                href="https://www.incruit.com/company/1684692412/job/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E5E7EB] text-gray-700 px-4 py-3 rounded-lg flex items-center justify-between text-base font-semibold"
              >
                <span className="text-xl font-bold text-green-600">
                  incruit
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
    </Layout>
  );
};

export default RecruitmentBoard;