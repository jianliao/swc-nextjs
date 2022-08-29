import dynamic from 'next/dynamic';

import { IconBoolean } from '@spectrum-web-components/icons-workflow/src/elements/IconBoolean.js';

export const SpIconBoolean = dynamic<IconBoolean | { slot: string }>(
  () => import('./IconBoolean').then((m) => m.SpIconBoolean as any),
  { ssr: false}
);
