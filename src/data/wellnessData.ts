// src/data/wellnessData.ts
import * as LucideIcons from "lucide-react";

// --- Icon Mapping ---
export const iconMap = {
  dormitory: 'Home',
  commuterBus: 'BusFront',
  carpool: 'Car',
  lounge: 'Coffee',
  resort: 'Tent',
  club: 'Users',
  health: 'HeartPulse',
  insurance: 'ShieldPlus',
  award: 'Award',
  anniversary: 'Gift',
  congratulations: 'HeartHandshake',
  alumni: 'Handshake',
} as const;

export type IconKey = keyof typeof iconMap;

// --- Wellness Data Interfaces ---
export interface WellnessItem {
  title: string;
  description: string;
  iconKey: IconKey;
}

export interface WellnessSection {
  key: string;
  title: string;
  subtitle: string;
  heroImage: string;
  items: WellnessItem[];
}

export interface WellnessData {
  hero: {
    title: string;
    subtitle: string;
    path: string;
    heroImage: string;
  };
  sections: WellnessSection[];
}

export const wellnessContent: Record<string, WellnessData> = {
  KOR: {
    hero: {
      title: "복리후생",
      subtitle: "일과 생활의 균형, 즐거운 일터를 만들기 위하여 다양한 복지제도를 시행 중입니다",
      path: "회사소개 > 복리후생",
      heroImage: "/images/sub_banner/business_hero.png",
    },
    sections: [
      {
        key: "office-life",
        title: "Office Life",
        subtitle: "회사생활",
        heroImage: "/images/business/product/service_battery.png",
        items: [
          { title: "기숙사 운영", description: "원거리 거주지 지원", iconKey: "dormitory" },
          { title: "통근버스 운영", description: "오산, 동탄", iconKey: "commuterBus" },
          { title: "카풀제도", description: "카풀 이용직원 지원금 지급", iconKey: "carpool" },
          { title: "휴게실 운영", description: "안마기, 휴게실, 샤워실", iconKey: "lounge" },
        ],
      },
      {
        key: "leisure-culture-health",
        title: "Leisure / Culture / Health",
        subtitle: "여가 / 문화 / 건강",
        heroImage: "/images/business/product/service_elec.png",
        items: [
          { title: "휴양시설 운영", description: "제주도, 강원도 등", iconKey: "resort" },
          { title: "동호회 지원", description: "활동비 지원", iconKey: "club" },
          { title: "건강검진", description: "연1회 검진 가입", iconKey: "health" },
          { title: "단체보험", description: "단체 상해보험 가입", iconKey: "insurance" },
        ],
      },
    ],
  },
  ENG: {
    hero: {
      title: "EMPLOYEE WELLNESS",
      subtitle: "To create a balance between work and life, we are implementing various welfare programs.",
      path: "About Us > Employee Wellness",
      heroImage: "/images/sub_banner/business_hero.png",
    },
    sections: [
      {
        key: "office-life",
        title: "Office Life",
        subtitle: "Office Life",
        heroImage: "/images/business/product/service_battery.png",
        items: [
          { title: "Dormitory Operation", description: "Support for long-distance residents", iconKey: "dormitory" },
          { title: "Commuter Bus Operation", description: "Osan, Dongtan", iconKey: "commuterBus" },
          { title: "Carpooling System", description: "Subsidy for carpool employees", iconKey: "carpool" },
          { title: "Lounge Operation", description: "Massage chairs, lounges, showers", iconKey: "lounge" },
        ],
      },
      {
        key: "leisure-culture-health",
        title: "Leisure / Culture / Health",
        subtitle: "Leisure / Culture / Health",
        heroImage: "/images/business/product/service_elec.png",
        items: [
          { title: "Resort Facilities Operation", description: "Jeju Island, Gangwon-do, etc.", iconKey: "resort" },
          { title: "Club Support", description: "Support for activity expenses", iconKey: "club" },
          { title: "Health Checkups", description: "Annual health checkup subscription", iconKey: "health" },
          { title: "Group Insurance", description: "Group injury insurance subscription", iconKey: "insurance" },
        ],
      },
    ],
  },
};