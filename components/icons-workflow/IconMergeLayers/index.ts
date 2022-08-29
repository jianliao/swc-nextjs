import dynamic from 'next/dynamic';

import { IconMergeLayers } from '@spectrum-web-components/icons-workflow/src/elements/IconMergeLayers.js';

export const SpIconMergeLayers = dynamic<IconMergeLayers | { slot: string }>(
  () => import('./IconMergeLayers').then((m) => m.SpIconMergeLayers as any),
  { ssr: false}
);
