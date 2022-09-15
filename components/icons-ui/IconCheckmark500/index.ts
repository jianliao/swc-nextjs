import dynamic from 'next/dynamic';

import { IconCheckmark500 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark500.js';

export const SpIconCheckmark500 = dynamic<Partial<IconCheckmark500> | { slot: string }>(
  () => import('./IconCheckmark500').then((m) => m.SpIconCheckmark500 as any),
  { ssr: false }
);
