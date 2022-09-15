import dynamic from 'next/dynamic';

import { IconUngroup } from '@spectrum-web-components/icons-workflow/src/elements/IconUngroup.js';

export const SpIconUngroup = dynamic<Partial<IconUngroup> | { slot: string }>(
  () => import('./IconUngroup').then((m) => m.SpIconUngroup as any),
  { ssr: false }
);
