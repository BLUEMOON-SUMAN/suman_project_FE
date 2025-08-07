// contact.tsx
import { useState } from "react";
import { postInquiry } from "@/lib/api/contact";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import { useLangStore } from "@/stores/langStore";

export default function InquiryFormPage() {
  const { lang } = useLangStore();
  const [form, setForm] = useState({
    name: "",
    affiliation: "",
    phone: "",
    email: "",
    contect: "",
  });

  // 백엔드 슬립 깨우기 요청
  useEffect(() => {
    fetch("https://suman-project-31hc.onrender.com/api/")
      .then(() => console.log("Render 서버 깨우기 완료"))
      .catch(() => console.warn("Render 서버 깨우기 실패"));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 문의 등록
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postInquiry(form);
      alert("문의가 등록되었습니다.");
      setForm({
        name: "",
        affiliation: "",
        phone: "",
        email: "",
        contect: "",
      });
    } catch (error) {
      alert("등록 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  const fadeInVariants = {
    // ci.tsx에서 가져온 애니메이션 Variants
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  return (
    <>
      <Head>
        <title>고객 문의 | 수만</title>
      </Head>
      <Layout>
        <HeroSection
          title="고객 문의"
          subtitle="Customer Inquiry"
          backgroundImage="/images/sub_banner/support_banner.png"
        />

        <BreadcrumbSection path="고객지원 > 문의하기" />

        <div className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <section className="max-w-3xl mx-auto">
                {" "}
                {/* 기존 InquiryForm의 section 태그 */}
                <h2 className="text-3xl font-bold mb-12 text-center">
                  {lang === "KOR" ? " 고객 문의" : "Client Contact Form"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                  {/* 이름 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      {lang === "KOR" ? " 이름" : "Name"}
                      <span className="text-blue-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 소속 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      {lang === "KOR" ? "소속" : "Affiliation"}
                      <span className="text-blue-500">*</span>
                    </label>
                    <input
                      name="affiliation"
                      value={form.affiliation}
                      onChange={handleChange}
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 연락처 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      {lang === "KOR" ? "연략처" : "Affiliation"}
                      <span className="text-blue-500">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="예: 010-1234-5678"
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 이메일 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      E-mail<span className="text-blue-500">*</span>
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 문의내용 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      {lang === "KOR" ? "문의내용" : "contact"}
                      <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      name="contect" // 오타 주의: 'contect'
                      value={form.contect}
                      onChange={handleChange}
                      required
                      className="flex-1 border border-gray-300 px-3 py-2 min-h-[150px]"
                    />
                  </div>
                  {/* 제출 버튼 */}
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-gray-500 text-white px-6 py-2 hover:bg-gray-700 transition cursor-pointer"
                    >
                      {lang === "KOR" ? "제출" : "POST"}
                    </button>
                  </div>
                </form>
              </section>
            </motion.div>
          </div>
        </div>
        <hr className="my-8 border-gray-200 w-full" />
      </Layout>
    </>
  );
}
