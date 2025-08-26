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

      {/* ✅ Wrapping div starts here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 📢 채용공고 안내 박스 */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-12">
          <div className="bg-[#1A263A] text-white px-6 py-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2a4 4 0 014-4h4M9 5h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>
            <span className="text-base font-semibold">{lang === "KOR" ? "공지사항" : "Notice"}</span>
          </div>

          <div className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-1 bg-red-500 rounded-full h-16 mt-1" />

              <div className="flex-1">
                <div className="flex items-center gap-1 text-red-500 text-sm font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                  {lang === "KOR" ? "신규 채용공고" : "New Recruitment"}
                </div>

                <div className="text-gray-800 text-base font-medium mb-2">
                  PLC제어 부문 신입 및 경력직 채용공고
                </div>

                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10m-6 4h6m-6 4h6M3 9h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      />
                    </svg>
                    2025.01.15
                  </div>
                  <span className="text-gray-400">•</span>
                  <span>{lang === "KOR" ? "SUMAN 인사팀" : "HR Team"}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              {lang === "KOR"
                ? "상세한 채용 정보는 첨부파일을 확인해주세요"
                : "Please check the attachment for detailed information"}
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="/images/careers/philosophy/PLC제어 부문 신입 및 경력직 채용 공고문_2025.00.00.docx"
                download="SUMAN PLC제어 부문 신입 및 경력직 채용 공고문.docx"
                className="bg-[#1A263A] hover:bg-[#2C3B57] text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v16h16V4H4zm8 8v4m0 0l-2-2m2 2l2-2"
                  />
                </svg>
                {lang === "KOR" ? "채용공고 다운로드" : "Download"}
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Saramin / JobKorea / Work24 cards remain unchanged */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
              {lang === "KOR" ? "채용공고" : "Recruit Notice"}
            </h2>

            {/* 🔽 Your 3 recruitment cards here (no change needed) */}
            {/* ... */}
          </div>
        </section>

        <hr className="my-8 border-gray-200 w-full" />
      </div>
    </Layout>
  );
};

export default RecruitmentBoard;
