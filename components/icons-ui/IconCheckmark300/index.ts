import dynamic from 'next/dynamic';

import { IconCheckmark300 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark300.js';

export const SpIconCheckmark300 = dynamic<IconCheckmark300 | { slot: string }>(
  () => import('./IconCheckmark300').then((m) => m.SpIconCheckmark300 as any),
  { ssr: false}
);
