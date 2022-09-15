import dynamic from 'next/dynamic';

import { IconTextLetteredUpperCase } from '@spectrum-web-components/icons-workflow/src/elements/IconTextLetteredUpperCase.js';

export const SpIconTextLetteredUpperCase = dynamic<
  Partial<IconTextLetteredUpperCase> | { slot: string }
>(() => import('./IconTextLetteredUpperCase').then((m) => m.SpIconTextLetteredUpperCase as any), {
  ssr: false,
});
