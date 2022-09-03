import dynamic from 'next/dynamic';

import { IconHotFixes } from '@spectrum-web-components/icons-workflow/src/elements/IconHotFixes.js';

export const SpIconHotFixes = dynamic<Partial<IconHotFixes> | { slot: string }>(
  () => import('./IconHotFixes').then((m) => m.SpIconHotFixes as any),
  { ssr: false}
);
