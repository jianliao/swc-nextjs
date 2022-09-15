import dynamic from 'next/dynamic';

import { IconGraphDonut } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphDonut.js';

export const SpIconGraphDonut = dynamic<Partial<IconGraphDonut> | { slot: string }>(
  () => import('./IconGraphDonut').then((m) => m.SpIconGraphDonut as any),
  { ssr: false }
);
