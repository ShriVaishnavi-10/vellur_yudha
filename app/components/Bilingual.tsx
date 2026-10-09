/* English-only now. Kept as a pass-through so call sites (<T en .. ta=".."/>, <Ta>..</Ta>)
   don't need to be rewritten one by one — only the English text is ever shown. */

export function T({ en }: { en: string; ta?: string }) {
  return <>{en}</>;
}

export function Ta({ children }: { children?: string }) {
  return null;
}
