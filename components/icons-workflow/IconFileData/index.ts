import dynamic from 'next/dynamic';

import { IconFileData } from '@spectrum-web-components/icons-workflow/src/elements/IconFileData.js';

export const SpIconFileData = dynamic<Partial<IconFileData> | { slot: string }>(
  () => import('./IconFileData').then((m) => m.SpIconFileData as any),
  { ssr: false}
);
