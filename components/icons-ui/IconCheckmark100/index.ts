import dynamic from 'next/dynamic';

import { IconCheckmark100 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark100.js';

export const SpIconCheckmark100 = dynamic<IconCheckmark100 | { slot: string }>(
  () => import('./IconCheckmark100').then((m) => m.SpIconCheckmark100 as any),
  { ssr: false}
);
