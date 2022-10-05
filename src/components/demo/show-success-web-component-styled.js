import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as Emotion from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import * as Material from '@mui/material';
import * as MaterialStyles from '@mui/material/styles';
import { Box, Paper, Stack, Typography } from '@mui/material';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import theme from 'prism-react-renderer/themes/nightOwl';
import { ShowSuccess } from './component-definitions/show-success';

const scope = {
  React,
  createRoot,
  Material,
  MaterialStyles,
  Emotion,
  createEmotionCache,
  ShowSuccess
};

const code = `/**
 * The following modules are imported into this codeblock:
 * import * as React from 'react';
 * import { createRoot } from 'react-dom/client';
 * import * as Material from '@mui/material';
 * import * as MaterialStyles from '@mui/material/styles';
 * import * as Emotion from '@emotion/react'
 * import createEmotionCache from '@emotion/cache';
 * import { ShowSuccess } from demoSourceCode;
 */

class ShowSuccessElement extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const stylePoint = document.createElement('style');
    shadowRoot.appendChild(stylePoint);

    const mountPoint = document.createElement('div');
    shadowRoot.appendChild(mountPoint);

    const cssCache = createEmotionCache({
      key: 'css',
      prepend: true,
      container: stylePoint
    });

    createRoot(mountPoint).render(
      <MaterialStyles.StyledEngineProvider injectFirst>
          <Emotion.CacheProvider value={cssCache}>
            <ShowSuccess />
          </Emotion.CacheProvider>
      </MaterialStyles.StyledEngineProvider>
    );
  }
}

// This demo code block re-renders multiple times, and we cannot register the same custom element multiple times
// We are naming this custom element show-success-styled because show-success was taken by the previous code block
if (!customElements.get('show-success-styled')) {
  customElements.define('show-success-styled', ShowSuccessElement);
}

render(<show-success-styled />);
`;

export const DemoShowSuccessWebComponentStyled = () => {
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
