import dynamic from 'next/dynamic';

import { IconFilterCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconFilterCheck.js';

export const SpIconFilterCheck = dynamic<IconFilterCheck | { slot: string }>(
  () => import('./IconFilterCheck').then((m) => m.SpIconFilterCheck as any),
  { ssr: false }
);
