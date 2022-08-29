import dynamic from 'next/dynamic';

import { IconGearsDelete } from '@spectrum-web-components/icons-workflow/src/elements/IconGearsDelete.js';

export const SpIconGearsDelete = dynamic<IconGearsDelete | { slot: string }>(
  () => import('./IconGearsDelete').then((m) => m.SpIconGearsDelete as any),
  { ssr: false}
);
