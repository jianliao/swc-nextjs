import dynamic from 'next/dynamic';

import { IconEngagement } from '@spectrum-web-components/icons-workflow/src/elements/IconEngagement.js';

export const SpIconEngagement = dynamic<IconEngagement | { slot: string }>(
  () => import('./IconEngagement').then((m) => m.SpIconEngagement as any),
  { ssr: false}
);
