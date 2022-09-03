import dynamic from 'next/dynamic';

import { IconUserDeveloper } from '@spectrum-web-components/icons-workflow/src/elements/IconUserDeveloper.js';

export const SpIconUserDeveloper = dynamic<Partial<IconUserDeveloper> | { slot: string }>(
  () => import('./IconUserDeveloper').then((m) => m.SpIconUserDeveloper as any),
  { ssr: false}
);
