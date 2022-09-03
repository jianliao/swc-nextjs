import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Dropzone } from '@spectrum-web-components/dropzone';

const ssr = false;

export const SpDropzone = dynamic<
  | Partial<Dropzone>
  | { children?: ReactNode }
  | { onDragOver: Function }
  | { onDragLeave: Function }
  | { onDrop: Function }
  | { spDropzoneShouldAccept: Function }
  | { spDropzoneDragover: Function }
  | { spDropzoneDragleave: Function }
  | { spDropzoneDrop: Function }
>(() => import('./Dropzone').then((m) => m.SpDropzone as any), { ssr });
