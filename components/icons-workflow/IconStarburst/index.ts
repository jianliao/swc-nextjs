import dynamic from 'next/dynamic';

import { IconStarburst } from '@spectrum-web-components/icons-workflow/src/elements/IconStarburst.js';

export const SpIconStarburst = dynamic<Partial<IconStarburst> | { slot: string }>(
  () => import('./IconStarburst').then((m) => m.SpIconStarburst as any),
  { ssr: false}
);
