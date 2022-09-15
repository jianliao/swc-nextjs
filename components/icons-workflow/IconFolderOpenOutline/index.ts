import dynamic from 'next/dynamic';

import { IconFolderOpenOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderOpenOutline.js';

export const SpIconFolderOpenOutline = dynamic<Partial<IconFolderOpenOutline> | { slot: string }>(
  () => import('./IconFolderOpenOutline').then((m) => m.SpIconFolderOpenOutline as any),
  { ssr: false }
);
