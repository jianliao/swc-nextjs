import dynamic from 'next/dynamic';

import { IconAlignMiddle } from '@spectrum-web-components/icons-workflow/src/elements/IconAlignMiddle.js';

export const SpIconAlignMiddle = dynamic<IconAlignMiddle | { slot: string }>(
  () => import('./IconAlignMiddle').then((m) => m.SpIconAlignMiddle as any),
  { ssr: false}
);
