import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { HelpText } from '@spectrum-web-components/help-text';

const ssr = false;

export const SpHelpText = dynamic<Partial<HelpText> | { children?: ReactNode }>(
  () => import('./HelpText').then((m) => m.SpHelpText as any),
  { ssr }
);
