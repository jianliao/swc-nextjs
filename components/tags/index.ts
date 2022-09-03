import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Tag } from '@spectrum-web-components/tags';
import { Tags } from '@spectrum-web-components/tags';

const ssr = false;

export const SpTag = dynamic<Partial<Tag> | { children?: ReactNode } | { delete: Function }>(
  () => import('./Tags').then((m) => m.SpTag as any),
  { ssr }
);
export const SpTags = dynamic<Partial<Tags> | { children?: ReactNode } | { focus: Function }>(
  () => import('./Tags').then((m) => m.SpTags as any),
  { ssr }
);
