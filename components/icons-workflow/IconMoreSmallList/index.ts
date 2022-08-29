import dynamic from 'next/dynamic';

import { IconMoreSmallList } from '@spectrum-web-components/icons-workflow/src/elements/IconMoreSmallList.js';

export const SpIconMoreSmallList = dynamic<IconMoreSmallList | { slot: string }>(
  () => import('./IconMoreSmallList').then((m) => m.SpIconMoreSmallList as any),
  { ssr: false}
);
