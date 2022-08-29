import dynamic from 'next/dynamic';

import { IconDeselectCircular } from '@spectrum-web-components/icons-workflow/src/elements/IconDeselectCircular.js';

export const SpIconDeselectCircular = dynamic<IconDeselectCircular | { slot: string }>(
  () => import('./IconDeselectCircular').then((m) => m.SpIconDeselectCircular as any),
  { ssr: false}
);
