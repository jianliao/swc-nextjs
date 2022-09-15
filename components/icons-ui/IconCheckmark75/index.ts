import dynamic from 'next/dynamic';

import { IconCheckmark75 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark75.js';

export const SpIconCheckmark75 = dynamic<Partial<IconCheckmark75> | { slot: string }>(
  () => import('./IconCheckmark75').then((m) => m.SpIconCheckmark75 as any),
  { ssr: false }
);
