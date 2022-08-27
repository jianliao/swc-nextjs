import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Dropzone } from '@spectrum-web-components/dropzone';

import '@spectrum-web-components/dropzone/sp-dropzone.js';

export const SpDropzone = createComponent(React, 'sp-dropzone', Dropzone, {}, 'SpDropzone');

