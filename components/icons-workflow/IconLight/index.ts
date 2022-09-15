import dynamic from 'next/dynamic';

import { IconLight } from '@spectrum-web-components/icons-workflow/src/elements/IconLight.js';

export const SpIconLight = dynamic<Partial<IconLight> | { slot: string }>(
  () => import('./IconLight').then((m) => m.SpIconLight as any),
  { ssr: false }
);
