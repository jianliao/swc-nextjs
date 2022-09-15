import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { IconTaskList } from '@spectrum-web-components/icons-workflow/src/elements/IconTaskList.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-task-list.js';
export const SpIconTaskList = createComponent(
  React,
  'sp-icon-task-list',
  IconTaskList,
  {},
  'SpIconTaskList'
);
