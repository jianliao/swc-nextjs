import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Dropzone } from '@spectrum-web-components/dropzone';

import '@spectrum-web-components/dropzone/sp-dropzone.js';

export const SpDropzone = createComponent({
  react: React,
  tagName: 'sp-dropzone',
  elementClass: Dropzone,
  events: {
    onDragOver: 'onDragOver',
    onDragLeave: 'onDragLeave',
    onDrop: 'onDrop',
    spDropzoneShouldAccept: 'sp-dropzone-should-accept',
    spDropzoneDragover: 'sp-dropzone-dragover',
    spDropzoneDragleave: 'sp-dropzone-dragleave',
    spDropzoneDrop: 'sp-dropzone-drop',
  },
  displayName: 'SpDropzone',
});
