import dynamic from 'next/dynamic';

import { IconTripleGripper } from '@spectrum-web-components/icons-ui/src/elements/IconTripleGripper.js';

export const SpIconTripleGripper = dynamic<Partial<IconTripleGripper> | { slot: string }>(
  () => import('./IconTripleGripper').then((m) => m.SpIconTripleGripper as any),
  { ssr: false}
);
