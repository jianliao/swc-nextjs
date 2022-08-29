import dynamic from 'next/dynamic';

import { IconTextDecrease } from '@spectrum-web-components/icons-workflow/src/elements/IconTextDecrease.js';

export const SpIconTextDecrease = dynamic<IconTextDecrease | { slot: string }>(
  () => import('./IconTextDecrease').then((m) => m.SpIconTextDecrease as any),
  { ssr: false}
);
