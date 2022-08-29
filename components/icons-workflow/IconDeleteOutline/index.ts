import dynamic from 'next/dynamic';

import { IconDeleteOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconDeleteOutline.js';

export const SpIconDeleteOutline = dynamic<IconDeleteOutline | { slot: string }>(
  () => import('./IconDeleteOutline').then((m) => m.SpIconDeleteOutline as any),
  { ssr: false}
);
