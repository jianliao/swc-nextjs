import dynamic from 'next/dynamic';

import { IconPrintAdvert } from '@spectrum-web-components/icons-workflow/src/elements/IconPrintAdvert.js';

export const SpIconPrintAdvert = dynamic<IconPrintAdvert | { slot: string }>(
  () => import('./IconPrintAdvert').then((m) => m.SpIconPrintAdvert as any),
  { ssr: false }
);
