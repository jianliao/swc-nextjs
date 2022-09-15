import dynamic from 'next/dynamic';

import { IconBug } from '@spectrum-web-components/icons-workflow/src/elements/IconBug.js';

export const SpIconBug = dynamic<Partial<IconBug> | { slot: string }>(
  () => import('./IconBug').then((m) => m.SpIconBug as any),
  { ssr: false }
);
