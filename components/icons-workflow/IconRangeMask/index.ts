import dynamic from 'next/dynamic';

import { IconRangeMask } from '@spectrum-web-components/icons-workflow/src/elements/IconRangeMask.js';

export const SpIconRangeMask = dynamic<Partial<IconRangeMask> | { slot: string }>(
  () => import('./IconRangeMask').then((m) => m.SpIconRangeMask as any),
  { ssr: false }
);
