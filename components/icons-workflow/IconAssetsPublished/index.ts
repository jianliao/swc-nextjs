import dynamic from 'next/dynamic';

import { IconAssetsPublished } from '@spectrum-web-components/icons-workflow/src/elements/IconAssetsPublished.js';

export const SpIconAssetsPublished = dynamic<Partial<IconAssetsPublished> | { slot: string }>(
  () => import('./IconAssetsPublished').then((m) => m.SpIconAssetsPublished as any),
  { ssr: false }
);
