import dynamic from 'next/dynamic';

import { IconLine } from '@spectrum-web-components/icons-workflow/src/elements/IconLine.js';

export const SpIconLine = dynamic<IconLine | { slot: string }>(
  () => import('./IconLine').then((m) => m.SpIconLine as any),
  { ssr: false}
);
