import dynamic from 'next/dynamic';

import { IconGearsAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconGearsAdd.js';

export const SpIconGearsAdd = dynamic<IconGearsAdd | { slot: string }>(
  () => import('./IconGearsAdd').then((m) => m.SpIconGearsAdd as any),
  { ssr: false}
);
