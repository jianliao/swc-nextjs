import dynamic from 'next/dynamic';

import { IconOrganize } from '@spectrum-web-components/icons-workflow/src/elements/IconOrganize.js';

export const SpIconOrganize = dynamic<Partial<IconOrganize> | { slot: string }>(
  () => import('./IconOrganize').then((m) => m.SpIconOrganize as any),
  { ssr: false}
);
