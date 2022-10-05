import * as React from 'react';
import * as Material from '@mui/material';
import { Box, Paper, Stack, Typography } from '@mui/material';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';
import { alertTriggerComponentString } from './component-definitions/alert-trigger';
import { modalTriggerComponentString } from './component-definitions/modal-trigger';
import { showErrorComponentString } from './component-definitions/show-error';
import { showInfoComponentString } from './component-definitions/show-info';
import { showSuccessComponentString } from './component-definitions/show-success';
import { showWarningComponentString } from './component-definitions/show-warning';

const scope = { React, Material };

const code = `/**
 * The following modules are imported into this codeblock:
 * import * as React from 'react';
 * import * as Material from '@mui/material';
 */
${modalTriggerComponentString}
${alertTriggerComponentString}
${showErrorComponentString}
${showInfoComponentString}
${showSuccessComponentString}
${showWarningComponentString}

// Define React application
const App = () => {
  return (
    <Material.Stack spacing={2}>
      <ShowInfo />
      <ShowWarning />
      <ShowError />
      <ShowSuccess />
      <ModalTrigger />
    </Material.Stack>
  );
};

render(<App />);
`;

export const DemoReactApp = () => {
  return (
    <Stack spacing={2} my={2} p={2} component={Paper}>
      <LiveProvider theme={theme} code={code} noInline={true} scope={scope}>
        <Box sx={{ my: 2 }}>
          <Typography variant="overline">
            Code
          </Typography>
          <LiveEditor/>
        </Box>
        <Box>
          <Typography variant="overline">
            Output
          </Typography>
          <LiveError />
          <LivePreview />
        </Box>
      </LiveProvider>
    </Stack>
  );
};
