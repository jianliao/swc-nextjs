import dynamic from 'next/dynamic';

import { IconAttributes } from '@spectrum-web-components/icons-workflow/src/elements/IconAttributes.js';

export const SpIconAttributes = dynamic<Partial<IconAttributes> | { slot: string }>(
  () => import('./IconAttributes').then((m) => m.SpIconAttributes as any),
  { ssr: false}
);
