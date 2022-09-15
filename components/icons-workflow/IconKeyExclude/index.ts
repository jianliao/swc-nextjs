import dynamic from 'next/dynamic';

import { IconKeyExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconKeyExclude.js';

export const SpIconKeyExclude = dynamic<Partial<IconKeyExclude> | { slot: string }>(
  () => import('./IconKeyExclude').then((m) => m.SpIconKeyExclude as any),
  { ssr: false }
);
