import dynamic from 'next/dynamic';

import { IconPinOff } from '@spectrum-web-components/icons-workflow/src/elements/IconPinOff.js';

export const SpIconPinOff = dynamic<IconPinOff | { slot: string }>(
  () => import('./IconPinOff').then((m) => m.SpIconPinOff as any),
  { ssr: false }
);
