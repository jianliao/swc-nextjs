import dynamic from 'next/dynamic';

import { IconWrench } from '@spectrum-web-components/icons-workflow/src/elements/IconWrench.js';

export const SpIconWrench = dynamic<Partial<IconWrench> | { slot: string }>(
  () => import('./IconWrench').then((m) => m.SpIconWrench as any),
  { ssr: false}
);
