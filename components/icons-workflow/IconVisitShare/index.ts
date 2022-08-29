import dynamic from 'next/dynamic';

import { IconVisitShare } from '@spectrum-web-components/icons-workflow/src/elements/IconVisitShare.js';

export const SpIconVisitShare = dynamic<IconVisitShare | { slot: string }>(
  () => import('./IconVisitShare').then((m) => m.SpIconVisitShare as any),
  { ssr: false}
);
