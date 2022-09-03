import dynamic from 'next/dynamic';

import { IconFilePDF } from '@spectrum-web-components/icons-workflow/src/elements/IconFilePDF.js';

export const SpIconFilePDF = dynamic<Partial<IconFilePDF> | { slot: string }>(
  () => import('./IconFilePDF').then((m) => m.SpIconFilePDF as any),
  { ssr: false}
);
