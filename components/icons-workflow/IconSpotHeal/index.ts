import dynamic from 'next/dynamic';

import { IconSpotHeal } from '@spectrum-web-components/icons-workflow/src/elements/IconSpotHeal.js';

export const SpIconSpotHeal = dynamic<Partial<IconSpotHeal> | { slot: string }>(
  () => import('./IconSpotHeal').then((m) => m.SpIconSpotHeal as any),
  { ssr: false}
);
