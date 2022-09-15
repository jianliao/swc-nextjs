import dynamic from 'next/dynamic';

import { IconDuplicate } from '@spectrum-web-components/icons-workflow/src/elements/IconDuplicate.js';

export const SpIconDuplicate = dynamic<Partial<IconDuplicate> | { slot: string }>(
  () => import('./IconDuplicate').then((m) => m.SpIconDuplicate as any),
  { ssr: false }
);
