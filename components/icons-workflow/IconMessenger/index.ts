import dynamic from 'next/dynamic';

import { IconMessenger } from '@spectrum-web-components/icons-workflow/src/elements/IconMessenger.js';

export const SpIconMessenger = dynamic<IconMessenger | { slot: string }>(
  () => import('./IconMessenger').then((m) => m.SpIconMessenger as any),
  { ssr: false }
);
