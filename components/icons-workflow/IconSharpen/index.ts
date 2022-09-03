import dynamic from 'next/dynamic';

import { IconSharpen } from '@spectrum-web-components/icons-workflow/src/elements/IconSharpen.js';

export const SpIconSharpen = dynamic<Partial<IconSharpen> | { slot: string }>(
  () => import('./IconSharpen').then((m) => m.SpIconSharpen as any),
  { ssr: false}
);
