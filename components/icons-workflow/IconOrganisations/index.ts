import dynamic from 'next/dynamic';

import { IconOrganisations } from '@spectrum-web-components/icons-workflow/src/elements/IconOrganisations.js';

export const SpIconOrganisations = dynamic<IconOrganisations | { slot: string }>(
  () => import('./IconOrganisations').then((m) => m.SpIconOrganisations as any),
  { ssr: false }
);
