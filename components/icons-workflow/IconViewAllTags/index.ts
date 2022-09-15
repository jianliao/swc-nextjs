import dynamic from 'next/dynamic';

import { IconViewAllTags } from '@spectrum-web-components/icons-workflow/src/elements/IconViewAllTags.js';

export const SpIconViewAllTags = dynamic<Partial<IconViewAllTags> | { slot: string }>(
  () => import('./IconViewAllTags').then((m) => m.SpIconViewAllTags as any),
  { ssr: false }
);
