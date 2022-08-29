import dynamic from 'next/dynamic';

import { IconPeopleGroup } from '@spectrum-web-components/icons-workflow/src/elements/IconPeopleGroup.js';

export const SpIconPeopleGroup = dynamic<IconPeopleGroup | { slot: string }>(
  () => import('./IconPeopleGroup').then((m) => m.SpIconPeopleGroup as any),
  { ssr: false}
);
