import dynamic from 'next/dynamic';

import { IconBox } from '@spectrum-web-components/icons-workflow/src/elements/IconBox.js';

export const SpIconBox = dynamic<IconBox | { slot: string }>(
  () => import('./IconBox').then((m) => m.SpIconBox as any),
  { ssr: false}
);
