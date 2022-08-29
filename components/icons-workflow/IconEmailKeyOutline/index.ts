import dynamic from 'next/dynamic';

import { IconEmailKeyOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailKeyOutline.js';

export const SpIconEmailKeyOutline = dynamic<IconEmailKeyOutline | { slot: string }>(
  () => import('./IconEmailKeyOutline').then((m) => m.SpIconEmailKeyOutline as any),
  { ssr: false}
);
