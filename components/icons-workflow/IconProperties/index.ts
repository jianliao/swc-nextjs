import dynamic from 'next/dynamic';

import { IconProperties } from '@spectrum-web-components/icons-workflow/src/elements/IconProperties.js';

export const SpIconProperties = dynamic<IconProperties | { slot: string }>(
  () => import('./IconProperties').then((m) => m.SpIconProperties as any),
  { ssr: false}
);
