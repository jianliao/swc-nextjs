import dynamic from 'next/dynamic';

import { IconFileFolder } from '@spectrum-web-components/icons-workflow/src/elements/IconFileFolder.js';

export const SpIconFileFolder = dynamic<Partial<IconFileFolder> | { slot: string }>(
  () => import('./IconFileFolder').then((m) => m.SpIconFileFolder as any),
  { ssr: false}
);
