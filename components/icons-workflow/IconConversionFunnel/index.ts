import dynamic from 'next/dynamic';

import { IconConversionFunnel } from '@spectrum-web-components/icons-workflow/src/elements/IconConversionFunnel.js';

export const SpIconConversionFunnel = dynamic<IconConversionFunnel | { slot: string }>(
  () => import('./IconConversionFunnel').then((m) => m.SpIconConversionFunnel as any),
  { ssr: false}
);
