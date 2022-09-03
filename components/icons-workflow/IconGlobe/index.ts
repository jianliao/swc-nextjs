import dynamic from 'next/dynamic';

import { IconGlobe } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobe.js';

export const SpIconGlobe = dynamic<Partial<IconGlobe> | { slot: string }>(
  () => import('./IconGlobe').then((m) => m.SpIconGlobe as any),
  { ssr: false}
);
