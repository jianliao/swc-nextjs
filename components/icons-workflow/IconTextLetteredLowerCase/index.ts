import dynamic from 'next/dynamic';

import { IconTextLetteredLowerCase } from '@spectrum-web-components/icons-workflow/src/elements/IconTextLetteredLowerCase.js';

export const SpIconTextLetteredLowerCase = dynamic<
  Partial<IconTextLetteredLowerCase> | { slot: string }
>(() => import('./IconTextLetteredLowerCase').then((m) => m.SpIconTextLetteredLowerCase as any), {
  ssr: false,
});
