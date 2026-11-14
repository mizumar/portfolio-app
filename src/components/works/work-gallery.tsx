"use client";

import Image from "next/image";
import { useState } from "react";

import type { WorkImage } from "@/src/types/work";
import { Card } from "@/src/components/ui/card";

type WorkGalleryProps = {
  images: WorkImage[];
};

/** 作品画像を切り替えて表示するギャラリー */
export function WorkGallery({ images }: WorkGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];
  const isMobile = activeImage.device === "mobile";

  return (
    <div>
      {/* メイン画像 */}
      {isMobile ? (
        <div className="flex justify-center">
          <Card className="w-full max-w-90 overflow-hidden rounded-[2rem] border-[#665448] bg-[#46372f] p-2 shadow-none">
            <div className="relative aspect-9/19 overflow-hidden rounded-[1.5rem] bg-[#29231f]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 640px) 85vw, 360px"
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      ) : (
        <div className="overflow-hidden border border-[#665448] bg-[#46372f]">
          <div className="relative aspect-video bg-[#29231f]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
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

        <p className="font-dm text-xs text-[#806b59]">
          {activeIndex + 1} / {images.length}
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
