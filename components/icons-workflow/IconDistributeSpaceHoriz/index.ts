import dynamic from 'next/dynamic';

import { IconDistributeSpaceHoriz } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeSpaceHoriz.js';

export const SpIconDistributeSpaceHoriz = dynamic<Partial<IconDistributeSpaceHoriz> | { slot: string }>(
  () => import('./IconDistributeSpaceHoriz').then((m) => m.SpIconDistributeSpaceHoriz as any),
  { ssr: false}
);
