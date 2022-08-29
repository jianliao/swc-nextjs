import dynamic from 'next/dynamic';

import { IconBranchCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconBranchCircle.js';

export const SpIconBranchCircle = dynamic<IconBranchCircle | { slot: string }>(
  () => import('./IconBranchCircle').then((m) => m.SpIconBranchCircle as any),
  { ssr: false }
);
