import dynamic from 'next/dynamic';

import { IconSubtractBackPath } from '@spectrum-web-components/icons-workflow/src/elements/IconSubtractBackPath.js';

export const SpIconSubtractBackPath = dynamic<Partial<IconSubtractBackPath> | { slot: string }>(
  () => import('./IconSubtractBackPath').then((m) => m.SpIconSubtractBackPath as any),
  { ssr: false}
);
