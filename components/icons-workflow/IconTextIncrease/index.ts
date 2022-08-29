import dynamic from 'next/dynamic';

import { IconTextIncrease } from '@spectrum-web-components/icons-workflow/src/elements/IconTextIncrease.js';

export const SpIconTextIncrease = dynamic<IconTextIncrease | { slot: string }>(
  () => import('./IconTextIncrease').then((m) => m.SpIconTextIncrease as any),
  { ssr: false }
);
