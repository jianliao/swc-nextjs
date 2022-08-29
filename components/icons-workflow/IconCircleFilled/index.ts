import dynamic from 'next/dynamic';

import { IconCircleFilled } from '@spectrum-web-components/icons-workflow/src/elements/IconCircleFilled.js';

export const SpIconCircleFilled = dynamic<IconCircleFilled | { slot: string }>(
  () => import('./IconCircleFilled').then((m) => m.SpIconCircleFilled as any),
  { ssr: false}
);
