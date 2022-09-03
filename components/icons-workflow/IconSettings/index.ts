import dynamic from 'next/dynamic';

import { IconSettings } from '@spectrum-web-components/icons-workflow/src/elements/IconSettings.js';

export const SpIconSettings = dynamic<Partial<IconSettings> | { slot: string }>(
  () => import('./IconSettings').then((m) => m.SpIconSettings as any),
  { ssr: false}
);
