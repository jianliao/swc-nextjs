import dynamic from 'next/dynamic';

import { IconLocationContribution } from '@spectrum-web-components/icons-workflow/src/elements/IconLocationContribution.js';

export const SpIconLocationContribution = dynamic<Partial<IconLocationContribution> | { slot: string }>(
  () => import('./IconLocationContribution').then((m) => m.SpIconLocationContribution as any),
  { ssr: false}
);
