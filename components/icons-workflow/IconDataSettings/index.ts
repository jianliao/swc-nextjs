import dynamic from 'next/dynamic';

import { IconDataSettings } from '@spectrum-web-components/icons-workflow/src/elements/IconDataSettings.js';

export const SpIconDataSettings = dynamic<Partial<IconDataSettings> | { slot: string }>(
  () => import('./IconDataSettings').then((m) => m.SpIconDataSettings as any),
  { ssr: false}
);
