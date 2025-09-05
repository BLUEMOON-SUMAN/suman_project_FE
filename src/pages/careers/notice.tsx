import React from "react";
import Layout from "@/components/Layout";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

const RecruitmentBoard: React.FC = () => {
  const lang = useLangStore((state) => state.lang) || "KOR";

  // === trim hero 1cm atas & bawah (≈ 37.8px) — sama seperti ceo.tsx ===
  const CM_TO_PX = 37.8;
  const HERO_TRIM_PX = Math.round(CM_TO_PX);

  return (
    <Layout>
      <Head>
        <title>{lang === "KOR" ? "채용공고 | 수만" : "Recruit Notice | SUMAN"}</title>
      </Head>

      {/* ===================== UPDATED: wrap with <main> like rnd.tsx ===================== */}
      <main className="min-h-screen bg-white text-slate-900" style={{ paddingTop: "90px" }}>
        {/* ===================== UPDATED: Hero same trimming style as ceo.tsx ============== */}
        <div style={{ marginTop: `-${HERO_TRIM_PX}px`, marginBottom: `-${HERO_TRIM_PX}px` }}>
          <HeroSection
            title={lang === "KOR" ? "채용공고" : "Recruit Notice"}
            backgroundImage="/images/sub_banner/careers_hero.png"
          />
        </div>

        {/* ===================== breadcrumb wrapper (tidak diubah) ==================== */}
        <div className="relative z-30">
          <BreadcrumbSection
            path={
              lang === "KOR"
                ? "인재채용 > 채용공고"
                : "Recruitment > Recruit Notice"
            }
          />
        </div>

        {/* 🔽 Platform Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-left">
                {lang === "KOR" ? "외부공고" : "External Recruitment Notice"}
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

          <hr className="my-12 border-navy-200 w-full" />

          <DocumentDownloadBanner />
        </div>

        <hr className="my-6 border-gray-200 w-full" />
      </main>
      {/* ===================== END UPDATED ================================================ */}
    </Layout>
  );
};

// 📎 Download Banner Section (KOR/ENG Support)
const RecruitmentDownloadBanner: React.FC = () => {
  const lang = useLangStore((state) => state.lang) || "KOR";

  const label =
    lang === "KOR"
      ? " [TEST][채용공고]PLC 제어 부문 신입 및 경력직 채용(게시일 2025.00.00)"
      : " [TEST][Recruitment Notice] Entry-Level and Experienced Positions in PLC Control (Posted on 2025.00.00)";

  return (
    <section className="bg-white mt-2 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Judul di baris sendiri */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-left">
          {lang === "KOR" ? "내부공고" : "Internal Recruitment Notice"}
        </h2>

        {/* Baris link di bawah judul */}
        <div className="flex items-start gap-2">
          <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#1D3762]" />
          <a
            href="/images/PLC제어 부문 신입 및 경력직 채용 공고문_2025.00.00.docx"
            download
            className="text-[#1D3762] text-[18px] hover:underline leading-tight"
          >
            {label}
          </a>
        </div>
      </div>
    </section>
  );
};

// 📎 Download Banner Section (KOR/ENG Support)
const DocumentDownloadBanner: React.FC = () => {
  const lang = useLangStore((state) => state.lang) || "KOR";

  const label1 =
    lang === "KOR"
      ? " 입사지원서 양식 다운로드 (Word)"
      : " Download Application Form (Word)";
  const label2 =
    lang === "KOR"
      ? " 입사지원서 양식 다운로드 (HWP)"
      : " Download Application Form (HWP)";

  return (
    <section className="bg-white mt-2 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Judul di baris sendiri */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-left">
          {lang === "KOR" ? "자료실" : "Related Document"}
        </h2>

        {/* Baris link di bawah judul */}
        <div className="flex items-start gap-2">
          <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#1D3762]" />
          <a
            href="/images/입사지원서 양식 다운로드(Word).docx"
            download
            className="text-[#1D3762] text-[18px] hover:underline leading-tight"
          >
            {label1}
          </a>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#1D3762]" />
          <a
            href="/images/입사지원서 양식 다운로드(HWP).docx"
            download
            className="text-[#1D3762] text-[18px] hover:underline leading-tight"
          >
            {label2}
          </a>
        </div>
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
