import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ButtonGroup } from '@spectrum-web-components/button-group';

const ssr = false;

export const SpButtonGroup = dynamic<ButtonGroup | { children?: ReactNode }>(
  () => import('./ButtonGroup').then((m) => m.SpButtonGroup as any),
  { ssr }
);
