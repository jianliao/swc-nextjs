import dynamic from 'next/dynamic';

import { IconSelection } from '@spectrum-web-components/icons-workflow/src/elements/IconSelection.js';

export const SpIconSelection = dynamic<Partial<IconSelection> | { slot: string }>(
  () => import('./IconSelection').then((m) => m.SpIconSelection as any),
  { ssr: false}
);
