import dynamic from 'next/dynamic';

import { IconSelectCircular } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectCircular.js';

export const SpIconSelectCircular = dynamic<Partial<IconSelectCircular> | { slot: string }>(
  () => import('./IconSelectCircular').then((m) => m.SpIconSelectCircular as any),
  { ssr: false }
);
