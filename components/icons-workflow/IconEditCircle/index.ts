import dynamic from 'next/dynamic';

import { IconEditCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconEditCircle.js';

export const SpIconEditCircle = dynamic<IconEditCircle | { slot: string }>(
  () => import('./IconEditCircle').then((m) => m.SpIconEditCircle as any),
  { ssr: false}
);
