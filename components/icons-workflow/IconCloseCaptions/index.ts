import dynamic from 'next/dynamic';

import { IconCloseCaptions } from '@spectrum-web-components/icons-workflow/src/elements/IconCloseCaptions.js';

export const SpIconCloseCaptions = dynamic<IconCloseCaptions | { slot: string }>(
  () => import('./IconCloseCaptions').then((m) => m.SpIconCloseCaptions as any),
  { ssr: false }
);
