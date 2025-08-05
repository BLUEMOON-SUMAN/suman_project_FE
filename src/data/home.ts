// index.tsx에 들어가는 문구

export const homeContentKor = {
//--------------------------------------------
//                   KOR
//--------------------------------------------  
export default function GuidePage() {
  return (
    <div style={{ position: 'relative', backgroundColor: '#000', height: '100vh', padding: '2rem' }}>
      
      {/* ✅ Announcement Box */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontWeight: 'bold',
        fontSize: '18px',
        color: '#333',
        zIndex: 999
      }}>
        📢 리뉴얼 중 입니다
      </div>

      {/* ✅ Main Banner Content */}
      <h1 style={{ color: 'white' }}> TEST 정밀한 기술이 만드는 내일의 기업</h1>
      <p style={{ color: 'white' }}>
        (주) 수만은 정밀 제조 분야의 깊은 know-how를 바탕으로, 고객 맞춤형 솔루션을 제공합니다.
      </p>
    </div>
  );
}
    section1Text: {
      title: '정밀한 기술이 만드는\n내일의 기업',
      subtitle: '(주) 수만은 정밀 제조 분야의 깊은 know-how를 바탕으로, 고객 맞춤형 솔루션을 제공합니다.',
    },
    
    section2: {
      title: '산업을 움직이는 기술',
      description:
        '수만은 2차전지 생산 장비 및 신뢰성 평가 시스템을 설계 및 제작하는 전문 기업입니다.\n대전 R&D 센터에서 축적한 기술력과 생산 인프라를 기반으로, 고객 맞춤형 고신뢰성 솔루션을 제공합니다.',
      bgImage: '/images/main/main_tech.png',
      buttonLabel: '기업 비전 바로가기 →',
      keywords: ["ENJOY", "NEO", "INTENSELY", "QUICKLY"],
      translations: ["즐겁게", "새롭게", "치열하게", "빠르게"]
    },

    section3: {
      title: '정밀 부품, 모듈, 자동화 장비까지',
      subtitle: '미래 산업에 필요한 핵심 솔루션을 제조합니다',
      cards: [
        {
          title: '이차전지',
          subtitle: 'Secondary Battery',
          description: '고정밀 부품 / 모듈 설계',
          img: '/images/main/solution/main_secondary_battery.png',
        },
        {
          title: '전기·전자',
          subtitle: 'Electrical & Electronics',
          description: '고정밀 부품 / 맞춤형 설비제작기술',
          img: '/images/main/solution/main_electronics.png',
        },
        {
          title: '반도체',
          subtitle: 'Semiconductor',
          description: '고정밀 부품 / 솔루션 서비스 기술 융합',
          img: '/images/main/solution/main_semiconductor.png',
        },
        {
          title: '자동차',
          subtitle: 'Mobility',
          description: '고정밀 가공기술',
          img: '/images/main/solution/main_mobility.png',
        },
      ],
    },

  sectionCertifications: {
    title: '정부기관의 인증을 비롯해\nISO 품질·환경·안전경영 시스템을 모두 구축하여\n고객 중심의 고신뢰 생산 체계를 갖추고 있습니다.',
    tags: ['Technology Certification', 'Quality Assurance'],
    certifications: [
      { label: 'ISO 9001', img: '/images/Certifications/ISO_9001.png'},
      { label: 'ISO 14001', img: '/images/Certifications/ISO_14001.png' },
      { label: 'ISO 45001', img: '/images/Certifications/ISO_45001.png' },
      { label: '벤처기업확인서', img: '/images/Certifications/main_venture.png' },
      { label: '소·부·장 전문기업', img: '/images/Certifications/소재부품장비 전문기업확인서.png' },
      { label: '기업부설연구소', img: '/images/Certifications/기업부설연구소 인정서.png' },
      { label: '뿌리기업확인서', img: null },
      { label: '중소기업확인서', img: null },

      { label: '피스톤링 제조기술', img: '/images/Certifications/특허_피스톤제조.png' },
      { label: '전력 관리 시스템', img: '/images/Certifications/특허_전력관리시스템.png' },
      { label: '전선 가공장치', img: '/images/Certifications/특허_전선가공장치.png' },
      { label: '스웰링 측정용 지그', img: '/images/Certifications/특허_스웰링측정용지그.png' },
      { label: '주물 성형 분리장치', img: '/images/Certifications/특허_주물성형분리장치.png' },
    ],
    legal: '지식재산권·특허 등록 "피스톤링 제조장치 및 제조 방법"외 6건 보유'
   },

  footer_banner: [
    '/images/main/main_banner.png'
  ],
};
//--------------------------------------------
//                   ENG
//--------------------------------------------
export const homeContentEng = {
    
    section1Text: {
      title: 'Tomorrow company that creates precision technology',
      subtitle: 'With deep know-how in precision manufacturing, SUMAN provides customized solutions.',
    },
    section2: {
      title: 'Technology that Drives Industry',
      description:
        'SUMAN is a specialized company that designs and manufactures secondary battery production equipment and reliability evaluation systems.\nBased on the technological expertise and production infrastructure accumulated at our Daejeon R&D center, we provide customized, high-reliability solutions.',
      bgImage: '/images/main/main_tech.png',
      buttonLabel: 'Go to Vision →',
      keywords: ["ENJOY", "NEO", "INTENSELY", "QUICKLY"],
      translations: ["Enjoyably", "Newly", "Fiercely", "Quickly"]
    },

    section3: {
      title: 'From Precision Parts to Automation Systems',
      subtitle: 'We manufacture essential solutions for future industries',
      cards: [
        {
          title: 'Secondary Battery',
          subtitle: 'Secondary Battery',
          description: 'Precision parts / module design',
          img: '/images/main/solution/main_secondary_battery.png',
        },
        {
          title: 'Electrical & Electronics',
          subtitle: 'Electrical & Electronics',
          description: 'Precision parts / customized equipment manufacturing',
          img: '/images/main/solution/main_electronics.png',
        },
        {
          title: 'Semiconductor',
          subtitle: 'Semiconductor',
          description: 'Fusion of precision parts / solution service technology',
          img: '/images/main/solution/main_semiconductor.png',
        },
        {
          title: 'Mobility',
          subtitle: 'Mobility',
          description: 'Precision machining technology',
          img: '/images/main/solution/main_mobility.png',
        },
      ],
    },

    sectionCertifications: {
      title: 'We are certified by government institutions and have established ISO-based quality, environment, and safety management systems.',
      tags: ['Technology Certification', 'Quality Assurance'],
      certifications: [
        { label: 'ISO 9001', img: '/images/Certifications/ISO_9001.png'},
        { label: 'ISO 14001', img: '/images/Certifications/ISO_14001.png' },
        { label: 'ISO 45001', img: '/images/Certifications/ISO_45001.png' },
        { label: 'Venture Company Certificate', img: '/images/Certifications/main_venture.png' },
        { label: 'Materials & Parts Specialist', img: '/images/Certifications/소재부품장비 전문기업확인서.png'},
        { label: 'Root Company Certificate', img: '/images/Certifications/기업부설연구소 인정서.png' },
        { label: 'SME Certificate', img: null },
        { label: 'Quality/Environment/Safety', img: null },

        { label: 'Piston Ring Manufacturing Technology', img: '/images/Certifications/특허_피스톤제조.png' },
        { label: 'Power Management System', img: '/images/Certifications/특허_전력관리시스템.png' },
        { label: 'Wire Processing Device', img: '/images/Certifications/특허_전선가공장치.png' },
        { label: 'Swelling Measurement Jig', img: '/images/Certifications/특허_스웰링측정용지그.png' },
        { label: 'Casting Mold Separation Device', img: '/images/Certifications/특허_주물성형분리장치.png' },
      ],
      legal: 'Holding 6 intellectual property rights including-Piston Ring Manufacturing Device and Method',
    },
    footer_banner: [
      '/images/main/main_banner.png'
    ],
};


