import dynamic from 'next/dynamic';

import { IconMaximize } from '@spectrum-web-components/icons-workflow/src/elements/IconMaximize.js';

export const SpIconMaximize = dynamic<Partial<IconMaximize> | { slot: string }>(
  () => import('./IconMaximize').then((m) => m.SpIconMaximize as any),
  { ssr: false }
);
