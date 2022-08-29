import dynamic from 'next/dynamic';

import { IconFileMobile } from '@spectrum-web-components/icons-workflow/src/elements/IconFileMobile.js';

export const SpIconFileMobile = dynamic<IconFileMobile | { slot: string }>(
  () => import('./IconFileMobile').then((m) => m.SpIconFileMobile as any),
  { ssr: false}
);
