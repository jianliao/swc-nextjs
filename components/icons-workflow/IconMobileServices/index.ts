import dynamic from 'next/dynamic';

import { IconMobileServices } from '@spectrum-web-components/icons-workflow/src/elements/IconMobileServices.js';

export const SpIconMobileServices = dynamic<Partial<IconMobileServices> | { slot: string }>(
  () => import('./IconMobileServices').then((m) => m.SpIconMobileServices as any),
  { ssr: false }
);
