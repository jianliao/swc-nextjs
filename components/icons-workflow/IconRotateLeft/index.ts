import dynamic from 'next/dynamic';

import { IconRotateLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateLeft.js';

export const SpIconRotateLeft = dynamic<Partial<IconRotateLeft> | { slot: string }>(
  () => import('./IconRotateLeft').then((m) => m.SpIconRotateLeft as any),
  { ssr: false }
);
