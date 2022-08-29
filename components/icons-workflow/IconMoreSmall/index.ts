import dynamic from 'next/dynamic';

import { IconMoreSmall } from '@spectrum-web-components/icons-workflow/src/elements/IconMoreSmall.js';

export const SpIconMoreSmall = dynamic<IconMoreSmall | { slot: string }>(
  () => import('./IconMoreSmall').then((m) => m.SpIconMoreSmall as any),
  { ssr: false}
);
