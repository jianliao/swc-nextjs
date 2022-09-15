import dynamic from 'next/dynamic';

import { IconDataCorrelated } from '@spectrum-web-components/icons-workflow/src/elements/IconDataCorrelated.js';

export const SpIconDataCorrelated = dynamic<Partial<IconDataCorrelated> | { slot: string }>(
  () => import('./IconDataCorrelated').then((m) => m.SpIconDataCorrelated as any),
  { ssr: false }
);
