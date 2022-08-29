import dynamic from 'next/dynamic';

import { IconDataUnavailable } from '@spectrum-web-components/icons-workflow/src/elements/IconDataUnavailable.js';

export const SpIconDataUnavailable = dynamic<IconDataUnavailable | { slot: string }>(
  () => import('./IconDataUnavailable').then((m) => m.SpIconDataUnavailable as any),
  { ssr: false }
);
