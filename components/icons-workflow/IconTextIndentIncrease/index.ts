import dynamic from 'next/dynamic';

import { IconTextIndentIncrease } from '@spectrum-web-components/icons-workflow/src/elements/IconTextIndentIncrease.js';

export const SpIconTextIndentIncrease = dynamic<Partial<IconTextIndentIncrease> | { slot: string }>(
  () => import('./IconTextIndentIncrease').then((m) => m.SpIconTextIndentIncrease as any),
  { ssr: false }
);
