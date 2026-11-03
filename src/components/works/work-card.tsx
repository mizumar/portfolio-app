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
    <Card className="flex h-full flex-col overflow-hidden">
      {/* サムネイル */}
      <div className="relative aspect-video bg-muted">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={`${work.title}のサムネイル`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle>{work.title}</CardTitle>
        <CardDescription>{work.summary}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        {/* 使用技術 */}
        <div className="flex flex-wrap gap-2">
          {work.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={`/works/${work.id}`}
          className={buttonVariants({ className: "w-full" })}
        >
          詳細を見る
        </Link>
      </CardFooter>
    </Card>
  );
}
