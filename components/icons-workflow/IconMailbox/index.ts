import dynamic from 'next/dynamic';

import { IconMailbox } from '@spectrum-web-components/icons-workflow/src/elements/IconMailbox.js';

export const SpIconMailbox = dynamic<Partial<IconMailbox> | { slot: string }>(
  () => import('./IconMailbox').then((m) => m.SpIconMailbox as any),
  { ssr: false}
);
