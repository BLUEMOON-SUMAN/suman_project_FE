// src/components/HeroSection.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type OverlayKind = "none" | "dark" | "gradient";
type AlignKind = "left" | "center";

interface HeroSectionProps {
  title: ReactNode;
  subtitle?: ReactNode;
  backgroundImage: string;

  /** Optional overrides (per page) */
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;           // override tinggi/spacing section
  containerClassName?: string;  // override max width / padding container
  overlay?: OverlayKind;
  overlayClassName?: string;    // override overlay jika perlu
  align?: AlignKind;
  objectPosition?: string;      // ex: "object-center" | "object-[50%_30%]"
  offsetClassName?: string;     // geser title/subtitle turun/naik (ex: "translate-y-6")

  /** (opsional) Trim visual atas/bawah pakai negative margin */
  trimTopCm?: number;           // default 0
  trimBottomCm?: number;        // default 0
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,

  // === Smaller defaults ===
  titleClassName,
  subtitleClassName,
  className = "h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]",
  containerClassName = "max-w-7xl mx-auto px-6 md:px-[60px] lg:px-0",
  overlay = "gradient",
  overlayClassName,
  align = "left",
  objectPosition = "object-center",
  offsetClassName = "",

  // default trim 0 (gunakan di page jika butuh lebih kecil)
  trimTopCm = 0,
  trimBottomCm = 0,
}: HeroSectionProps) {
  const alignText = align === "center" ? "text-center" : "text-left";

  const altText =
    typeof title === "string" ? `${title} 배경 이미지` : "Hero background image";

  const overlayDefaults =
    overlay === "none"
      ? ""
      : overlay === "dark"
      ? "bg-black/40"
      : "bg-gradient-to-t from-black/50 via-black/30 to-transparent";

  // cm -> px (≈ 1cm = 37.8px)
  const CM_TO_PX = 37.8;
  const trimTopPx = Math.round((trimTopCm ?? 0) * CM_TO_PX);
  const trimBottomPx = Math.round((trimBottomCm ?? 0) * CM_TO_PX);

  return (
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
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${containerClassName} ${alignText} ${offsetClassName}`}>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1 ${titleClassName ?? ""}`}
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
