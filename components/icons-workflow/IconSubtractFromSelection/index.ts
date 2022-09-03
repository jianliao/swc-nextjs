import dynamic from 'next/dynamic';

import { IconSubtractFromSelection } from '@spectrum-web-components/icons-workflow/src/elements/IconSubtractFromSelection.js';

export const SpIconSubtractFromSelection = dynamic<Partial<IconSubtractFromSelection> | { slot: string }>(
  () => import('./IconSubtractFromSelection').then((m) => m.SpIconSubtractFromSelection as any),
  { ssr: false}
);
