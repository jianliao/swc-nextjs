import dynamic from 'next/dynamic';

import { IconSaveTo } from '@spectrum-web-components/icons-workflow/src/elements/IconSaveTo.js';

export const SpIconSaveTo = dynamic<IconSaveTo | { slot: string }>(
  () => import('./IconSaveTo').then((m) => m.SpIconSaveTo as any),
  { ssr: false}
);
