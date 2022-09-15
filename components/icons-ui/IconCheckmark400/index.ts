import dynamic from 'next/dynamic';

import { IconCheckmark400 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark400.js';

export const SpIconCheckmark400 = dynamic<Partial<IconCheckmark400> | { slot: string }>(
  () => import('./IconCheckmark400').then((m) => m.SpIconCheckmark400 as any),
  { ssr: false }
);
