import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { FieldGroup } from '@spectrum-web-components/field-group';

const ssr = false;

export const SpFieldGroup = dynamic<Partial<FieldGroup> | { children?: ReactNode }>(
  () => import('./FieldGroup').then((m) => m.SpFieldGroup as any),
  { ssr }
);
