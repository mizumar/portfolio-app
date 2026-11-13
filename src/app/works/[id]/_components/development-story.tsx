// components/works/development-story.tsx
import ReactMarkdown from "react-markdown";

type WorkDevelopmentStoryProps = {
  content: string;
};

export function DevelopmentStory({ content }: WorkDevelopmentStoryProps) {
  return (
    <section className="mt-14 border-t border-[#665448] pt-10 sm:mt-16 sm:pt-12">
      <div className="mb-10">
        <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
          DEVELOPMENT STORY
        </p>

        <h2 className="mt-3 text-2xl font-light tracking-wide text-[#f3e9e9] sm:text-3xl">
          開発について
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-8 text-[#806b59]">
          開発の背景や考えたこと、実装までの過程についてまとめています。
        </p>
      </div>

      <article className="max-w-3xl">
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="mt-14 border-l-2 border-[#d8c3a5] pl-4 text-xl font-medium tracking-wide text-[#f3e9e9] first:mt-0">
                {children}
              </h2>
            ),

            h3: ({ children }) => (
              <h3 className="mt-10 text-base font-medium tracking-wide text-[#f3e9e9]">
                {children}
              </h3>
            ),

            p: ({ children }) => (
              <p className="mt-5 leading-8 text-[#d0c2b0]">{children}</p>
            ),

            ul: ({ children }) => (
              <ul className="mt-5 space-y-2 pl-5 text-sm leading-8 text-[#d0c2b0]">
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol className="mt-5 space-y-2 pl-5 text-sm leading-8 text-[#d0c2b0]">
                {children}
              </ol>
            ),

            li: ({ children }) => (
              <li className="pl-1 text-[#d0c2b0]">{children}</li>
            ),

            strong: ({ children }) => (
              <strong className="font-medium text-[#f3e9e9]">{children}</strong>
            ),

            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d8c3a5] underline decoration-[#806b59] underline-offset-4 transition-colors hover:text-[#f3e9e9]"
              >
                {children}
              </a>
            ),

            blockquote: ({ children }) => (
              <blockquote className="mt-6 border-l border-[#806b59] pl-5 text-sm leading-8 text-[#b9a58e]">
                {children}
              </blockquote>
            ),

            code: ({ children }) => (
              <code className="rounded bg-[#46372f] px-1.5 py-0.5 text-xs text-[#d8c3a5]">
                {children}
              </code>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </section>
  );
}
