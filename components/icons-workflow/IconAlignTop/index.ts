import dynamic from 'next/dynamic';

import { IconAlignTop } from '@spectrum-web-components/icons-workflow/src/elements/IconAlignTop.js';

export const SpIconAlignTop = dynamic<Partial<IconAlignTop> | { slot: string }>(
  () => import('./IconAlignTop').then((m) => m.SpIconAlignTop as any),
  { ssr: false }
);
