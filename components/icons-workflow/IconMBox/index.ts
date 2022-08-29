import dynamic from 'next/dynamic';

import { IconMBox } from '@spectrum-web-components/icons-workflow/src/elements/IconMBox.js';

export const SpIconMBox = dynamic<IconMBox | { slot: string }>(
  () => import('./IconMBox').then((m) => m.SpIconMBox as any),
  { ssr: false}
);
