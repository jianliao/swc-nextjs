import dynamic from 'next/dynamic';

import { IconOutlinePath } from '@spectrum-web-components/icons-workflow/src/elements/IconOutlinePath.js';

export const SpIconOutlinePath = dynamic<IconOutlinePath | { slot: string }>(
  () => import('./IconOutlinePath').then((m) => m.SpIconOutlinePath as any),
  { ssr: false}
);
