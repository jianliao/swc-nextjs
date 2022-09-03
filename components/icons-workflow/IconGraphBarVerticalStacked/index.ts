import dynamic from 'next/dynamic';

import { IconGraphBarVerticalStacked } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBarVerticalStacked.js';

export const SpIconGraphBarVerticalStacked = dynamic<Partial<IconGraphBarVerticalStacked> | { slot: string }>(
  () => import('./IconGraphBarVerticalStacked').then((m) => m.SpIconGraphBarVerticalStacked as any),
  { ssr: false}
);
