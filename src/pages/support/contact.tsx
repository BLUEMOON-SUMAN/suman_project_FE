import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLangStore } from "@/stores/langStore";

export default function InquiryFormPage() {
  const { lang } = useLangStore();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const // Fixed the ease type issue
      },
    },
  };

  const contactInfo = [
    { label: lang === "KOR" ? "이름    " : "Name", value: "" },
    { label: lang === "KOR" ? "소속    " : "Affiliation", value: "" },
    { label: lang === "KOR" ? "연락처  " : "Phone", value: "" },
    { label: "E-mail ", value: "" },
    { label: lang === "KOR" ? "문의부서" : "Department", value: "" },
    { label: lang === "KOR" ? "문의내용" : "Inquiry Content", value: "" },
  ];

  return (
    <>
      <Head>
        <title>{lang === "KOR" ? "고객 문의 | 수만" : "Customer Inquiry | SUMAN"}</title>
      </Head>
      <Layout>
        <HeroSection
          title={lang === "KOR" ? "고객 문의" : "Customer Inquiry"}
          subtitle={lang === "KOR" ? "Customer Inquiry" : "Contact Us"}
          backgroundImage="/images/sub_banner/support_banner.png"
        />

        <BreadcrumbSection 
          path={lang === "KOR" ? "고객지원 > 문의하기" : "Support > Inquiry"} 
        />

        <div className="content-wrapper py-12 md:py-20 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-100"
            >
              <section className="w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
                  {lang === "KOR" ? "문의하기" : "Inquiry"}
                </h2>
                
                <div className="mb-10 p-5 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-base md:text-lg text-gray-700 text-center">
                    {lang === "KOR" 
                      ? "아래의 내용을 기재하여 ooo@suman.co.kr로 문의 주시면 신속하게 답변드리도록 하겠습니다." 
                      : "Please include the following information in your email to ooo@suman.co.kr and we will respond promptly."}
                  </p>
                </div>
                
                <div className="space-y-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row border-b border-gray-200 pb-4">
                      <div className="w-full md:w-40 font-semibold text-gray-800 text-lg mb-1 md:mb-0">
                        {item.label}
                        <span className="text-blue-500 ml-1">:</span>
                      </div>
                      <div className="flex-1 text-gray-600">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <a 
                    href="mailto:ooo@suman.co.kr" 
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {lang === "KOR" ? "이메일 보내기" : "Send Email"}
                  </a>
                  
                  <p className="mt-4 text-gray-500 text-sm">
                    ooo@suman.co.kr
                  </p>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200 w-full" />
      </Layout>
    </>
  );
}