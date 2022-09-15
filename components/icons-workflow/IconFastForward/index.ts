import dynamic from 'next/dynamic';

import { IconFastForward } from '@spectrum-web-components/icons-workflow/src/elements/IconFastForward.js';

export const SpIconFastForward = dynamic<Partial<IconFastForward> | { slot: string }>(
  () => import('./IconFastForward').then((m) => m.SpIconFastForward as any),
  { ssr: false }
);
