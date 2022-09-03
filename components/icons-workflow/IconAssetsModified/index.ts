import dynamic from 'next/dynamic';

import { IconAssetsModified } from '@spectrum-web-components/icons-workflow/src/elements/IconAssetsModified.js';

export const SpIconAssetsModified = dynamic<Partial<IconAssetsModified> | { slot: string }>(
  () => import('./IconAssetsModified').then((m) => m.SpIconAssetsModified as any),
  { ssr: false}
);
