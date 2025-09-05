// src/components/HeroSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImage: string;

  /** Optional overrides (per page) */
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;           // override tinggi/spacing section
  containerClassName?: string;  // override max width / padding container
  overlay?: "none" | "dark" | "gradient";
  overlayClassName?: string;    // override overlay jika perlu
  align?: "left" | "center";
  objectPosition?: string;      // ex: "object-center" | "object-[50%_30%]"
  offsetClassName?: string;     // ex: "translate-y-2 md:translate-y-5"

  /** Trim atas/bawah dalam cm (negatif margin utk “memotong” hero secara visual) */
  trimTopCm?: number;           // default 1
  trimBottomCm?: number;        // default 1
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,

  // === Defaults mengikuti style ceo.tsx (CEO 인사말) ===
  titleClassName,
  subtitleClassName,
  // tinggi sedikit lebih rendah + responsif
  className = "h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px]",
  containerClassName = "max-w-7xl mx-auto px-6 md:px-[60px] lg:px-0",
  // overlay gradient lembut seperti di ceo
  overlay = "gradient",
  overlayClassName,
  align = "left",
  objectPosition = "object-center",
  // sedikit diturunkan agar terasa lebih ke tengah (visual centering)
  offsetClassName = "transform translate-y-2 sm:translate-y-3 md:translate-y-4",

  // default trim 1cm atas & bawah (supaya hero lebih pendek, breadcrumb terlihat rapat)
  trimTopCm = 1,
  trimBottomCm = 1,
}: HeroSectionProps) {
  const alignText = align === "center" ? "text-center" : "text-left";

  // alt text aman jika title adalah ReactNode
  const altText =
    typeof title === "string" ? `${title} 배경 이미지` : "Hero background image";

  // Overlay default
  const overlayDefaults =
    overlay === "none"
      ? ""
      : overlay === "dark"
      ? "bg-black/40"
      : "bg-gradient-to-t from-black/50 via-black/30 to-transparent";

  // Konversi cm -> px (approx 1cm ≈ 37.8px)
  const CM_TO_PX = 37.8;
  const trimTopPx = Math.round((trimTopCm ?? 0) * CM_TO_PX);
  const trimBottomPx = Math.round((trimBottomCm ?? 0) * CM_TO_PX);

  return (
    // Wrapper untuk “memotong” hero: negative margin top/bottom
    <div style={{ marginTop: `-${trimTopPx}px`, marginBottom: `-${trimBottomPx}px` }}>
      <section
        className={`relative flex items-center text-white overflow-hidden ${className}`}
        aria-label={typeof title === "string" ? title : "Hero"}
      >
        {/* Background image */}
        <Image
          src={backgroundImage}
          alt={altText}
          fill
          priority
          className={`object-cover ${objectPosition}`}
          sizes="100vw"
        />

        {/* Overlay */}
        {overlay !== "none" && (
          <div
            className={`absolute inset-0 ${overlayClassName ?? overlayDefaults}`}
            aria-hidden="true"
          />
        )}

        {/* Content */}
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${containerClassName} ${alignText} ${offsetClassName}`}>
            {/* === Title mengikuti skala ceo.tsx (CEO 인사말) === */}
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-1 ${titleClassName ?? ""}`}
            >
              {title}
            </h1>

            {/* Subtitle opsional; skala diselaraskan */}
            {subtitle ? (
              <p
                className={`text-base sm:text-lg md:text-xl font-medium ${subtitleClassName ?? ""}`}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
