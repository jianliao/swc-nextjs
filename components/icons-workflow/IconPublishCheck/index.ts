import dynamic from 'next/dynamic';

import { IconPublishCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconPublishCheck.js';

export const SpIconPublishCheck = dynamic<Partial<IconPublishCheck> | { slot: string }>(
  () => import('./IconPublishCheck').then((m) => m.SpIconPublishCheck as any),
  { ssr: false}
);
