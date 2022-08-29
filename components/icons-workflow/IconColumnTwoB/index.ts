import dynamic from 'next/dynamic';

import { IconColumnTwoB } from '@spectrum-web-components/icons-workflow/src/elements/IconColumnTwoB.js';

export const SpIconColumnTwoB = dynamic<IconColumnTwoB | { slot: string }>(
  () => import('./IconColumnTwoB').then((m) => m.SpIconColumnTwoB as any),
  { ssr: false}
);
