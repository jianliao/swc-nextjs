import dynamic from 'next/dynamic';

import { IconReport } from '@spectrum-web-components/icons-workflow/src/elements/IconReport.js';

export const SpIconReport = dynamic<Partial<IconReport> | { slot: string }>(
  () => import('./IconReport').then((m) => m.SpIconReport as any),
  { ssr: false}
);
