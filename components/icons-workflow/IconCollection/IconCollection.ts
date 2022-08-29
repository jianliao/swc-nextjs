import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { IconCollection } from '@spectrum-web-components/icons-workflow/src/elements/IconCollection.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-collection.js';
export const SpIconCollection = createComponent(
  React,
  'sp-icon-collection',
  IconCollection,
  {},
  'SpIconCollection'
);
