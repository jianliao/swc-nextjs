import dynamic from 'next/dynamic';

import { IconFeedManagement } from '@spectrum-web-components/icons-workflow/src/elements/IconFeedManagement.js';

export const SpIconFeedManagement = dynamic<Partial<IconFeedManagement> | { slot: string }>(
  () => import('./IconFeedManagement').then((m) => m.SpIconFeedManagement as any),
  { ssr: false}
);
