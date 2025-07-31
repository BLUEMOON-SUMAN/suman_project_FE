import Header from "@/components/Header";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { useLangStore } from "@/stores/langStore";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } as Transition },
};

export default function OrgPage() {
  const { lang } = useLangStore();

  const heroTitle = "CI";
  const heroSubtitle = "CI";
  const breadcrumbPath = lang === "KOR" ? "회사소개 > CI" : "Company > CI";
  const pageTitle = lang === "KOR" ? "CI | 수만" : "CI | SUMAN";

  const sectionTitle = lang === "KOR" ? "Coporate Identity" : "Corporate Identity";
  const sectionDesc =
    lang === "KOR"
      ? "수만(SUMAN)의 CI는 기업의 핵심 가치인 신뢰, 기술, 정밀성을 시각적으로 표현하고 있습니다."
      : "SUMAN's CI visually represents the core corporate values of trust, technology, and precision.";

  const logoTitle = "Logo";
  const logoDesc =
    lang === "KOR"
      ? "붉은 S는 열정과 에너지, 파란 M은 기술력과 신뢰를 의미하며, 두 문자의 결합은 기술을 통해 가치를 연결하는 수만의 철학을 상징합니다."
      : "The red S symbolizes passion and energy, while the blue M represents technology and trust. The combination embodies SUMAN's philosophy of connecting value through technology.";

  const monoAlt = lang === "KOR" ? "SUMAN 흑백 로고" : "SUMAN Mono Logo";
  const colorAlt = lang === "KOR" ? "SUMAN 컬러 로고" : "SUMAN Color Logo";

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage="/images/sub_banner/company_banner.png"
      />

      <BreadcrumbSection path={breadcrumbPath} />

      <main className="content-wrapper py-24 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            className="w-full max-w-7xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Coporate Identity Section */}
            <div className="mb-44">
              <h2 className=" text-base sm:text-lg lg:text-2xl font-semibold  tracking-wide">{sectionTitle}</h2>
              <div
                className="h-2 mt-3"
                style={{
                  width: "25%",
                  background: "linear-gradient(to right, #2E3092, #ED1B23)",
                }}
              ></div>
              <p className="text-sm sm:text-base md:text-lg tracking-wide text-gray-700 mt-5">{sectionDesc}</p>
            </div>

            {/* Logo Section */}
            <div className="mb-12">
              <h3 className=" text-base sm:text-lg lg:text-2xl font-semibold  tracking-wide mb-5">{logoTitle}</h3>
              <p className="text-sm sm:text-base md:text-lg tracking-wide text-gray-700 mb-10">{logoDesc}</p>

              <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="relative w-64 h-64 flex items-center justify-center rounded-lg">
                  <Image
                    src="/images/ci.png"
                    alt={monoAlt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div className="relative w-64 h-64 flex items-center justify-center rounded-lg">
                  <Image
                    src="/images/ci_color.png"
                    alt={colorAlt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <a
                  href="/images/logo_suman.png"
                  download="SUMAN_logo.png"
                  className="absolute bottom-[-200px] right-90 tracking-wide border-2 border-gray-300 
                            bg-transparent hover:bg-gray-300 text-black text-base font-medium 
                            px-4 py-0.5 rounded-full transition"
                >
                  PNG ↓
                </a>
              </div>
            </div>

            {/* Color Code Section */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-60 mt-60 w-full">
              {/* RED */}
              <div
                className="w-100 h-50 p-5  shadow-md flex flex-col justify-between"
                style={{ backgroundColor: "#ED1B23", position: "relative" }}
              >
                <div className="flex items-center mb-2 tracking-wide">
                  <h4 className="text-white text-2xl font-medium text-left inline-block pt-1">
                    SUMAN
                    <br />
                    RED
                  </h4>
                  <div className="absolute top-[40px] left-[130px] w-62 h-0.5 bg-white"></div>
                </div>
                <div className="text-light text-right tracking-wide -mt-3">
                  <p className="text-white text-medium">PANTONE 485 C</p>
                  <p className="text-white text-medium">CMYK 0/100/100/0</p>
                  <p className="text-white text-medium">RGB 237/27/35</p>
                  <p className="text-white text-medium">HEX #ED1B23</p>
                </div>
              </div>

              {/* BLUE */}
              <div
                className="w-100 h-50 p-5 shadow-md flex flex-col justify-between"
                style={{ backgroundColor: "#2E3092", position: "relative" }}
              >
                <div className="flex items-center mb-2 tracking-wide">
                  <h4 className="text-white text-2xl font-medium text-left inline-block pt-1">
                    SUMAN
                    <br />
                    BLUE
                  </h4>
                  <div className="absolute top-[40px] left-[130px] w-62 h-0.5 bg-white"></div>
                </div>
                <div className="text-light text-right tracking-wide -mt-3">
                  <p className="text-white text-medium">PANTONE 2736 C</p>
                  <p className="text-white text-medium">CMYK 100/100/0/39</p>
                  <p className="text-white text-medium">RGB 46/48/146</p>
                  <p className="text-white text-medium">HEX #2E3092</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <hr className="my-20 border-gray-200 w-full" />
    </Layout>
  );
}
