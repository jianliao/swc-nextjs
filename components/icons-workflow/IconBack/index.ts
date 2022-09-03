import dynamic from 'next/dynamic';

import { IconBack } from '@spectrum-web-components/icons-workflow/src/elements/IconBack.js';

export const SpIconBack = dynamic<Partial<IconBack> | { slot: string }>(
  () => import('./IconBack').then((m) => m.SpIconBack as any),
  { ssr: false}
);
