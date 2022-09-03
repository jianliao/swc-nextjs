import dynamic from 'next/dynamic';

import { IconFolderOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderOutline.js';

export const SpIconFolderOutline = dynamic<Partial<IconFolderOutline> | { slot: string }>(
  () => import('./IconFolderOutline').then((m) => m.SpIconFolderOutline as any),
  { ssr: false}
);
