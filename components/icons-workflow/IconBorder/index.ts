import dynamic from 'next/dynamic';

import { IconBorder } from '@spectrum-web-components/icons-workflow/src/elements/IconBorder.js';

export const SpIconBorder = dynamic<IconBorder | { slot: string }>(
  () => import('./IconBorder').then((m) => m.SpIconBorder as any),
  { ssr: false }
);
