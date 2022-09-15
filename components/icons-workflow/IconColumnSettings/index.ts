import dynamic from 'next/dynamic';

import { IconColumnSettings } from '@spectrum-web-components/icons-workflow/src/elements/IconColumnSettings.js';

export const SpIconColumnSettings = dynamic<Partial<IconColumnSettings> | { slot: string }>(
  () => import('./IconColumnSettings').then((m) => m.SpIconColumnSettings as any),
  { ssr: false }
);
