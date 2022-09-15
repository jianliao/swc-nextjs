import dynamic from 'next/dynamic';

import { IconGraphDonutAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphDonutAdd.js';

export const SpIconGraphDonutAdd = dynamic<Partial<IconGraphDonutAdd> | { slot: string }>(
  () => import('./IconGraphDonutAdd').then((m) => m.SpIconGraphDonutAdd as any),
  { ssr: false }
);
