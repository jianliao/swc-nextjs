import dynamic from 'next/dynamic';

import { IconMarginTop } from '@spectrum-web-components/icons-workflow/src/elements/IconMarginTop.js';

export const SpIconMarginTop = dynamic<Partial<IconMarginTop> | { slot: string }>(
  () => import('./IconMarginTop').then((m) => m.SpIconMarginTop as any),
  { ssr: false }
);
