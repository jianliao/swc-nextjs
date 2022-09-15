import dynamic from 'next/dynamic';

import { IconFilterDelete } from '@spectrum-web-components/icons-workflow/src/elements/IconFilterDelete.js';

export const SpIconFilterDelete = dynamic<Partial<IconFilterDelete> | { slot: string }>(
  () => import('./IconFilterDelete').then((m) => m.SpIconFilterDelete as any),
  { ssr: false }
);
