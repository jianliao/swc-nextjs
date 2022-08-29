import dynamic from 'next/dynamic';

import { IconCheckmarkCircleOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconCheckmarkCircleOutline.js';

export const SpIconCheckmarkCircleOutline = dynamic<IconCheckmarkCircleOutline | { slot: string }>(
  () => import('./IconCheckmarkCircleOutline').then((m) => m.SpIconCheckmarkCircleOutline as any),
  { ssr: false}
);
