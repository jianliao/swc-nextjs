import dynamic from 'next/dynamic';

import { IconTextSubscript } from '@spectrum-web-components/icons-workflow/src/elements/IconTextSubscript.js';

export const SpIconTextSubscript = dynamic<Partial<IconTextSubscript> | { slot: string }>(
  () => import('./IconTextSubscript').then((m) => m.SpIconTextSubscript as any),
  { ssr: false }
);
