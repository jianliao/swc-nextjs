import dynamic from 'next/dynamic';

import { IconFolderUser } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderUser.js';

export const SpIconFolderUser = dynamic<Partial<IconFolderUser> | { slot: string }>(
  () => import('./IconFolderUser').then((m) => m.SpIconFolderUser as any),
  { ssr: false }
);
