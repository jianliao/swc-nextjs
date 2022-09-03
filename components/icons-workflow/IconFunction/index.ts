import dynamic from 'next/dynamic';

import { IconFunction } from '@spectrum-web-components/icons-workflow/src/elements/IconFunction.js';

export const SpIconFunction = dynamic<Partial<IconFunction> | { slot: string }>(
  () => import('./IconFunction').then((m) => m.SpIconFunction as any),
  { ssr: false}
);
