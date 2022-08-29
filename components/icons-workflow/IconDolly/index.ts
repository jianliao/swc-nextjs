import dynamic from 'next/dynamic';

import { IconDolly } from '@spectrum-web-components/icons-workflow/src/elements/IconDolly.js';

export const SpIconDolly = dynamic<IconDolly | { slot: string }>(
  () => import('./IconDolly').then((m) => m.SpIconDolly as any),
  { ssr: false}
);
