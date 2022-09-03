import dynamic from 'next/dynamic';

import { IconDevicePreview } from '@spectrum-web-components/icons-workflow/src/elements/IconDevicePreview.js';

export const SpIconDevicePreview = dynamic<Partial<IconDevicePreview> | { slot: string }>(
  () => import('./IconDevicePreview').then((m) => m.SpIconDevicePreview as any),
  { ssr: false}
);
