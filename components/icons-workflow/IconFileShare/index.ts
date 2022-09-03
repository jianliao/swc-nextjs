import dynamic from 'next/dynamic';

import { IconFileShare } from '@spectrum-web-components/icons-workflow/src/elements/IconFileShare.js';

export const SpIconFileShare = dynamic<Partial<IconFileShare> | { slot: string }>(
  () => import('./IconFileShare').then((m) => m.SpIconFileShare as any),
  { ssr: false}
);
