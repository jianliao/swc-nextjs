import dynamic from 'next/dynamic';

import { IconTransferToPlatform } from '@spectrum-web-components/icons-workflow/src/elements/IconTransferToPlatform.js';

export const SpIconTransferToPlatform = dynamic<IconTransferToPlatform | { slot: string }>(
  () => import('./IconTransferToPlatform').then((m) => m.SpIconTransferToPlatform as any),
  { ssr: false }
);
