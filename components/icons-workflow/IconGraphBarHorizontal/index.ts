import dynamic from 'next/dynamic';

import { IconGraphBarHorizontal } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBarHorizontal.js';

export const SpIconGraphBarHorizontal = dynamic<IconGraphBarHorizontal | { slot: string }>(
  () => import('./IconGraphBarHorizontal').then((m) => m.SpIconGraphBarHorizontal as any),
  { ssr: false}
);
