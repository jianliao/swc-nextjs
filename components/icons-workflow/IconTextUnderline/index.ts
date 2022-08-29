import dynamic from 'next/dynamic';

import { IconTextUnderline } from '@spectrum-web-components/icons-workflow/src/elements/IconTextUnderline.js';

export const SpIconTextUnderline = dynamic<IconTextUnderline | { slot: string }>(
  () => import('./IconTextUnderline').then((m) => m.SpIconTextUnderline as any),
  { ssr: false}
);
