import dynamic from 'next/dynamic';

import { IconFullScreenExit } from '@spectrum-web-components/icons-workflow/src/elements/IconFullScreenExit.js';

export const SpIconFullScreenExit = dynamic<Partial<IconFullScreenExit> | { slot: string }>(
  () => import('./IconFullScreenExit').then((m) => m.SpIconFullScreenExit as any),
  { ssr: false}
);
