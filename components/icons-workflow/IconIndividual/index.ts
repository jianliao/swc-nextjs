import dynamic from 'next/dynamic';

import { IconIndividual } from '@spectrum-web-components/icons-workflow/src/elements/IconIndividual.js';

export const SpIconIndividual = dynamic<Partial<IconIndividual> | { slot: string }>(
  () => import('./IconIndividual').then((m) => m.SpIconIndividual as any),
  { ssr: false }
);
