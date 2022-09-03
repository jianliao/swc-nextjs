import dynamic from 'next/dynamic';

import { IconSpellcheck } from '@spectrum-web-components/icons-workflow/src/elements/IconSpellcheck.js';

export const SpIconSpellcheck = dynamic<Partial<IconSpellcheck> | { slot: string }>(
  () => import('./IconSpellcheck').then((m) => m.SpIconSpellcheck as any),
  { ssr: false}
);
