import dynamic from 'next/dynamic';

import { IconExposure } from '@spectrum-web-components/icons-workflow/src/elements/IconExposure.js';

export const SpIconExposure = dynamic<Partial<IconExposure> | { slot: string }>(
  () => import('./IconExposure').then((m) => m.SpIconExposure as any),
  { ssr: false }
);
