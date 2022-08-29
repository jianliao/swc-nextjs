import dynamic from 'next/dynamic';

import { IconWorkflow } from '@spectrum-web-components/icons-workflow/src/elements/IconWorkflow.js';

export const SpIconWorkflow = dynamic<IconWorkflow | { slot: string }>(
  () => import('./IconWorkflow').then((m) => m.SpIconWorkflow as any),
  { ssr: false}
);
