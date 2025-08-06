import React, { useState, useEffect } from "react";
import { fetchRecruitments, Recruitment, ApiError } from "@/lib/api/recruit";
import Layout from "@/components/Layout";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

const RecruitmentBoard: React.FC = () => {
  const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Recruitment | null>(null);
  const { lang } = useLangStore();

  // 백엔드 슬립 깨우기 요청
  useEffect(() => {
  fetch("https://suman-project-cap5.onrender.com/api/")
    .then(() => console.log("Render 서버 깨우기 완료"))
    .catch(() => console.warn("Render 서버 깨우기 실패"));
  }, []);

  // 채용공고 불러오기 요청
  useEffect(() => {
    const loadRecruitments = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchRecruitments();
        setRecruitments(data);
      } catch (err) {
        const apiError = err as ApiError;
        setError(apiError.message);
      } finally {
        setLoading(false);
      }
    };

    loadRecruitments();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\./g, "/")
      .replace(/ /g, "");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">불러오는 중입니다...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

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
      {/*                      채용 공고 섹션                        */}
      {/* -------------------------------------------------------- */}
      <div className="min-h-screen bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {lang === "KOR" ? <>채용공고</> : <>Job Posting</>}
            </h1>

            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 w-16">
                    번호
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                    제목
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 w-24">
                    작성자
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 w-32">
                    작성일
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recruitments.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      등록된 채용공고가 없습니다.
                    </td>
                  </tr>
                ) : (
                  recruitments.map((recruitment, index) => (
                    <tr key={recruitment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {recruitments.length - index}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => setSelected(recruitment)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                          >
                            {recruitment.title}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">
                        관리자
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">
                        {formatDate(recruitment.posted_date)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* -------------------------------------------------------- */}
          {/*                      채용 안내 섹션                        */}
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
        </div>

        {/* 팝업(모달) 영역 */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-11/12 max-w-2xl p-6 shadow-xl relative">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {selected.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {formatDate(selected.posted_date)} · 관리자 작성
              </p>
              <div className="text-gray-800 whitespace-pre-wrap text-sm mb-6">
                {selected.description || "본문 내용이 없습니다."}
              </div>
              <div className="text-right">
                <button
                  onClick={() => setSelected(null)}
                  className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
};

export default RecruitmentBoard;
