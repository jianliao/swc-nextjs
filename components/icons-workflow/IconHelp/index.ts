import dynamic from 'next/dynamic';

import { IconHelp } from '@spectrum-web-components/icons-workflow/src/elements/IconHelp.js';

export const SpIconHelp = dynamic<Partial<IconHelp> | { slot: string }>(
  () => import('./IconHelp').then((m) => m.SpIconHelp as any),
  { ssr: false }
);
