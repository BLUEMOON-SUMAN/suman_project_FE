import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { ReactNode } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface LayoutProps {
  children: ReactNode; // 자식 컴포넌트들을 받기 위한 prop
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header /> {/* 모든 페이지에 공통으로 들어갈 헤더 */}
      <main>{children}</main> {/* 각 페이지의 실제 내용이 들어갈 곳 */}
      <Footer /> {/* 모든 페이지에 공통으로 들어갈 푸터 */}
      <ScrollToTopButton />
    </>
  );
}
