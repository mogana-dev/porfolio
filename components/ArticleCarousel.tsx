"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ArticleCard from "./ArticleCard";
import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/dictionary";

interface ArticleCarouselProps {
  articles: Article[];
  locale?: Locale;
}

export default function ArticleCarousel({
  articles,
  locale = "en",
}: ArticleCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(articles.length > 1);

  const updateScrollState = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(
        animationFrameRef.current,
      );
    }

    animationFrameRef.current =
      requestAnimationFrame(() => {
        const maximumScroll =
          carousel.scrollWidth -
          carousel.clientWidth;

        setCanScrollLeft(
          carousel.scrollLeft > 6,
        );

        setCanScrollRight(
          carousel.scrollLeft <
            maximumScroll - 6,
        );
      });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    updateScrollState();

    carousel.addEventListener(
      "scroll",
      updateScrollState,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateScrollState,
      {
        passive: true,
      },
    );

    return () => {
      carousel.removeEventListener(
        "scroll",
        updateScrollState,
      );

      window.removeEventListener(
        "resize",
        updateScrollState,
      );

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, [updateScrollState]);

  const scrollCarousel = useCallback(
    (direction: -1 | 1) => {
      const carousel = carouselRef.current;

      if (!carousel) {
        return;
      }

      const card =
        carousel.querySelector<HTMLElement>(
          "[data-article-card]",
        );

      const gap = 20;

      const distance = card
        ? card.offsetWidth + gap
        : carousel.clientWidth * 0.85;

      carousel.scrollBy({
        left: direction * distance,
        behavior: "smooth",
      });
    },
    [],
  );

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {/* Desktop edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-10 bg-gradient-to-r from-ink to-transparent lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-10 bg-gradient-to-l from-ink to-transparent lg:block"
      />

      <div
        ref={carouselRef}
        data-horizontal-scroll
        role="region"
        aria-roledescription="carousel"
        aria-label={
          locale === "fr"
            ? "Articles et analyses"
            : "Articles and insights"
        }
         className="
              flex
              touch-pan-y
              snap-x
              snap-proximity
              gap-4
              overflow-x-auto
              overflow-y-visible
              scroll-smooth
              pb-3
              pr-4
              [overscroll-behavior:auto]
              [touch-action:pan-y_pinch-zoom]
              [scrollbar-width:none]
              [-webkit-overflow-scrolling:touch]
              sm:gap-5
              [&::-webkit-scrollbar]:hidden
            "
      >
        {articles.map((article, index) => (
          <div
            key={article.slug}
            data-article-card
            className="
              w-[88%]
              shrink-0
              snap-start
              sm:w-[350px]
              lg:w-[370px]
            "
          >
            <ArticleCard
              article={article}
              locale={locale}
              index={index}
            />
          </div>
        ))}
      </div>

      <div className="relative mt-4 flex items-center justify-center">
    <p className="hidden text-[11px] font-medium tracking-[0.04em] text-white/28 sm:block">
        {locale === "fr"
            ? "Faites glisser horizontalement pour découvrir les autres articles."
            : "Swipe horizontally to explore more insights."}
    </p>

    <div className="absolute right-0 flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              scrollCarousel(-1)
            }
            disabled={!canScrollLeft}
            aria-label={
              locale === "fr"
                ? "Article précédent"
                : "Previous article"
            }
            className="
              group
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              text-white
              backdrop-blur-xl
              transition-all
              duration-200
              hover:border-[#ff6b35]/50
              hover:bg-[#ff6b35]
              disabled:cursor-not-allowed
              disabled:opacity-25
              disabled:hover:border-white/10
              disabled:hover:bg-white/[0.035]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#ff6b35]
            "
          >
            <ChevronLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
            />
          </button>

          <button
            type="button"
            onClick={() =>
              scrollCarousel(1)
            }
            disabled={!canScrollRight}
            aria-label={
              locale === "fr"
                ? "Article suivant"
                : "Next article"
            }
            className="
              group
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              text-white
              backdrop-blur-xl
              transition-all
              duration-200
              hover:border-[#ff6b35]/50
              hover:bg-[#ff6b35]
              disabled:cursor-not-allowed
              disabled:opacity-25
              disabled:hover:border-white/10
              disabled:hover:bg-white/[0.035]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#ff6b35]
            "
          >
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}