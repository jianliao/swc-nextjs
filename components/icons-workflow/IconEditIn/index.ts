import dynamic from 'next/dynamic';

import { IconEditIn } from '@spectrum-web-components/icons-workflow/src/elements/IconEditIn.js';

export const SpIconEditIn = dynamic<IconEditIn | { slot: string }>(
  () => import('./IconEditIn').then((m) => m.SpIconEditIn as any),
  { ssr: false }
);
