import dynamic from 'next/dynamic';

import { IconRotateRight } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateRight.js';

export const SpIconRotateRight = dynamic<Partial<IconRotateRight> | { slot: string }>(
  () => import('./IconRotateRight').then((m) => m.SpIconRotateRight as any),
  { ssr: false }
);
