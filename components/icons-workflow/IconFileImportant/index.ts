import dynamic from 'next/dynamic';

import { IconFileImportant } from '@spectrum-web-components/icons-workflow/src/elements/IconFileImportant.js';

export const SpIconFileImportant = dynamic<Partial<IconFileImportant> | { slot: string }>(
  () => import('./IconFileImportant').then((m) => m.SpIconFileImportant as any),
  { ssr: false}
);
