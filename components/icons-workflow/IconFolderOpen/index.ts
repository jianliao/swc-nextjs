import dynamic from 'next/dynamic';

import { IconFolderOpen } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderOpen.js';

export const SpIconFolderOpen = dynamic<IconFolderOpen | { slot: string }>(
  () => import('./IconFolderOpen').then((m) => m.SpIconFolderOpen as any),
  { ssr: false }
);
