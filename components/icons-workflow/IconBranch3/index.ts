import dynamic from 'next/dynamic';

import { IconBranch3 } from '@spectrum-web-components/icons-workflow/src/elements/IconBranch3.js';

export const SpIconBranch3 = dynamic<Partial<IconBranch3> | { slot: string }>(
  () => import('./IconBranch3').then((m) => m.SpIconBranch3 as any),
  { ssr: false }
);
