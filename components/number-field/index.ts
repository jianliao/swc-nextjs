import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { NumberField } from '@spectrum-web-components/number-field';

const ssr = false;

export const SpNumberField = dynamic<
  | Partial<NumberField>
  | { children?: ReactNode }
  | { change: Function }
  | { input: Function }
  | { setSelectionRange: Function }
  | { select: Function }
  | { checkValidity: Function }
>(() => import('./NumberField').then((m) => m.SpNumberField as any), { ssr });
