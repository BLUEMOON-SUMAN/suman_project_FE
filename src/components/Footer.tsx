"use client";

import Image from "next/image";
import Link from "next/link";
import PopupModal from "./PopupModal";
import { PRIVACY_POLICY_TEXT, EMAIL_REFUSAL_TEXT } from "@/data/policy";
import { useState } from "react";
import { useLangStore } from "@/stores/langStore";

const menuGroups = {
  //-------------- KOR ---------------
  KOR: [
    {
      title: "회사소개",
      items: [
        { label: "CEO 인사말", href: "/company/ceo" },
        { label: "기업 비전", href: "/company/vision" },
        { label: "연혁", href: "/company/history" },
        { label: "조직도", href: "/company/org" },
        { label: "CI", href: "/company/ci" },
        { label: "오시는 길", href: "/company/location" },
        { label: "인증 현황", href: "/company/certifications" },
      ],
    },
    {
      title: "사업분야",
      items: [{ label: "기술 소개", href: "/business/service" }],
    },
    {
      title: "인재채용",
      items: [
        { label: "인재상", href: "/careers/philosophy" },
        { label: "채용공고", href: "/careers/notice" },
      ],
    },
    {
      title: "고객지원",
      items: [
        { label: "문의하기", href: "/support/contact" }],
    },
  ],

  //-------------- ENG ---------------
  ENG: [
    {
      title: "Company",
      items: [
        { label: "CEO Message", href: "/eng/company/ceo" },
        { label: "Vision", href: "/eng/company/vision" },
        { label: "History", href: "/eng/company/history" },
        { label: "Organization", href: "/eng/company/org" },
        { label: "CI", href: "/eng/company/ci" },
        { label: "Location", href: "/eng/company/location" },
        { label: "Certifications", href: "/eng/company/certifications" },
      ],
    },
    {
      title: "Business",
      items: [{ label: "Production", href: "/eng/business/service" }],
    },
    {
      title: "Careers",
      items: [
        { label: "Talent Philosophy", href: "/eng/careers/philosophy" },
        { label: "Recruit Notice", href: "/eng/careers/notice" },
      ],
    },
    {
      title: "Support",
      items: [{ label: "Contact Us", href: "/eng/support/contact" }],
    },
  ],
};

export default function Footer() {
  const [popupType, setPopupType] = useState<"privacy" | "email" | null>(null);
  const { lang } = useLangStore();
  const selectedMenu = menuGroups[lang];

  const getPopupContent = () => {
    if (popupType === "privacy") {
      return {
        title: lang === "KOR" ? "개인정보 처리방침" : "Privacy Policy",
        content: PRIVACY_POLICY_TEXT[lang],
      };
    }
    if (popupType === "email") {
      return {
        title: lang === "KOR" ? "이메일 수집거부" : "Email Collection Refusal",
        content: EMAIL_REFUSAL_TEXT[lang],
      };
    }
    return null;
  };

  const popupContent = getPopupContent();

  return (
    <footer className="bg-white text-black text-sm mt-10">
      {/* 상단 레이아웃 */}

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* 왼쪽: 로고 + 슬로건 */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex-none h-full flex items-center">
  <Link href="/">
    <Image
      src="/images/logo_suman.png"
      alt="회사 로고"
      width={80}
      height={80}
      priority
      className="cursor-pointer max-h-[55px] sm:max-h-[69px] md:max-h-[81px] w-auto"
    />
  </Link>
</div>

          {/*<p className="text-lg font-semibold leading-tight tracking-wide">
            {lang === "KOR" ? (
              <>
                패러다임을 바꾸는
                <br />
                선재산업의 글로벌 리더
              </>
            ) : (
              <>
                A Global Leader
                <br />
                Driving Paradigm Shifts in Metal Industries
              </>
            )}
          </p>*/}
        </div>

        {/* 오른쪽: 메뉴 영역 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-2/3 tracking-wide">
          {/* 메뉴 그룹 */}
          {selectedMenu.map((group, idx) => (
            <div key={idx}>
              <p className="font-semibold mb-3">{group.title}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 구분선 */}
      <div className="border-t border-gray-200" />

      {/* 하단 레이아웃 */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 tracking-wide">
        {/* 왼쪽 텍스트 */}
        <div>
          <p>
            {lang === "KOR"
              ? "㈜ SUMAN | 주소: 대전광역시 대덕구 문평서로17번길 105(문평동) | 사업자등록번호: 318-81-00161"
              : "SUMAN Co., Ltd. | Address: 105, Munpyeongseo-ro 17beon-gil, Daedeok-gu, Daejeon, Republic of Korea | Biz Reg No.: 318-81-00161"}
          </p>
          <p>
            {lang === "KOR"
              ? "대표전화 : 042-934-1517 | FAX : 042-934-1516 | E-Mail : suman20140411@suman.co.kr"
              : "Tel: +82-42-934-1517 | Fax: +82-42-934-1516 | Email: suman20140411@suman.co.kr"}
          </p>
        </div>

        {/* 우측 하단 정보 거부 관련 */}

        <div className="flex flex-wrap gap-4 text-gray-500 tracking-wide">
          <button
            onClick={() => setPopupType("privacy")}
            className="hover:underline cursor-pointer"
          >
            {lang === "KOR" ? "개인정보 처리방침" : "Privacy Policy"}
          </button>
          <button
            onClick={() => setPopupType("email")}
            className="hover:underline cursor-pointer"
          >
            {lang === "KOR" ? "이메일 수집거부" : "Email Collection Refusal"}
          </button>
        </div>
      </div>

      {popupContent && (
        <PopupModal
          title={popupContent.title}
          content={popupContent.content}
          onClose={() => setPopupType(null)}
        />
      )}
    </footer>
  );
}
