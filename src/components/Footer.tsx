"use client";

import Image from "next/image";
import Link from "next/link";
import PopupModal from "./PopupModal";
import { PRIVACY_POLICY_TEXT, EMAIL_REFUSAL_TEXT } from "@/data/policy";
import { useState } from "react";
import { useLangStore } from "@/stores/langStore";

export default function Footer() {
  const [popupType, setPopupType] = useState<"privacy" | "email" | null>(null);
  const { lang } = useLangStore();

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
    <footer className="bg-white text-black text-sm">
      {/* Container utama dengan tata letak minimalis */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 tracking-wide">
        {/* Kiri: Informasi kontak */}
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

        {/* Kanan: Tautan kebijakan */}
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

      {/* Popup Modal */}
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