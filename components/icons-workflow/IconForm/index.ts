import dynamic from 'next/dynamic';

import { IconForm } from '@spectrum-web-components/icons-workflow/src/elements/IconForm.js';

export const SpIconForm = dynamic<IconForm | { slot: string }>(
  () => import('./IconForm').then((m) => m.SpIconForm as any),
  { ssr: false}
);
