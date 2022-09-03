import dynamic from 'next/dynamic';

import { IconSpam } from '@spectrum-web-components/icons-workflow/src/elements/IconSpam.js';

export const SpIconSpam = dynamic<Partial<IconSpam> | { slot: string }>(
  () => import('./IconSpam').then((m) => m.SpIconSpam as any),
  { ssr: false}
);
