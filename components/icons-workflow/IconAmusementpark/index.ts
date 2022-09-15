import dynamic from 'next/dynamic';

import { IconAmusementpark } from '@spectrum-web-components/icons-workflow/src/elements/IconAmusementpark.js';

export const SpIconAmusementpark = dynamic<Partial<IconAmusementpark> | { slot: string }>(
  () => import('./IconAmusementpark').then((m) => m.SpIconAmusementpark as any),
  { ssr: false }
);
