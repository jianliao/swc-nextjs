import dynamic from 'next/dynamic';

import { IconFindAndReplace } from '@spectrum-web-components/icons-workflow/src/elements/IconFindAndReplace.js';

export const SpIconFindAndReplace = dynamic<IconFindAndReplace | { slot: string }>(
  () => import('./IconFindAndReplace').then((m) => m.SpIconFindAndReplace as any),
  { ssr: false}
);
