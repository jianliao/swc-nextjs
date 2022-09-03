import dynamic from 'next/dynamic';

import { IconFastForwardCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconFastForwardCircle.js';

export const SpIconFastForwardCircle = dynamic<Partial<IconFastForwardCircle> | { slot: string }>(
  () => import('./IconFastForwardCircle').then((m) => m.SpIconFastForwardCircle as any),
  { ssr: false}
);
