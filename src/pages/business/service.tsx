import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowLeft, Users, FileText, Settings, Package, Truck, RotateCcw, XCircle } from 'lucide-react'

export default function App() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);

  // Mock data for equipment
  const equipmentList = [
    { name: "CNC 머시닝센터", image: null },
    { name: "밀링머신", image: null },
    { name: "선반", image: null },
    { name: "드릴링머신", image: null },
    { name: "그라인딩머신", image: null },
  ];

  const measurementEquipmentList = [
    { name: "3차원 측정기", image: null },
    { name: "표면거칠기 측정기", image: null },
    { name: "하이트게이지", image: null },
    { name: "마이크로미터", image: null },
    { name: "캘리퍼스", image: null },
  ];

  const initialDisplayCount = 10;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#000B24] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">기술 소개</h1>
          <p className="text-xl opacity-90">SUMAN Technology</p>
        </div>
      </div>

      {/* Main Equipment Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mb-10">
            Main Equipment
          </h2>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3]">
            정밀 가공을 위한 최첨단 장비
            <br />
            고품질 제품 생산 시스템
          </p>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="relative z-0 bg-[#000B24] pt-20 pb-60">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`relative transition-all duration-500 ease-in-out ${
            showAllEquipment
              ? "max-h-[5000px] overflow-visible"
              : "max-h-[530px] overflow-hidden"
          }`}>
            {/* Production Equipment */}
            <button className="text-base sm:text-lg bg-[#505050]/40 text-white rounded-full px-6 py-1 mb-16">
              생산가공 / 조립
            </button>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {equipmentList.map((equipment, index) => (
                <div
                  key={`prod-${index}`}
                  className="relative bg-white/10 rounded-lg overflow-hidden shadow-lg w-full h-50 p-2 border-2 border-gray-400/10"
                >
                  <div className="w-full h-28 bg-gray-300 rounded-lg mb-2 flex items-center justify-center">
                    <Package className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#434343]/30 text-center py-2 flex items-center justify-center border border-gray-500/10">
                    <p className="text-base font-medium text-white text-center">
                      {equipment.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Measurement Equipment */}
            <button className="text-base sm:text-lg bg-[#505050]/40 text-white rounded-full px-6 py-1 mb-16 mt-28">
              신뢰성 (측정 / 분석)
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {measurementEquipmentList.map((equipment, index) => (
                <div
                  key={`meas-${index}`}
                  className="relative bg-white/10 rounded-lg overflow-hidden shadow-lg w-full h-50 p-2 border-2 border-gray-400/10"
                >
                  <div className="w-full h-28 bg-gray-300 rounded-lg mb-2 flex items-center justify-center">
                    <Settings className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#434343]/30 text-center py-2 flex items-center justify-center border border-gray-500/10">
                    <p className="text-base font-medium text-white text-center">
                      {equipment.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {equipmentList.length + measurementEquipmentList.length > initialDisplayCount && (
            <div className="mt-10 mb-10 text-right">
              <button
                onClick={() => setShowAllEquipment(!showAllEquipment)}
                className="text-lg text-gray-200 hover:text-white font-medium cursor-pointer"
              >
                {showAllEquipment ? "간략히 보기" : "전체 설비 보기"} →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Process Section - Detailed Flowchart */}
      <div className="bg-white py-20 px-4 md:px-8 text-black rounded-[60px] mt-[-220px] relative z-10 pb-[100px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mt-10 mb-10">
            Process
          </h2>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3] mb-16">
            체계적인 생산 프로세스
            <br />
            품질 보증 시스템
          </p>

          {/* Detailed Manufacturing Process Flowchart */}
          <div className="relative mt-20">
            {/* Customer */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#000B24] text-white rounded-2xl px-8 py-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-semibold">Customer</span>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>
            </div>

            {/* Concept Design Row */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 mb-8 flex-wrap lg:flex-nowrap">
              <div className="bg-white rounded-2xl px-6 lg:px-8 py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-[#000B24]/10 rounded-full p-3">
                    <FileText className="w-6 h-6 text-[#000B24]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#000B24]">Concept 설계</div>
                    <div className="text-sm text-gray-600">Initial Design</div>
                  </div>
                </div>
              </div>
              
              {/* D/R Decision */}
              <div className="relative">
                <div className="w-20 h-20 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                  <span className="transform -rotate-45 text-white font-semibold text-sm">D/R</span>
                </div>
                {/* NG Arrow */}
                <div className="absolute -right-20 lg:-right-24 top-7 flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-medium text-sm">NG</span>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>
            </div>

            {/* Development Design Row */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 mb-8 flex-wrap lg:flex-nowrap">
              <div className="bg-white rounded-2xl px-6 lg:px-8 py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-[#000B24]/10 rounded-full p-3">
                    <Settings className="w-6 h-6 text-[#000B24]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#000B24]">개발/가공 설계</div>
                    <div className="text-sm text-gray-600">Development Design</div>
                  </div>
                </div>
              </div>
              
              {/* Review Approval Decision */}
              <div className="relative">
                <div className="w-24 h-24 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                  <span className="transform -rotate-45 text-white font-semibold text-xs text-center leading-tight">검토<br/>승인</span>
                </div>
                {/* NG Arrow */}
                <div className="absolute -right-20 lg:-right-24 top-9 flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-medium text-sm">NG</span>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>
            </div>

            {/* Ordering Row */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 mb-8 flex-wrap lg:flex-nowrap">
              {/* Partner Company */}
              <div className="relative bg-[#000B24] text-white rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 rounded-full p-2">
                    <Package className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">협력사</span>
                </div>
                <div className="absolute -bottom-8 left-6 flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full">
                  <ArrowLeft className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-medium text-sm">NG</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl px-6 lg:px-8 py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-[#000B24]/10 rounded-full p-3">
                    <Package className="w-6 h-6 text-[#000B24]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#000B24]">발주(소재/부품)</div>
                    <div className="text-sm text-gray-600">Material Ordering</div>
                  </div>
                </div>
              </div>
              
              {/* Incoming Inspection Decision */}
              <div className="w-24 h-24 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                <span className="transform -rotate-45 text-white font-semibold text-xs text-center leading-tight">수입<br/>검사</span>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>
            </div>

            {/* Manufacturing Row */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 mb-8 flex-wrap lg:flex-nowrap">
              <div className="bg-white rounded-2xl px-6 lg:px-8 py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-[#000B24]/10 rounded-full p-3">
                    <Settings className="w-6 h-6 text-[#000B24]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#000B24]">가공/제작</div>
                    <div className="text-sm text-gray-600">Manufacturing</div>
                  </div>
                </div>
              </div>
              
              {/* NG Arrow */}
              <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full shadow-sm">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-600 font-medium">NG</span>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>
            </div>

            {/* Final Inspection Row */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 mb-8 flex-wrap lg:flex-nowrap">
              <div className="relative">
                <div className="w-28 h-28 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                  <span className="transform -rotate-45 text-white font-semibold text-xs text-center leading-tight">출하 및<br/>조립/측정<br/>검사</span>
                </div>
                {/* NG Arrow */}
                <div className="absolute -right-20 lg:-right-24 top-11 flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-medium text-sm">NG</span>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>
            </div>

            {/* Packaging */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl px-6 lg:px-8 py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-[#000B24]/10 rounded-full p-3">
                    <Package className="w-6 h-6 text-[#000B24]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#000B24]">포장</div>
                    <div className="text-sm text-gray-600">Packaging</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-8 bg-[#000B24] rounded-full"></div>
            </div>

            {/* Customer Delivery */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl px-6 lg:px-8 py-6 shadow-lg border border-[#000B24]/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-[#000B24]/10 rounded-full p-3">
                    <Truck className="w-6 h-6 text-[#000B24]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#000B24]">고객사 납품</div>
                    <div className="text-sm text-gray-600">Customer Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Loop */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 relative flex-wrap lg:flex-nowrap">
              <div className="bg-[#000B24] text-white rounded-2xl px-6 lg:px-8 py-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Re-Order 개선/반영</div>
                    <div className="text-sm opacity-90">Continuous Improvement</div>
                  </div>
                </div>
              </div>
              
              {/* Customer Feedback Decision */}
              <div className="w-24 h-24 bg-[#000B24] transform rotate-45 flex items-center justify-center shadow-lg">
                <span className="transform -rotate-45 text-white font-semibold text-xs text-center leading-tight">고객<br/>Feedback</span>
              </div>

              {/* Feedback Loop Arrow - Hidden on mobile */}
              <div className="absolute -left-32 top-12 hidden lg:block">
                <svg width="200" height="400" className="absolute">
                  <defs>
                    <linearGradient id="feedbackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#000B24" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#000B24" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 20 50 Q 20 200 60 350" 
                    stroke="url(#feedbackGradient)" 
                    strokeWidth="3" 
                    fill="none"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                  />
                  <polygon 
                    points="55,340 65,340 60,350" 
                    fill="#000B24"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}