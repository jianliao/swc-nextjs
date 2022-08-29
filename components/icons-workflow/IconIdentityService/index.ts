import dynamic from 'next/dynamic';

import { IconIdentityService } from '@spectrum-web-components/icons-workflow/src/elements/IconIdentityService.js';

export const SpIconIdentityService = dynamic<IconIdentityService | { slot: string }>(
  () => import('./IconIdentityService').then((m) => m.SpIconIdentityService as any),
  { ssr: false}
);
