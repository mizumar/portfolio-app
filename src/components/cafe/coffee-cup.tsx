import Image from "next/image";

type CoffeeType = "hot" | "ice";

type CoffeeCupProps = {
  image: string;
  title: string;
  type?: CoffeeType;
  cupColor?: string;
  paperColor?: string;
  accentColor?: string;
};

export function CoffeeCup({
  image,
  title,
  type = "ice",
  cupColor = "#46372f",
  paperColor = "#c9b08d",
  accentColor = "#d8c3a5",
}: CoffeeCupProps) {
  const isHot = type === "hot";

  return (
    <div
      className={`relative mx-auto w-full px-6  ${
        isHot ? "max-w-[400px] pt-12" : "max-w-[420px] pt-8"
      }`}
    >
      {/* 蓋 */}
      <div className="absolute left-1/2 top-0 z-20 w-[88%] -translate-x-1/2">
        {isHot ? (
          /* ホット用：高さのあるドーム型 */
          <div
            className="relative mx-auto h-12 w-[86%] rounded-t-[50%] border"
            style={{
              backgroundColor: paperColor,
              borderColor: accentColor,
            }}
          >
            {/* 蓋の下側の縁 */}
            <div
              className="absolute -bottom-1 left-1/2 h-3 w-[106%] -translate-x-1/2 rounded-b-[50%] border-b"
              style={{
                backgroundColor: paperColor,
                borderColor: accentColor,
              }}
            />
          </div>
        ) : (
          /* アイス用：低いフラットな蓋 */
          <div
            className="relative mx-auto h-7 w-[88%] rounded-t-[50%] border"
            style={{
              backgroundColor: paperColor,
              borderColor: accentColor,
            }}
          >
            <div
              className="absolute -bottom-1 left-1/2 h-2 w-[106%] -translate-x-1/2 rounded-b-full border-b"
              style={{
                backgroundColor: paperColor,
                borderColor: accentColor,
              }}
            />
          </div>
        )}
      </div>

      {/* アイスコーヒーのストロー */}
      {!isHot && (
        <div
          className="absolute left-[52%] -top-10.5 z-30 h-16 w-[8px] rotate-[16deg]"
          style={{
            backgroundColor: paperColor,
            backgroundImage: `
        repeating-linear-gradient(
          -40deg,
          transparent 0px,
          transparent 8px,
          #46372f 8px,
          #46372f 11px
        )
      `,
          }}
        />
      )}

      {/* カップ本体 */}
      <div
        className="relative mx-auto aspect-[0.86/1] w-full overflow-hidden"
        style={{
          backgroundColor: paperColor,
          clipPath: "polygon(8% 0%, 92% 0%, 78% 100%, 22% 100%)",
          filter: "drop-shadow(0 18px 25px rgba(0,0,0,0.25))",
        }}
      >
        {/* 印刷されているデザイン */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: cupColor,
            clipPath: "polygon(10% 0%, 90% 0%, 77% 100%, 23% 100%)",
          }}
        >
          {/* 上部ライン */}
          <div
            className="absolute left-[8%] right-[8%] top-0 h-[2px]"
            style={{
              backgroundColor: accentColor,
            }}
          />
          {/* 段ボール部分 */}
          {isHot && (
            <div
              className="absolute left-[7%] right-[7%] top-[28%] bottom-[23%]"
              style={{
                backgroundColor: paperColor,
              }}
            />
          )}
          {/* 上側ライン */}
          <div
            className="absolute left-[7%] right-[7%] top-[28%] h-px opacity-30"
            style={{
              backgroundColor: accentColor,
            }}
          />
          {/* 下側ライン */}
          <div
            className="absolute bottom-[23%] left-[12%] right-[12%] h-px opacity-30"
            style={{
              backgroundColor: accentColor,
            }}
          />{" "}
          {/* 中央ロゴ */}
          <div
            className="absolute left-1/2 top-1/2 flex aspect-square w-[45%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border"
            style={{
              borderColor: accentColor,
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>
          {/* タイトル */}
          <div className="absolute bottom-[9%] left-1/2 w-[60%] -translate-x-1/2 text-center">
            <p
              className="text-[9px] tracking-[0.35em]"
              style={{ color: accentColor }}
            >
              PORTFOLIO
            </p>

            <p
              className="mt-2 text-[11px] font-medium tracking-[0.12em]"
              style={{ color: accentColor }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
