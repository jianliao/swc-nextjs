import dynamic from 'next/dynamic';

import { IconFileSpace } from '@spectrum-web-components/icons-workflow/src/elements/IconFileSpace.js';

export const SpIconFileSpace = dynamic<IconFileSpace | { slot: string }>(
  () => import('./IconFileSpace').then((m) => m.SpIconFileSpace as any),
  { ssr: false }
);
