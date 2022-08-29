import dynamic from 'next/dynamic';

import { IconLabel } from '@spectrum-web-components/icons-workflow/src/elements/IconLabel.js';

export const SpIconLabel = dynamic<IconLabel | { slot: string }>(
  () => import('./IconLabel').then((m) => m.SpIconLabel as any),
  { ssr: false}
);
