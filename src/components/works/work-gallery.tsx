"use client";

import Image from "next/image";
import { useState } from "react";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";

import type { WorkImage } from "@/src/types/work";
import { Card } from "@/src/components/ui/card";

type WorkGalleryProps = {
  images: WorkImage[];
};

export function WorkGallery({ images }: WorkGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];
  const isMobile = activeImage.device === "mobile";

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* メイン画像 */}
      {isMobile ? (
        <div className="flex justify-center">
          <div className="relative w-full max-w-90">
            <Card className="overflow-hidden rounded-[2rem] border-[#665448] bg-[#46372f] p-2 shadow-none">
              <div className="relative aspect-9/19 overflow-hidden rounded-[1.5rem] bg-[#29231f]">
                <button
                  type="button"
                  onClick={() => setIsZoomed(true)}
                  className="block w-full cursor-zoom-in"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, 360px"
                    className="object-cover"
                  />
                </button>
                {isZoomed && (
                  <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-[#29231f]/95 p-6"
                    onClick={() => setIsZoomed(false)}
                  >
                    <div
                      className="relative max-h-full max-w-6xl"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        width={1600}
                        height={1200}
                        className="max-h-[90vh] w-auto object-contain"
                      />

                      <button
                        type="button"
                        onClick={() => setIsZoomed(false)}
                        aria-label="閉じる"
                        className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-[#d8c3a5]"
                      >
                        <XIcon size={24} weight="light" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="前の画像"
                  className="absolute -left-1 top-1/2 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-r-full border border-l-0 border-[#665448] bg-[#46372f]/90 text-[#d8c3a5] transition-colors hover:bg-[#594438]"
                >
                  <CaretLeftIcon size={17} weight="light" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="次の画像"
                  className="absolute -right-1 top-1/2 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-l-full border border-r-0 border-[#665448] bg-[#46372f]/90 text-[#d8c3a5] transition-colors hover:bg-[#594438]"
                >
                  <CaretRightIcon size={17} weight="light" />
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="overflow-hidden border border-[#665448] bg-[#46372f]">
            <div className="relative aspect-video bg-[#29231f]">
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="block w-full cursor-zoom-in"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </button>
              {isZoomed && (
                <div
                  className="fixed inset-0 z-100 flex items-center justify-center bg-[#29231f]/95 p-6"
                  onClick={() => setIsZoomed(false)}
                >
                  <div
                    className="relative max-h-full max-w-6xl"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      width={1600}
                      height={1200}
                      className="max-h-[90vh] w-auto object-contain"
                    />

                    <button
                      type="button"
                      onClick={() => setIsZoomed(false)}
                      aria-label="閉じる"
                      className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-[#d8c3a5]"
                    >
                      <XIcon size={24} weight="light" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="前の画像"
                className="absolute left-4 top-1/2 flex h-14 w-7 -translate-y-1/2 items-center justify-center rounded-r-full border border-l-0 border-[#665448] bg-[#46372f]/90 text-[#d8c3a5] transition-colors hover:bg-[#594438]"
              >
                <CaretLeftIcon size={18} weight="light" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="次の画像"
                className="absolute right-4 top-1/2 flex h-14 w-7 -translate-y-1/2 items-center justify-center rounded-l-full border border-r-0 border-[#665448] bg-[#46372f]/90 text-[#d8c3a5] transition-colors hover:bg-[#594438]"
              >
                <CaretRightIcon size={18} weight="light" />
              </button>
            </>
          )}
        </div>
      )}

      {/* キャプション */}
      <div className="mt-4 flex items-baseline justify-between">
        <div>
          <p className="font-dm text-[10px] tracking-[0.25em] text-[#806b59]">
            {activeImage.label}
          </p>

          <p className="mt-1 text-sm text-[#d0c2b0]">{activeImage.title}</p>
        </div>

        {/* スマホでは現在位置を少し強調 */}
        <p
          className={`font-dm text-xs ${
            isMobile ? "text-[#d8c3a5]" : "text-[#806b59]"
          }`}
        >
          {String(activeIndex + 1).padStart(2, "0")} /
          {String(images.length).padStart(2, "0")}
        </p>
      </div>

      {/* サムネイル */}
      {images.length > 1 && (
        <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${image.title}を表示`}
                className={`group overflow-hidden border bg-[#29231f] text-left transition-colors ${
                  isActive
                    ? "border-[#d8c3a5]"
                    : "border-[#665448] hover:border-[#806b59]"
                }`}
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 33vw, 25vw"
                    loading="eager"
                    className={`object-cover transition-opacity ${
                      isActive
                        ? "opacity-100"
                        : "opacity-50 group-hover:opacity-80"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
