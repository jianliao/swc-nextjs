import dynamic from 'next/dynamic';

import { IconAnnotatePen } from '@spectrum-web-components/icons-workflow/src/elements/IconAnnotatePen.js';

export const SpIconAnnotatePen = dynamic<Partial<IconAnnotatePen> | { slot: string }>(
  () => import('./IconAnnotatePen').then((m) => m.SpIconAnnotatePen as any),
  { ssr: false}
);
