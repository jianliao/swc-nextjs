import dynamic from 'next/dynamic';

import { IconAssetsAdded } from '@spectrum-web-components/icons-workflow/src/elements/IconAssetsAdded.js';

export const SpIconAssetsAdded = dynamic<Partial<IconAssetsAdded> | { slot: string }>(
  () => import('./IconAssetsAdded').then((m) => m.SpIconAssetsAdded as any),
  { ssr: false }
);
