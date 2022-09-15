import dynamic from 'next/dynamic';

import { IconFilingCabinet } from '@spectrum-web-components/icons-workflow/src/elements/IconFilingCabinet.js';

export const SpIconFilingCabinet = dynamic<Partial<IconFilingCabinet> | { slot: string }>(
  () => import('./IconFilingCabinet').then((m) => m.SpIconFilingCabinet as any),
  { ssr: false }
);
