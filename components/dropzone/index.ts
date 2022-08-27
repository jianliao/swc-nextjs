import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Dropzone } from '@spectrum-web-components/dropzone';

const ssr = false;

export const SpDropzone = dynamic<
  | Dropzone
  | { children?: ReactNode }
  | { spDropzoneShouldAccept: Function }
  | { spDropzoneDragover: Function }
  | { spDropzoneDragleave: Function }
  | { spDropzoneDrop: Function }
>(() => import('./Dropzone').then((m) => m.SpDropzone as any), { ssr });
