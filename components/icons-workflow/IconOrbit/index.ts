import dynamic from 'next/dynamic';

import { IconOrbit } from '@spectrum-web-components/icons-workflow/src/elements/IconOrbit.js';

export const SpIconOrbit = dynamic<IconOrbit | { slot: string }>(
  () => import('./IconOrbit').then((m) => m.SpIconOrbit as any),
  { ssr: false}
);
