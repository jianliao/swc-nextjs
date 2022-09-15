import dynamic from 'next/dynamic';

import { IconDateInput } from '@spectrum-web-components/icons-workflow/src/elements/IconDateInput.js';

export const SpIconDateInput = dynamic<Partial<IconDateInput> | { slot: string }>(
  () => import('./IconDateInput').then((m) => m.SpIconDateInput as any),
  { ssr: false }
);
