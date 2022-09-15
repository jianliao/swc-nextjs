import dynamic from 'next/dynamic';

import { IconEventShare } from '@spectrum-web-components/icons-workflow/src/elements/IconEventShare.js';

export const SpIconEventShare = dynamic<Partial<IconEventShare> | { slot: string }>(
  () => import('./IconEventShare').then((m) => m.SpIconEventShare as any),
  { ssr: false }
);
