import dynamic from 'next/dynamic';

import { IconSelectSubtract } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectSubtract.js';

export const SpIconSelectSubtract = dynamic<Partial<IconSelectSubtract> | { slot: string }>(
  () => import('./IconSelectSubtract').then((m) => m.SpIconSelectSubtract as any),
  { ssr: false}
);
