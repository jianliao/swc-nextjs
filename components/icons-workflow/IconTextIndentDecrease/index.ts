import dynamic from 'next/dynamic';

import { IconTextIndentDecrease } from '@spectrum-web-components/icons-workflow/src/elements/IconTextIndentDecrease.js';

export const SpIconTextIndentDecrease = dynamic<IconTextIndentDecrease | { slot: string }>(
  () => import('./IconTextIndentDecrease').then((m) => m.SpIconTextIndentDecrease as any),
  { ssr: false}
);
