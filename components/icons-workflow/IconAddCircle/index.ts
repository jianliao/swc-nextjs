import dynamic from 'next/dynamic';

import { IconAddCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconAddCircle.js';

export const SpIconAddCircle = dynamic<Partial<IconAddCircle> | { slot: string }>(
  () => import('./IconAddCircle').then((m) => m.SpIconAddCircle as any),
  { ssr: false}
);
