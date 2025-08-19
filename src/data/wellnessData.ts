// src/data/wellnessData.ts
import * as LucideIcons from "lucide-react";

// --- Icon Mapping ---
export const iconMap = {
  dormitory: 'Home',
  utensils: 'Utensils', // New icon key for "식사제공"
  lounge: 'Coffee',
  dumbbell: 'Dumbbell', // New icon key for "헬스장"
  award: 'Award',
  commuterBus: 'BusFront',
  carpool: 'Car',
  resort: 'Tent',
  club: 'Users',
  health: 'HeartPulse',
  insurance: 'ShieldPlus',
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
          { title: "기숙사", description: "원거리 거주자 지원", iconKey: "dormitory" },
          { title: "식사제공", description: "점심식사 제공", iconKey: "utensils" },
          { title: "휴게시설", description: "헬스장, 휴게실, 샤워실", iconKey: "dumbbell" },
          { title: "상여금", description: "명절 상여 지급", iconKey: "award" },
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
          { title: "Dormitory", description: "Support for long-distance residents", iconKey: "dormitory" },
          { title: "Meal Provision", description: "Lunch meal provided", iconKey: "utensils" },
          { title: "Recreation Facilities", description: "Gym, lounges, showers", iconKey: "dumbbell" },
          { title: "Bonus", description: "Holiday bonus provided", iconKey: "award" },
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