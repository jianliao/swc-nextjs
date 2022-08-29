import dynamic from 'next/dynamic';

import { IconTestABGear } from '@spectrum-web-components/icons-workflow/src/elements/IconTestABGear.js';

export const SpIconTestABGear = dynamic<IconTestABGear | { slot: string }>(
  () => import('./IconTestABGear').then((m) => m.SpIconTestABGear as any),
  { ssr: false }
);
