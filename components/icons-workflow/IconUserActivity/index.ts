import dynamic from 'next/dynamic';

import { IconUserActivity } from '@spectrum-web-components/icons-workflow/src/elements/IconUserActivity.js';

export const SpIconUserActivity = dynamic<Partial<IconUserActivity> | { slot: string }>(
  () => import('./IconUserActivity').then((m) => m.SpIconUserActivity as any),
  { ssr: false }
);
