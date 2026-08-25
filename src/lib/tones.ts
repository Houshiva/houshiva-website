export type Tone = 'violet' | 'teal' | 'gold';

const TONE_CYCLE: Tone[] = ['violet', 'teal', 'gold'];

/** Picks a tone for the nth item in a grid, cycling violet → teal → gold. */
export function toneForIndex(index: number): Tone {
  return TONE_CYCLE[index % TONE_CYCLE.length];
}

/**
 * Inline style overrides for the --tone-* custom properties (see
 * src/styles/tones.css). Applied directly on an element, this wins over any
 * page-level .tone-teal/.tone-gold wrapper — used to cycle colors across
 * cards in a grid independent of the page's own tone.
 */
export function toneVars(tone: Tone): Record<string, string> | undefined {
  if (tone === 'violet') return undefined;

  const accent = tone === 'teal' ? 'var(--color-accent-secondary)' : 'var(--color-accent-gold)';
  const soft = tone === 'teal' ? 'rgba(90, 209, 201, 0.14)' : 'rgba(232, 185, 117, 0.14)';

  return {
    '--tone-accent': accent,
    '--tone-accent-hover': `color-mix(in srgb, ${accent} 85%, white)`,
    '--tone-accent-soft': soft,
  };
}
