import dynamic from 'next/dynamic';

import { IconEmailExcludeOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailExcludeOutline.js';

export const SpIconEmailExcludeOutline = dynamic<IconEmailExcludeOutline | { slot: string }>(
  () => import('./IconEmailExcludeOutline').then((m) => m.SpIconEmailExcludeOutline as any),
  { ssr: false}
);
