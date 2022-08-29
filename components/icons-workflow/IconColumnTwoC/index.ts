import dynamic from 'next/dynamic';

import { IconColumnTwoC } from '@spectrum-web-components/icons-workflow/src/elements/IconColumnTwoC.js';

export const SpIconColumnTwoC = dynamic<IconColumnTwoC | { slot: string }>(
  () => import('./IconColumnTwoC').then((m) => m.SpIconColumnTwoC as any),
  { ssr: false}
);
