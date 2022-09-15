import dynamic from 'next/dynamic';

import { IconRevert } from '@spectrum-web-components/icons-workflow/src/elements/IconRevert.js';

export const SpIconRevert = dynamic<Partial<IconRevert> | { slot: string }>(
  () => import('./IconRevert').then((m) => m.SpIconRevert as any),
  { ssr: false }
);
