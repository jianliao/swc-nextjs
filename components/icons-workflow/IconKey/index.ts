import dynamic from 'next/dynamic';

import { IconKey } from '@spectrum-web-components/icons-workflow/src/elements/IconKey.js';

export const SpIconKey = dynamic<IconKey | { slot: string }>(
  () => import('./IconKey').then((m) => m.SpIconKey as any),
  { ssr: false}
);
