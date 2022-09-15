import dynamic from 'next/dynamic';

import { IconPopIn } from '@spectrum-web-components/icons-workflow/src/elements/IconPopIn.js';

export const SpIconPopIn = dynamic<Partial<IconPopIn> | { slot: string }>(
  () => import('./IconPopIn').then((m) => m.SpIconPopIn as any),
  { ssr: false }
);
