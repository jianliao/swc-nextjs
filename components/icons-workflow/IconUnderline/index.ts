import dynamic from 'next/dynamic';

import { IconUnderline } from '@spectrum-web-components/icons-workflow/src/elements/IconUnderline.js';

export const SpIconUnderline = dynamic<IconUnderline | { slot: string }>(
  () => import('./IconUnderline').then((m) => m.SpIconUnderline as any),
  { ssr: false }
);
