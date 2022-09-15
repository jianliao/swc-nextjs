import dynamic from 'next/dynamic';

import { IconReportAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconReportAdd.js';

export const SpIconReportAdd = dynamic<Partial<IconReportAdd> | { slot: string }>(
  () => import('./IconReportAdd').then((m) => m.SpIconReportAdd as any),
  { ssr: false }
);
