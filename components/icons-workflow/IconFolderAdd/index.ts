import dynamic from 'next/dynamic';

import { IconFolderAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderAdd.js';

export const SpIconFolderAdd = dynamic<Partial<IconFolderAdd> | { slot: string }>(
  () => import('./IconFolderAdd').then((m) => m.SpIconFolderAdd as any),
  { ssr: false}
);
