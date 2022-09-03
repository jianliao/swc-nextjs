import dynamic from 'next/dynamic';

import { IconCheckmark50 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark50.js';

export const SpIconCheckmark50 = dynamic<Partial<IconCheckmark50> | { slot: string }>(
  () => import('./IconCheckmark50').then((m) => m.SpIconCheckmark50 as any),
  { ssr: false}
);
