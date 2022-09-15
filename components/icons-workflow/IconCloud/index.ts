import dynamic from 'next/dynamic';

import { IconCloud } from '@spectrum-web-components/icons-workflow/src/elements/IconCloud.js';

export const SpIconCloud = dynamic<Partial<IconCloud> | { slot: string }>(
  () => import('./IconCloud').then((m) => m.SpIconCloud as any),
  { ssr: false }
);
