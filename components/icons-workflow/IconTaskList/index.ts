import dynamic from 'next/dynamic';

import { IconTaskList } from '@spectrum-web-components/icons-workflow/src/elements/IconTaskList.js';

export const SpIconTaskList = dynamic<Partial<IconTaskList> | { slot: string }>(
  () => import('./IconTaskList').then((m) => m.SpIconTaskList as any),
  { ssr: false }
);
