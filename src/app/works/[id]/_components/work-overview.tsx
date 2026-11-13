// components/works/work-overview.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { buttonVariants } from "@/src/components/ui/button";

import { WorkGallery } from "@/src/components/works/work-gallery";

import { Work } from "@/src/types/work";

type WorkOverviewProps = {
  work: Work;
};

export function WorkOverview({ work }: WorkOverviewProps) {
  return (
    <section className="mt-4 sm:mt-12 lg:mt-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        {/* 左：ギャラリー */}
        <div>
          {work.images && work.images.length > 0 && (
            <WorkGallery images={work.images} />
          )}
        </div>

        {/* 右：開発概要 */}
        <div>
          <Card className="border-[#665448] bg-[#46372f] shadow-none">
            <CardHeader>
              <CardTitle className="text-lg font-medium tracking-wide text-[#f3e9e9]">
                開発概要
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* 作品について */}
              <div>
                <p className="font-dm text-xs tracking-[0.2em] text-[#806b59]">
                  ABOUT THIS WORK
                </p>

                <p className="mt-3 text-sm leading-8 text-[#d0c2b0]">
                  {work.summary}
                </p>
              </div>

              {/* 基本情報 */}
              <div className="grid gap-6 border-t border-[#665448] pt-7 sm:grid-cols-2 lg:grid-cols-1">
                {/* PERIOD */}
                <div>
                  <p className="font-dm text-xs tracking-[0.2em] text-[#806b59]">
                    PERIOD
                  </p>

                  <p className="mt-2 text-sm text-[#d0c2b0]">{work.period}</p>
                </div>

                {/* TYPE */}
                {work.overview?.developmentType && (
                  <div>
                    <p className="font-dm text-xs tracking-[0.2em] text-[#806b59]">
                      TYPE
                    </p>

                    <p className="mt-2 text-sm text-[#d0c2b0]">
                      {work.overview.developmentType}
                    </p>
                  </div>
                )}

                {/* ROLE */}
                {work.overview?.role && (
                  <div>
                    <p className="font-dm text-xs tracking-[0.2em] text-[#806b59]">
                      ROLE
                    </p>

                    <p className="mt-2 text-sm text-[#d0c2b0]">
                      {work.overview.role}
                    </p>
                  </div>
                )}

                {/* TECHNOLOGY */}
                <div>
                  <p className="font-dm text-xs tracking-[0.2em] text-[#806b59]">
                    TECHNOLOGY
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {work.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-[#806b59] bg-transparent font-normal text-[#d8c3a5]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* 主な機能 */}
              {work.overview?.features && work.overview.features.length > 0 && (
                <div className="border-t border-[#665448] pt-7">
                  <p className="font-dm text-xs tracking-[0.2em] text-[#806b59]">
                    MAIN FEATURES
                  </p>

                  <div className="mt-5 space-y-4">
                    {work.overview.features.map((feature, index) => (
                      <div
                        key={`${feature}-${index}`}
                        className="grid grid-cols-[2ch_1fr] gap-4 border-b border-[#665448] pb-4 last:border-b-0 last:pb-0"
                      >
                        <span className="font-dm text-xs leading-7 tracking-[0.15em] text-[#806b59]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-7 text-[#d0c2b0]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 外部リンク */}
              {(work.links.site || work.links.github) && (
                <div className="flex flex-col gap-3 border-t border-[#665448] pt-7 sm:flex-row lg:flex-col">
                  {work.links.site && (
                    <Link
                      href={work.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        size: "lg",
                        variant: "outline",
                        className:
                          "w-full border-[#665448]! bg-[#594438]! text-[#d8c3a5]! shadow-none hover:border-[#806b59]! hover:bg-[#3b2d25]! hover:text-[#f3e9e9]!",
                      })}
                    >
                      公開サイトを見る
                    </Link>
                  )}

                  {work.links.github && (
                    <Link
                      href={work.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className:
                          "w-full border-[#665448]! bg-[#594438]! text-[#d8c3a5]! shadow-none hover:border-[#806b59]! hover:bg-[#3b2d25]! hover:text-[#f3e9e9]!",
                      })}
                    >
                      GitHubを見る
                    </Link>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
