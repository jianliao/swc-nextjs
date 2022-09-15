import dynamic from 'next/dynamic';

import { IconHomepage } from '@spectrum-web-components/icons-workflow/src/elements/IconHomepage.js';

export const SpIconHomepage = dynamic<Partial<IconHomepage> | { slot: string }>(
  () => import('./IconHomepage').then((m) => m.SpIconHomepage as any),
  { ssr: false }
);
