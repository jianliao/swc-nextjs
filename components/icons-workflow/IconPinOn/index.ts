import dynamic from 'next/dynamic';

import { IconPinOn } from '@spectrum-web-components/icons-workflow/src/elements/IconPinOn.js';

export const SpIconPinOn = dynamic<IconPinOn | { slot: string }>(
  () => import('./IconPinOn').then((m) => m.SpIconPinOn as any),
  { ssr: false}
);
