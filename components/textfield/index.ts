import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Textfield } from '@spectrum-web-components/textfield';

const ssr = false;

export const SpTextfield = dynamic<
  | Partial<Textfield>
  | { children?: ReactNode }
  | { setSelectionRange: Function }
  | { select: Function }
  | { checkValidity: Function }
  | { change: Function }
  | { input: Function }
>(() => import('./Textfield').then((m) => m.SpTextfield as any), { ssr });
