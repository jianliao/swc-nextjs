import dynamic from 'next/dynamic';

import { IconPlatformDataMapping } from '@spectrum-web-components/icons-workflow/src/elements/IconPlatformDataMapping.js';

export const SpIconPlatformDataMapping = dynamic<Partial<IconPlatformDataMapping> | { slot: string }>(
  () => import('./IconPlatformDataMapping').then((m) => m.SpIconPlatformDataMapping as any),
  { ssr: false}
);
