import dynamic from 'next/dynamic';

import { IconViewList } from '@spectrum-web-components/icons-workflow/src/elements/IconViewList.js';

export const SpIconViewList = dynamic<IconViewList | { slot: string }>(
  () => import('./IconViewList').then((m) => m.SpIconViewList as any),
  { ssr: false }
);
