import dynamic from 'next/dynamic';

import { IconFileWorkflow } from '@spectrum-web-components/icons-workflow/src/elements/IconFileWorkflow.js';

export const SpIconFileWorkflow = dynamic<Partial<IconFileWorkflow> | { slot: string }>(
  () => import('./IconFileWorkflow').then((m) => m.SpIconFileWorkflow as any),
  { ssr: false }
);
