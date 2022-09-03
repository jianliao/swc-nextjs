import dynamic from 'next/dynamic';

import { IconSelectionChecked } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectionChecked.js';

export const SpIconSelectionChecked = dynamic<Partial<IconSelectionChecked> | { slot: string }>(
  () => import('./IconSelectionChecked').then((m) => m.SpIconSelectionChecked as any),
  { ssr: false}
);
