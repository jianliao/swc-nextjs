import dynamic from 'next/dynamic';

import { IconVisit } from '@spectrum-web-components/icons-workflow/src/elements/IconVisit.js';

export const SpIconVisit = dynamic<IconVisit | { slot: string }>(
  () => import('./IconVisit').then((m) => m.SpIconVisit as any),
  { ssr: false}
);
