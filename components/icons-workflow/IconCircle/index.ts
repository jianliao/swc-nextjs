import dynamic from 'next/dynamic';

import { IconCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconCircle.js';

export const SpIconCircle = dynamic<IconCircle | { slot: string }>(
  () => import('./IconCircle').then((m) => m.SpIconCircle as any),
  { ssr: false }
);
