import dynamic from 'next/dynamic';

import { IconBranch1 } from '@spectrum-web-components/icons-workflow/src/elements/IconBranch1.js';

export const SpIconBranch1 = dynamic<IconBranch1 | { slot: string }>(
  () => import('./IconBranch1').then((m) => m.SpIconBranch1 as any),
  { ssr: false }
);
