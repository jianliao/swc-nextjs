import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Dropzone } from '@spectrum-web-components/dropzone';

const ssr = false;

export const SpDropzone = dynamic<Dropzone | { children?: ReactNode }>(
  () => import('./Dropzone').then((m) => m.SpDropzone as any),
  { ssr }
);
