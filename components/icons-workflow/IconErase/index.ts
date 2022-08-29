import dynamic from 'next/dynamic';

import { IconErase } from '@spectrum-web-components/icons-workflow/src/elements/IconErase.js';

export const SpIconErase = dynamic<IconErase | { slot: string }>(
  () => import('./IconErase').then((m) => m.SpIconErase as any),
  { ssr: false}
);
