import dynamic from 'next/dynamic';

import { IconTestAB } from '@spectrum-web-components/icons-workflow/src/elements/IconTestAB.js';

export const SpIconTestAB = dynamic<Partial<IconTestAB> | { slot: string }>(
  () => import('./IconTestAB').then((m) => m.SpIconTestAB as any),
  { ssr: false }
);
