import dynamic from 'next/dynamic';

import { IconFileGlobe } from '@spectrum-web-components/icons-workflow/src/elements/IconFileGlobe.js';

export const SpIconFileGlobe = dynamic<Partial<IconFileGlobe> | { slot: string }>(
  () => import('./IconFileGlobe').then((m) => m.SpIconFileGlobe as any),
  { ssr: false }
);
