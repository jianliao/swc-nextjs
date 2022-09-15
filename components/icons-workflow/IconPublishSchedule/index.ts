import dynamic from 'next/dynamic';

import { IconPublishSchedule } from '@spectrum-web-components/icons-workflow/src/elements/IconPublishSchedule.js';

export const SpIconPublishSchedule = dynamic<Partial<IconPublishSchedule> | { slot: string }>(
  () => import('./IconPublishSchedule').then((m) => m.SpIconPublishSchedule as any),
  { ssr: false }
);
