import dynamic from 'next/dynamic';

import { IconColumnTwoA } from '@spectrum-web-components/icons-workflow/src/elements/IconColumnTwoA.js';

export const SpIconColumnTwoA = dynamic<IconColumnTwoA | { slot: string }>(
  () => import('./IconColumnTwoA').then((m) => m.SpIconColumnTwoA as any),
  { ssr: false }
);
