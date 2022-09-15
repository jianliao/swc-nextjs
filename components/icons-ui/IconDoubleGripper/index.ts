import dynamic from 'next/dynamic';

import { IconDoubleGripper } from '@spectrum-web-components/icons-ui/src/elements/IconDoubleGripper.js';

export const SpIconDoubleGripper = dynamic<Partial<IconDoubleGripper> | { slot: string }>(
  () => import('./IconDoubleGripper').then((m) => m.SpIconDoubleGripper as any),
  { ssr: false }
);
