import dynamic from 'next/dynamic';

import { IconShareLight } from '@spectrum-web-components/icons-workflow/src/elements/IconShareLight.js';

export const SpIconShareLight = dynamic<Partial<IconShareLight> | { slot: string }>(
  () => import('./IconShareLight').then((m) => m.SpIconShareLight as any),
  { ssr: false}
);
