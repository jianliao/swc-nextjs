import dynamic from 'next/dynamic';

import { IconFolderAddTo } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderAddTo.js';

export const SpIconFolderAddTo = dynamic<IconFolderAddTo | { slot: string }>(
  () => import('./IconFolderAddTo').then((m) => m.SpIconFolderAddTo as any),
  { ssr: false }
);
