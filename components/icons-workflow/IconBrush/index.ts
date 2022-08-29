import dynamic from 'next/dynamic';

import { IconBrush } from '@spectrum-web-components/icons-workflow/src/elements/IconBrush.js';

export const SpIconBrush = dynamic<IconBrush | { slot: string }>(
  () => import('./IconBrush').then((m) => m.SpIconBrush as any),
  { ssr: false }
);
