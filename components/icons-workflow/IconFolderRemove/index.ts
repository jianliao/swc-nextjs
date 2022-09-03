import dynamic from 'next/dynamic';

import { IconFolderRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderRemove.js';

export const SpIconFolderRemove = dynamic<Partial<IconFolderRemove> | { slot: string }>(
  () => import('./IconFolderRemove').then((m) => m.SpIconFolderRemove as any),
  { ssr: false}
);
