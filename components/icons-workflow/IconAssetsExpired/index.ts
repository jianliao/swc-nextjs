import dynamic from 'next/dynamic';

import { IconAssetsExpired } from '@spectrum-web-components/icons-workflow/src/elements/IconAssetsExpired.js';

export const SpIconAssetsExpired = dynamic<Partial<IconAssetsExpired> | { slot: string }>(
  () => import('./IconAssetsExpired').then((m) => m.SpIconAssetsExpired as any),
  { ssr: false}
);
