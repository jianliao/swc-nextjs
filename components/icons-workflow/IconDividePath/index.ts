import dynamic from 'next/dynamic';

import { IconDividePath } from '@spectrum-web-components/icons-workflow/src/elements/IconDividePath.js';

export const SpIconDividePath = dynamic<IconDividePath | { slot: string }>(
  () => import('./IconDividePath').then((m) => m.SpIconDividePath as any),
  { ssr: false }
);
