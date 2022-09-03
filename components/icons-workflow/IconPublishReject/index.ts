import dynamic from 'next/dynamic';

import { IconPublishReject } from '@spectrum-web-components/icons-workflow/src/elements/IconPublishReject.js';

export const SpIconPublishReject = dynamic<Partial<IconPublishReject> | { slot: string }>(
  () => import('./IconPublishReject').then((m) => m.SpIconPublishReject as any),
  { ssr: false}
);
