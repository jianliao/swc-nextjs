import dynamic from 'next/dynamic';

import { IconCheckmark200 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark200.js';

export const SpIconCheckmark200 = dynamic<Partial<IconCheckmark200> | { slot: string }>(
  () => import('./IconCheckmark200').then((m) => m.SpIconCheckmark200 as any),
  { ssr: false}
);
