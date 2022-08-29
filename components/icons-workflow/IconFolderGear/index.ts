import dynamic from 'next/dynamic';

import { IconFolderGear } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderGear.js';

export const SpIconFolderGear = dynamic<IconFolderGear | { slot: string }>(
  () => import('./IconFolderGear').then((m) => m.SpIconFolderGear as any),
  { ssr: false}
);
