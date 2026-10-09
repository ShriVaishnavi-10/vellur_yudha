/* English sentence rising in word by word, with its Tamil translation fading in beneath. */
export default function WordRise({
  en,
  ta,
  delay = 0.5,
  step = 0.05,
}: {
  en: string;
  ta?: string;
  delay?: number;
  step?: number;
}) {
  const words = en.split(" ");

  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="word-mask mr-[0.28em]">
          <span className="word-rise" style={{ animationDelay: `${delay + i * step}s` }}>
            {w}
          </span>
        </span>
      ))}
      {ta && (
        <span
          lang="ta"
          className="bi-ta bi-ta-block hero-rise"
          style={{ animationDelay: `${delay + words.length * step + 0.2}s` }}
        >
          {ta}
        </span>
      )}
    </>
  );
}
