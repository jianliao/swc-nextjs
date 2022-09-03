import dynamic from 'next/dynamic';

import { IconCloudError } from '@spectrum-web-components/icons-workflow/src/elements/IconCloudError.js';

export const SpIconCloudError = dynamic<Partial<IconCloudError> | { slot: string }>(
  () => import('./IconCloudError').then((m) => m.SpIconCloudError as any),
  { ssr: false}
);
