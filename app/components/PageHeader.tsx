export default function PageHeader({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
        {tag}
      </span>
      <h1
        className="mt-4 text-3xl font-bold text-white sm:text-4xl"
        style={{ fontFamily: "var(--font-deco)" }}
      >
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-white/88">{description}</p>
      )}
    </div>
  );
}
