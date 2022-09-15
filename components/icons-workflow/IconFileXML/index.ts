import dynamic from 'next/dynamic';

import { IconFileXML } from '@spectrum-web-components/icons-workflow/src/elements/IconFileXML.js';

export const SpIconFileXML = dynamic<Partial<IconFileXML> | { slot: string }>(
  () => import('./IconFileXML').then((m) => m.SpIconFileXML as any),
  { ssr: false }
);
