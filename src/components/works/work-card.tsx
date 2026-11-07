import Image from "next/image";
import Link from "next/link";

import type { Work } from "@/src/types/work";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { buttonVariants } from "@/src/components/ui/button";

type WorkCardProps = {
  work: Work;
};

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-[#665448] bg-[#46372f] shadow-none">
      {/* サムネイル */}
      <div className="relative aspect-video bg-[#29231f]">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={`${work.title}のサムネイル`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[#806b59]">
            No Image
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-medium tracking-wide text-[#f3e9d9]">
          {work.title}
        </CardTitle>

        <CardDescription className="mt-2 text-sm leading-7 text-[#d0c2b0]">
          {work.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {/* 使用技術 */}
        <div className="flex flex-wrap gap-2">
          {work.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-[#806b59] bg-transparent text-[#d8c3a5] font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-[#665448] bg-[#46372f] pt-5">
        <Link
          href={`/works/${work.id}`}
          className={buttonVariants({
            size: "lg",
            className:
              "w-full! border-[#665448]! bg-[#594438]! text-[#d8c3a5]! shadow-none hover:border-[#d8c3a5]! hover:bg-[#6b5241]! hover:text-[#f3e9d9]!",
          })}
        >
          詳細を見る
        </Link>
      </CardFooter>
    </Card>
  );
}
