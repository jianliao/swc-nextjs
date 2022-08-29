import dynamic from 'next/dynamic';

import { IconSelectBox } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectBox.js';

export const SpIconSelectBox = dynamic<IconSelectBox | { slot: string }>(
  () => import('./IconSelectBox').then((m) => m.SpIconSelectBox as any),
  { ssr: false}
);
