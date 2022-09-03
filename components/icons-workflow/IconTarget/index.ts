import dynamic from 'next/dynamic';

import { IconTarget } from '@spectrum-web-components/icons-workflow/src/elements/IconTarget.js';

export const SpIconTarget = dynamic<Partial<IconTarget> | { slot: string }>(
  () => import('./IconTarget').then((m) => m.SpIconTarget as any),
  { ssr: false}
);
