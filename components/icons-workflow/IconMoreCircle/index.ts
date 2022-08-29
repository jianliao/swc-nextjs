import dynamic from 'next/dynamic';

import { IconMoreCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconMoreCircle.js';

export const SpIconMoreCircle = dynamic<IconMoreCircle | { slot: string }>(
  () => import('./IconMoreCircle').then((m) => m.SpIconMoreCircle as any),
  { ssr: false }
);
