import dynamic from 'next/dynamic';

import { IconCalculator } from '@spectrum-web-components/icons-workflow/src/elements/IconCalculator.js';

export const SpIconCalculator = dynamic<IconCalculator | { slot: string }>(
  () => import('./IconCalculator').then((m) => m.SpIconCalculator as any),
  { ssr: false }
);
