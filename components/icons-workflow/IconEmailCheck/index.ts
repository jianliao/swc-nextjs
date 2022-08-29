import dynamic from 'next/dynamic';

import { IconEmailCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailCheck.js';

export const SpIconEmailCheck = dynamic<IconEmailCheck | { slot: string }>(
  () => import('./IconEmailCheck').then((m) => m.SpIconEmailCheck as any),
  { ssr: false}
);
