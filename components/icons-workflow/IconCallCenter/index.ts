import dynamic from 'next/dynamic';

import { IconCallCenter } from '@spectrum-web-components/icons-workflow/src/elements/IconCallCenter.js';

export const SpIconCallCenter = dynamic<IconCallCenter | { slot: string }>(
  () => import('./IconCallCenter').then((m) => m.SpIconCallCenter as any),
  { ssr: false}
);
