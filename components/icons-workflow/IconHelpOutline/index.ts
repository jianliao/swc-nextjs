import dynamic from 'next/dynamic';

import { IconHelpOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconHelpOutline.js';

export const SpIconHelpOutline = dynamic<Partial<IconHelpOutline> | { slot: string }>(
  () => import('./IconHelpOutline').then((m) => m.SpIconHelpOutline as any),
  { ssr: false}
);
