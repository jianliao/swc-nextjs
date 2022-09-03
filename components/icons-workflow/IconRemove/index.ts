import dynamic from 'next/dynamic';

import { IconRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconRemove.js';

export const SpIconRemove = dynamic<Partial<IconRemove> | { slot: string }>(
  () => import('./IconRemove').then((m) => m.SpIconRemove as any),
  { ssr: false}
);
