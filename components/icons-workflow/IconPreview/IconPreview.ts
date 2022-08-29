import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { IconPreview } from '@spectrum-web-components/icons-workflow/src/elements/IconPreview.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-preview.js';
export const SpIconPreview = createComponent(
  React,
  'sp-icon-preview',
  IconPreview,
  {},
  'SpIconPreview'
);
