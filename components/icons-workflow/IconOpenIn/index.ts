import dynamic from 'next/dynamic';

import { IconOpenIn } from '@spectrum-web-components/icons-workflow/src/elements/IconOpenIn.js';

export const SpIconOpenIn = dynamic<IconOpenIn | { slot: string }>(
  () => import('./IconOpenIn').then((m) => m.SpIconOpenIn as any),
  { ssr: false}
);
