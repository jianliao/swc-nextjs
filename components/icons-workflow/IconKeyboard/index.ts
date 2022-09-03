import dynamic from 'next/dynamic';

import { IconKeyboard } from '@spectrum-web-components/icons-workflow/src/elements/IconKeyboard.js';

export const SpIconKeyboard = dynamic<Partial<IconKeyboard> | { slot: string }>(
  () => import('./IconKeyboard').then((m) => m.SpIconKeyboard as any),
  { ssr: false}
);
