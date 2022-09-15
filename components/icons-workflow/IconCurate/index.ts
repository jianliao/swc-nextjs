import dynamic from 'next/dynamic';

import { IconCurate } from '@spectrum-web-components/icons-workflow/src/elements/IconCurate.js';

export const SpIconCurate = dynamic<Partial<IconCurate> | { slot: string }>(
  () => import('./IconCurate').then((m) => m.SpIconCurate as any),
  { ssr: false }
);
