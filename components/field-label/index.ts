import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { FieldLabel } from '@spectrum-web-components/field-label';

const ssr = false;

export const SpFieldLabel = dynamic<FieldLabel | { children?: ReactNode }>(() => import('./FieldLabel').then(m => m.SpFieldLabel as any), { ssr });

