import dynamic from 'next/dynamic';

import { IconPlug } from '@spectrum-web-components/icons-workflow/src/elements/IconPlug.js';

export const SpIconPlug = dynamic<Partial<IconPlug> | { slot: string }>(
  () => import('./IconPlug').then((m) => m.SpIconPlug as any),
  { ssr: false }
);
