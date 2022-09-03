import dynamic from 'next/dynamic';

import { IconMapView } from '@spectrum-web-components/icons-workflow/src/elements/IconMapView.js';

export const SpIconMapView = dynamic<Partial<IconMapView> | { slot: string }>(
  () => import('./IconMapView').then((m) => m.SpIconMapView as any),
  { ssr: false}
);
