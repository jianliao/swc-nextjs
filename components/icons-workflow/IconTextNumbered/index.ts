import dynamic from 'next/dynamic';

import { IconTextNumbered } from '@spectrum-web-components/icons-workflow/src/elements/IconTextNumbered.js';

export const SpIconTextNumbered = dynamic<Partial<IconTextNumbered> | { slot: string }>(
  () => import('./IconTextNumbered').then((m) => m.SpIconTextNumbered as any),
  { ssr: false }
);
