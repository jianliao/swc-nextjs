import dynamic from 'next/dynamic';

import { IconFileJson } from '@spectrum-web-components/icons-workflow/src/elements/IconFileJson.js';

export const SpIconFileJson = dynamic<Partial<IconFileJson> | { slot: string }>(
  () => import('./IconFileJson').then((m) => m.SpIconFileJson as any),
  { ssr: false}
);
