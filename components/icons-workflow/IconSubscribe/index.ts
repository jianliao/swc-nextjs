import dynamic from 'next/dynamic';

import { IconSubscribe } from '@spectrum-web-components/icons-workflow/src/elements/IconSubscribe.js';

export const SpIconSubscribe = dynamic<IconSubscribe | { slot: string }>(
  () => import('./IconSubscribe').then((m) => m.SpIconSubscribe as any),
  { ssr: false }
);
