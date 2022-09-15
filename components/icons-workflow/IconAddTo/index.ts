import dynamic from 'next/dynamic';

import { IconAddTo } from '@spectrum-web-components/icons-workflow/src/elements/IconAddTo.js';

export const SpIconAddTo = dynamic<Partial<IconAddTo> | { slot: string }>(
  () => import('./IconAddTo').then((m) => m.SpIconAddTo as any),
  { ssr: false }
);
