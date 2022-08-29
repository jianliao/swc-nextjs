import dynamic from 'next/dynamic';

import { IconFast } from '@spectrum-web-components/icons-workflow/src/elements/IconFast.js';

export const SpIconFast = dynamic<IconFast | { slot: string }>(
  () => import('./IconFast').then((m) => m.SpIconFast as any),
  { ssr: false}
);
