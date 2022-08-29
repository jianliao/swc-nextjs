import dynamic from 'next/dynamic';

import { IconFolderLocked } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderLocked.js';

export const SpIconFolderLocked = dynamic<IconFolderLocked | { slot: string }>(
  () => import('./IconFolderLocked').then((m) => m.SpIconFolderLocked as any),
  { ssr: false }
);
