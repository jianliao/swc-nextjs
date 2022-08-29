import dynamic from 'next/dynamic';

import { IconTestProfile } from '@spectrum-web-components/icons-workflow/src/elements/IconTestProfile.js';

export const SpIconTestProfile = dynamic<IconTestProfile | { slot: string }>(
  () => import('./IconTestProfile').then((m) => m.SpIconTestProfile as any),
  { ssr: false }
);
