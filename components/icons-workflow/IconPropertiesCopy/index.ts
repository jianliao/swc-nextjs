import dynamic from 'next/dynamic';

import { IconPropertiesCopy } from '@spectrum-web-components/icons-workflow/src/elements/IconPropertiesCopy.js';

export const SpIconPropertiesCopy = dynamic<Partial<IconPropertiesCopy> | { slot: string }>(
  () => import('./IconPropertiesCopy').then((m) => m.SpIconPropertiesCopy as any),
  { ssr: false}
);
