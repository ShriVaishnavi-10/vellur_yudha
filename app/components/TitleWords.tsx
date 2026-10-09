/* Headline words that rise in one by one; words from `gradientFrom` onward use the sliding gradient. */
export default function TitleWords({
  words,
  gradientFrom = 1,
  delay = 0.3,
}: {
  words: string[];
  gradientFrom?: number;
  delay?: number;
}) {
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="word-mask">
          <span
            className={`word-rise ${i >= gradientFrom ? "gradient-slide" : ""}`}
            style={{ animationDelay: `${delay + i * 0.18}s` }}
          >
            {w}
          </span>
        </span>
      ))}
    </>
  );
}
