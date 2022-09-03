import dynamic from 'next/dynamic';

import { IconCheckmarkCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconCheckmarkCircle.js';

export const SpIconCheckmarkCircle = dynamic<Partial<IconCheckmarkCircle> | { slot: string }>(
  () => import('./IconCheckmarkCircle').then((m) => m.SpIconCheckmarkCircle as any),
  { ssr: false}
);
