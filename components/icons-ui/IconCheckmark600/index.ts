import dynamic from 'next/dynamic';

import { IconCheckmark600 } from '@spectrum-web-components/icons-ui/src/elements/IconCheckmark600.js';

export const SpIconCheckmark600 = dynamic<Partial<IconCheckmark600> | { slot: string }>(
  () => import('./IconCheckmark600').then((m) => m.SpIconCheckmark600 as any),
  { ssr: false}
);
