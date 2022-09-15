import dynamic from 'next/dynamic';

import { IconWorkflowAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconWorkflowAdd.js';

export const SpIconWorkflowAdd = dynamic<Partial<IconWorkflowAdd> | { slot: string }>(
  () => import('./IconWorkflowAdd').then((m) => m.SpIconWorkflowAdd as any),
  { ssr: false }
);
