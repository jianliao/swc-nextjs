import dynamic from 'next/dynamic';

import { IconColorWheel } from '@spectrum-web-components/icons-workflow/src/elements/IconColorWheel.js';

export const SpIconColorWheel = dynamic<Partial<IconColorWheel> | { slot: string }>(
  () => import('./IconColorWheel').then((m) => m.SpIconColorWheel as any),
  { ssr: false }
);
