import dynamic from 'next/dynamic';

import { IconSingleGripper } from '@spectrum-web-components/icons-ui/src/elements/IconSingleGripper.js';

export const SpIconSingleGripper = dynamic<IconSingleGripper | { slot: string }>(
  () => import('./IconSingleGripper').then((m) => m.SpIconSingleGripper as any),
  { ssr: false }
);
