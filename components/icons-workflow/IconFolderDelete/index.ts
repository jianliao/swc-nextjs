import dynamic from 'next/dynamic';

import { IconFolderDelete } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderDelete.js';

export const SpIconFolderDelete = dynamic<Partial<IconFolderDelete> | { slot: string }>(
  () => import('./IconFolderDelete').then((m) => m.SpIconFolderDelete as any),
  { ssr: false}
);
