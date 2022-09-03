import dynamic from 'next/dynamic';

import { IconFileTxt } from '@spectrum-web-components/icons-workflow/src/elements/IconFileTxt.js';

export const SpIconFileTxt = dynamic<Partial<IconFileTxt> | { slot: string }>(
  () => import('./IconFileTxt').then((m) => m.SpIconFileTxt as any),
  { ssr: false}
);
