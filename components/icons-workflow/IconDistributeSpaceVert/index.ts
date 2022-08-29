import dynamic from 'next/dynamic';

import { IconDistributeSpaceVert } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeSpaceVert.js';

export const SpIconDistributeSpaceVert = dynamic<IconDistributeSpaceVert | { slot: string }>(
  () => import('./IconDistributeSpaceVert').then((m) => m.SpIconDistributeSpaceVert as any),
  { ssr: false }
);
