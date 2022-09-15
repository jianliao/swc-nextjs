import dynamic from 'next/dynamic';

import { IconCheckmark } from '@spectrum-web-components/icons-workflow/src/elements/IconCheckmark.js';

export const SpIconCheckmark = dynamic<Partial<IconCheckmark> | { slot: string }>(
  () => import('./IconCheckmark').then((m) => m.SpIconCheckmark as any),
  { ssr: false }
);
