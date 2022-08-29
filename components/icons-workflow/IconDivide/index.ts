import dynamic from 'next/dynamic';

import { IconDivide } from '@spectrum-web-components/icons-workflow/src/elements/IconDivide.js';

export const SpIconDivide = dynamic<IconDivide | { slot: string }>(
  () => import('./IconDivide').then((m) => m.SpIconDivide as any),
  { ssr: false}
);
