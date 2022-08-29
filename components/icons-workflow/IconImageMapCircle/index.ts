import dynamic from 'next/dynamic';

import { IconImageMapCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconImageMapCircle.js';

export const SpIconImageMapCircle = dynamic<IconImageMapCircle | { slot: string }>(
  () => import('./IconImageMapCircle').then((m) => m.SpIconImageMapCircle as any),
  { ssr: false }
);
