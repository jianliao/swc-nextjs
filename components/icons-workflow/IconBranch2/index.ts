import dynamic from 'next/dynamic';

import { IconBranch2 } from '@spectrum-web-components/icons-workflow/src/elements/IconBranch2.js';

export const SpIconBranch2 = dynamic<IconBranch2 | { slot: string }>(
  () => import('./IconBranch2').then((m) => m.SpIconBranch2 as any),
  { ssr: false}
);
