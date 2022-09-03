import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ActionGroup } from '@spectrum-web-components/action-group';

const ssr = false;

export const SpActionGroup = dynamic<
  Partial<ActionGroup> | { children?: ReactNode } | { focus: Function } | { change: Function }
>(() => import('./ActionGroup').then((m) => m.SpActionGroup as any), { ssr });
