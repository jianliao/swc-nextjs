import dynamic from 'next/dynamic';

import { IconTagItalic } from '@spectrum-web-components/icons-workflow/src/elements/IconTagItalic.js';

export const SpIconTagItalic = dynamic<Partial<IconTagItalic> | { slot: string }>(
  () => import('./IconTagItalic').then((m) => m.SpIconTagItalic as any),
  { ssr: false}
);
