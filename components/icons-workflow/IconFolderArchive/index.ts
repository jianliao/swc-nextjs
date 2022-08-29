import dynamic from 'next/dynamic';

import { IconFolderArchive } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderArchive.js';

export const SpIconFolderArchive = dynamic<IconFolderArchive | { slot: string }>(
  () => import('./IconFolderArchive').then((m) => m.SpIconFolderArchive as any),
  { ssr: false}
);
