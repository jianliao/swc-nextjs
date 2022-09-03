import dynamic from 'next/dynamic';

import { IconVisibilityOff } from '@spectrum-web-components/icons-workflow/src/elements/IconVisibilityOff.js';

export const SpIconVisibilityOff = dynamic<Partial<IconVisibilityOff> | { slot: string }>(
  () => import('./IconVisibilityOff').then((m) => m.SpIconVisibilityOff as any),
  { ssr: false}
);
