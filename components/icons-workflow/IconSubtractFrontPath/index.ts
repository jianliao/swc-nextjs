import dynamic from 'next/dynamic';

import { IconSubtractFrontPath } from '@spectrum-web-components/icons-workflow/src/elements/IconSubtractFrontPath.js';

export const SpIconSubtractFrontPath = dynamic<Partial<IconSubtractFrontPath> | { slot: string }>(
  () => import('./IconSubtractFrontPath').then((m) => m.SpIconSubtractFrontPath as any),
  { ssr: false }
);
