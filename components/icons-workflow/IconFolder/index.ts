import dynamic from 'next/dynamic';

import { IconFolder } from '@spectrum-web-components/icons-workflow/src/elements/IconFolder.js';

export const SpIconFolder = dynamic<Partial<IconFolder> | { slot: string }>(
  () => import('./IconFolder').then((m) => m.SpIconFolder as any),
  { ssr: false}
);
