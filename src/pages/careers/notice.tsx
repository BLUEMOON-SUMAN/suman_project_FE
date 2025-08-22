import React, { useState } from "react";
import Layout from "@/components/Layout";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

// Tipe data atau fungsi dari backend tidak lagi dibutuhkan
// import { fetchRecruitments, Recruitment, ApiError } from "@/lib/api/recruit";

const RecruitmentBoard: React.FC = () => {
  // Semua state yang berhubungan dengan data dari backend dihapus
  // const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  // const [selected, setSelected] = useState<Recruitment | null>(null);
  const { lang } = useLangStore();

  // Semua useEffect yang berhubungan dengan backend dihapus
  // useEffect(() => { ... }, []);
  // useEffect(() => { ... }, []);

  // Fungsi formatDate tidak lagi digunakan karena tidak ada data tanggal dari backend
  // const formatDate = (dateString: string) => { ... };

  // Bagian loading dan error dihapus karena tidak lagi mengambil data dari backend
  // if (loading) { ... }
  // if (error) { ... }
  
  // Karena tidak ada data lowongan yang diambil,
  // bagian "채용 공고 섹션" (Recruitment Postings Section) dihapus.
  // Hanya bagian "채용 안내 섹션" (Recruitment Information Section) yang berisi
  // tautan eksternal yang dipertahankan.

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
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {lang === "KOR" ? <>지원하기</> : <>Apply for a Job</>}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 사람인 카드 */}
          <div className="bg-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-700">
                  saramin
                </span>
                <div className="w-2 h-2 bg-blue-500 rounded-full ml-1"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                사람인 공고 지원
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                지금 바로 사람인을 통하여 지원해 보세요!
              </p>
            </div>
            <Link
              href="https://m.saramin.co.kr/job-search/company-info-view/recruit?csn=ZDVyVitYUjJKUno3Y2NmWXl6K0pWQT09&t_ref_content=generic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center"
            >
              사람인 바로가기
              <svg
                className="w-4 h-4 ml-2"
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
          <div className="bg-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <div className="mb-2">
                <span className="text-2xl font-bold text-blue-600">
                  JOBKOREA
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                잡코리아 공고 지원
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                지금 바로 잡코리아을 통하여 지원해 보세요!
              </p>
            </div>
            <Link
              href="https://www.jobkorea.co.kr/net/company/45215125/Recruit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center"
            >
              잡코리아 바로가기
              <svg
                className="w-4 h-4 ml-2"
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
          <div className="bg-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <div className="mb-2">
                <span className="text-2xl font-bold text-green-600">
                  incruit
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                인크루트 공고 지원
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                지금 바로 인크루트를 통하여 지원해 보세요!
              </p>
            </div>
            <Link
              href="https://www.incruit.com/company/1684692412/job/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center"
            >
              인크루트 바로가기
              <svg
                className="w-4 h-4 ml-2"
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
      
      {/* Bagian pop-up (modal) dihapus karena tidak ada lowongan yang bisa dipilih */}
      {/* {selected && ( ... )} */}
    
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
};

export default RecruitmentBoard;