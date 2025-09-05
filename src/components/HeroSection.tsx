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
  trimTopCm?: number;           // default 2
  trimBottomCm?: number;        // default 2
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,

  // Defaults responsif & enak dibaca di semua layar
  titleClassName,
  subtitleClassName,
  className = "h-[300px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[520px]",
  containerClassName = "max-w-7xl mx-auto px-6 md:px-[60px] lg:px-0",
  overlay = "gradient",
  overlayClassName,
  align = "left",
  objectPosition = "object-center",
  // Geser teks sedikit ke bawah agar tampak lebih centered secara visual
  offsetClassName = "transform translate-y-2 sm:translate-y-3 md:translate-y-5 lg:translate-y-6",

  // Trim default 2 cm atas & bawah
  trimTopCm = 2,
  trimBottomCm = 2,
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
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 ${titleClassName ?? ""}`}
            >
              {title}
            </h1>

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
